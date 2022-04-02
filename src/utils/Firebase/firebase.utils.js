import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABnSayLLHjF8vnmPxHvrs_XT076x0se6k",
  authDomain: "crown-clothing-db-a8a44.firebaseapp.com",
  projectId: "crown-clothing-db-a8a44",
  storageBucket: "crown-clothing-db-a8a44.appspot.com",
  messagingSenderId: "175561105479",
  appId: "1:175561105479:web:132f8b2b98effad8685162",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const googleprovider = new GoogleAuthProvider(); // we can use this new instance of 'GoogleAuthProvider' anywhere we want to integrate a google sign-in

googleprovider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleprovider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleprovider);

export const db = getFirestore();

export const createUserDataFromAuth = async (userAuth, additionalInfo = {}) => {
  // 'userAuth' is the details of the user authenticated by firebase
  // in email and password login, firebase does not let us input 'displayName', so we are passing this 'additionalInfo' object so that we can pass 'displayName' in it and store it in our database

  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  //if user data does not exist
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo, //'additionalInfo' is the custom objbect we are passing in the start of this functn and now we are passing it inside 'setDoc()' method of firebase
      });
    } catch (error) {
      console.error("Error creating the document", error.message);
    }
  }

  //if user data exists
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoryMap;
};

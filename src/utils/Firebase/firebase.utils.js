import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABnSayLLHjF8vnmPxHvrs_XT076x0se6k",
  authDomain: "crown-clothing-db-a8a44.firebaseapp.com",
  projectId: "crown-clothing-db-a8a44",
  storageBucket: "crown-clothing-db-a8a44.appspot.com",
  messagingSenderId: "175561105479",
  appId: "1:175561105479:web:132f8b2b98effad8685162",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDataFromAuth = async (userAuth) => {
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
      });
    } catch (error) {
      console.error("Error creating the document", error.message);
    }
  }

  //if user data exists
  return userDocRef;
};

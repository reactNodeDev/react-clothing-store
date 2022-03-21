import {
  signInWithGooglePopup,
  createUserDataFromAuth,
  signInWithGoogleRedirect,
  auth,
} from "./../../utils/Firebase/firebase.utils";
import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
import SignUp from "../sign-up/sign-up.component";

const SignIn = () => {
  useEffect(async () => {
    const response = await getRedirectResult(auth);

    if (response) {
      const userDocRef = await createUserDataFromAuth(response.user);
    }
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDataFromAuth(user);
  };

  return (
    <div>
      <h1> Sign in Page </h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button>
      <SignUp />
    </div>
  );
};

export default SignIn; //exporting Sign in as defaultt

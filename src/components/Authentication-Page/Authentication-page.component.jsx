import {
  signInWithGooglePopup,
  createUserDataFromAuth,
  signInWithGoogleRedirect,
  auth,
} from "../../utils/Firebase/firebase.utils";
import { getRedirectResult } from "firebase/auth";
import { useEffect, useContext } from "react";
import SignUp from "../sign-up/sign-up.component";
import SignInForm from "../sign-in/sign-in.component";
import "./authentication-page.styles.scss";
// import { CartContext } from "../../contexts/cart.context";

const AuthenticationPage = () => {
  useEffect(async () => {
    const response = await getRedirectResult(auth);

    if (response) {
      const userDocRef = await createUserDataFromAuth(response.user);
    }
  }, []);

  // const { hideCart } = useContext(CartContext);

  return (
    <div className="authentication-page">
      <SignInForm />
      <SignUp />
    </div>
  );
};

export default AuthenticationPage;

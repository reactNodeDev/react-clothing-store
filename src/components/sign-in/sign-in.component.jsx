import {
  signInWithGooglePopup,
  createUserDataFromAuth,
} from "./../../utils/Firebase/firebase.utils";

const SignIn = () => {
  // const logGoogleUser = async () => {
  //   const response = await signInWithGooglePopup();
  //   console.log(response);

  // };

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDataFromAuth(user);
  };

  return (
    <div>
      <h1> Sign in Page </h1>
      <button onClick={logGoogleUser}>log in with google</button>
    </div>
  );
};

export default SignIn; //exporting Sign in as defaultt

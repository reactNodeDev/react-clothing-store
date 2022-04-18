import { useState } from "react";
import {
  signInWithGooglePopup,
  signInUserWithEmailAndPassword,
} from "../../utils/Firebase/firebase.utils";
import ErrorMessage from "../error-message/error-message.component";
import FormInput from "../form-inputs/form-input.component";
import "./sign-in.styles.scss";
import Button, { BTN_TYPE_CLASSES } from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const [errorMessage, setErrorMsgDiv] = useState({
    msg: "",
    displayProp: "none",
  });

  // const { setCurrentUser } = useContext(UserContext); // accessing the 'setCurrentUser' property in 'UserContext' component so that we can set and store the logged-in user into the 'currentUser' property in 'UserContext'

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
    setErrorMsgDiv({ msg: "", displayProp: "none" });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInUserWithEmailAndPassword(email, password);

      // setCurrentUser(user); // here using the 'setCurrentUser' method of 'UserContext', we have set and stored the logged-in user into the 'currentUser' property of 'UseContext', so that it can be accessible to all the components

      resetFormFields();
    } catch (err) {
      switch (err.code) {
        case "auth/user-not-found":
          setErrorMsgDiv({
            msg: "No User Found with this Email",
            displayProp: "block",
          });
          break;

        case "auth/wrong-password":
          setErrorMsgDiv({ msg: "Incorrect Password", displayProp: "block" });
          break;

        default:
          console.error(err);
      }
      console.error(err);
    }
  };

  const logGoogleUser = async (e) => {
    e.preventDefault();
    await signInWithGooglePopup();
  };

  return (
    <div className="sign-in-form">
      <h2>Login</h2>
      <form action="" onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          value={email}
          onChange={handleChange}
        />
        {errorMessage.msg.includes("No User Found") && (
          <ErrorMessage errorMsg={errorMessage} />
        )}

        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          value={password}
          onChange={handleChange}
        />
        {errorMessage.msg.includes("Incorrect Password") && (
          <ErrorMessage errorMsg={errorMessage} />
        )}
        <div className="button-row">
          <div>
            <Button
              type="submit"
              children="Log In"
              buttonType={BTN_TYPE_CLASSES.default}
            />
          </div>
          <div>
            <Button
              type="button"
              onClick={logGoogleUser}
              buttonType={BTN_TYPE_CLASSES.google}
              children="Login with Google"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;

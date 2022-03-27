import { useState, Fragment } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDataFromAuth,
} from "../../utils/Firebase/firebase.utils";
import Button from "../button/button.component";
import ErrorMessage from "../error-message/error-message.component";
import FormInput from "../form-inputs/form-input.component";
import "./sign-up.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const [errorMessage, setErrorMsgDiv] = useState({
    msg: "",
    displayProp: "none",
  });

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

    if (password !== confirmPassword) {
      setErrorMsgDiv({ msg: "Passwords do not match", displayProp: "block" });
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDataFromAuth(user, { displayName }); // 'displayName' is passed as a property for the 'additionalInfo' obj which was passed as a parameter in 'createUserDataFromAuth'. 'additionalInfo' parameter was passed there bcz we wanted to pass 'displayName' too inside 'createUserDataFromAuth' here

      resetFormFields();
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setErrorMsgDiv({ msg: "Email Already In Use", displayProp: "block" });
      }
      console.error(err);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Dont Have an Account?</h2>
      <span>
        Create an Account and <b>SIGN UP</b> Now
      </span>
      <form action="" onSubmit={handleSubmit}>
        <FormInput
          label="Username"
          type="text"
          required
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />

        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          value={email}
          onChange={handleChange}
        />
        {errorMessage.msg.includes("Email") && (
          <Fragment>
            <ErrorMessage errorMsg={errorMessage} />
          </Fragment>
        )}

        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          value={password}
          onChange={handleChange}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
        {errorMessage.msg.includes("Passwords") && (
          <Fragment>
            <ErrorMessage errorMsg={errorMessage} />
          </Fragment>
        )}

        <Button type="submit" children="Sign Up" />
      </form>
    </div>
  );
};

export default SignUpForm;

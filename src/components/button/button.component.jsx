import {
  DefaultButton,
  GoogleSignInButton,
  InvertedButton,
  DisbaledInvertedButton
} from "./button.styles";

export const BTN_TYPE_CLASSES = {
  default: "default",
  google: "google-sign-in",
  inverted: "inverted",
  disabledInverted: "disabledInverted"
};

const getButton = (btnType) =>
  ({
    [BTN_TYPE_CLASSES.default]: DefaultButton,
    [BTN_TYPE_CLASSES.google]: GoogleSignInButton,
    [BTN_TYPE_CLASSES.inverted]: InvertedButton,
    [BTN_TYPE_CLASSES.disabledInverted]: DisbaledInvertedButton,
  }[btnType]);

const Button = ({ children, buttonType, classToAddProduct, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}> {children} </CustomButton>;
};

export default Button;

import "./button.styles.scss";

const BTN_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, classToAddProduct, ...otherProps }) => {
  return (
    <button
      className={`button-container ${classToAddProduct} ${BTN_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;

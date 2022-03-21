import "./error-message.styles.scss";

const ErrorMessage = ({ errorMsg }) => {
  const { msg, displayProp } = errorMsg;
  return (
    <div className="error-div">
      <span className="error-msg" style={{ display: `${displayProp}` }}>
        {msg}
      </span>
    </div>
  );
};

export default ErrorMessage;

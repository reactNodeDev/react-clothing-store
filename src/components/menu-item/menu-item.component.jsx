import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";

const MenuItem = ({
  title,
  imageUrl,
  size,
  shopNow,
  linkUrl,
  history,
  match,
}) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <div className="title">{title.toUpperCase()}</div>
        <div className="subtitle">{shopNow}</div>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);

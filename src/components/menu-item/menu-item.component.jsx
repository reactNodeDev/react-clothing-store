import "./menu-item.styles.scss";

const MenuItem = ({ title, imageurl, size, shopNow }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageurl})` }}
      ></div>
      <div className="content">
        <div className="title">{title.toUpperCase()}</div>
        <div className="subtitle">{shopNow}</div>
        {/* <span className="subtitle">{subtitle}</span> */}
      </div>
    </div>
  );
};

export default MenuItem;

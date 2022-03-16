import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as Crwnlogo } from "../../assets/crown.svg";
import "./navigation-bar.styles.scss";

const NavigationBar = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to={"/"}>
          <Crwnlogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to={"/"}>
            Home
          </Link>
          <Link className="nav-link" to={"/shop"}>
            Shop
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;

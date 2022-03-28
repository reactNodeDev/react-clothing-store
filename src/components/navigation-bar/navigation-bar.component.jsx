import { Link, Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as Crwnlogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/UserContext.context";
import { signOutUser } from "../../utils/Firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown..component";
import { CartContext } from "../../contexts/cart.context";
import "./navigation-bar.styles.scss";
import ReactDOM from "react-dom";

const NavigationBar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  // const signOutHandler = async () => {
  //   await signOutUser();
  //   setCurrentUser(null);
  // };
  // as we are using the 'onAuthStateChanged' method of firebase now, we dont need to set the current user to null manually anymore as 'onAuthStateChanged' is doing that for us now. it is telling us now if there is a user object or user is null. it sets the user object to an object on sign-in and to null on sign-out. so we just need to call the 'signOutUser' method on sign-out button now, we dont need the above 'signOutHandler' functn anymore

  const RenderDropdown = () => {
    if (isCartOpen) {
      return <CartDropdown />;
    } else {
      return;
    }
  };

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
          <CartIcon />

          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to={"/auth"}>
              SIGN IN
            </Link>
          )}
        </div>
        {isCartOpen ? <CartDropdown /> : ""}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;

import { Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { UserContext } from "../../contexts/UserContext.context";
import { signOutUser } from "../../utils/Firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown..component";
import { CartContext } from "../../contexts/cart.context";
import {
  NavigationContainer,
  NavLinksContainer,
  Navlink,
  LogoContainer,
  ShoppingIcon
} from "./navigation-bar.styles.jsx";

const NavigationBar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  // const signOutHandler = async () => {
  //   await signOutUser();
  //   setCurrentUser(null);
  // };
  // as we are using the 'onAuthStateChanged' method of firebase now, we dont need to set the current user to null manually anymore as 'onAuthStateChanged' is doing that for us now. it is telling us now if there is a user object or user is null. it sets the user object to an object on sign-in and to null on sign-out. so we just need to call the 'signOutUser' method on sign-out button now, we dont need the above 'signOutHandler' functn anymore

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to={"/"}>
          <ShoppingIcon/>
        </LogoContainer>
        <NavLinksContainer>
          <Navlink to={"/"}>Home</Navlink>
          <Navlink to={"/shop"}>Shop</Navlink>
          <CartIcon />

          {currentUser ? (
            <Navlink as="span" onClick={signOutUser}>
              SIGN OUT
            </Navlink>
          ) : (
            <Navlink to={"/auth"}>SIGN IN</Navlink>
          )}
        </NavLinksContainer>
        {isCartOpen ? <CartDropdown /> : null}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;

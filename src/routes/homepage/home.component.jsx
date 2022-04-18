import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";
import { CartContext } from "../../contexts/cart.context";
import "./home.styles.scss";

const Home = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const hideCartDropdown = () => {
    if (isCartOpen) setIsCartOpen(!isCartOpen);
    else return;
  };
  return (
    <div onClick={hideCartDropdown}>
      <Outlet />
      <Directory/>
    </div>
  );
};

export default Home;

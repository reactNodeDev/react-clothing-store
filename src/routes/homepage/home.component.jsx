import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";
import { CartContext } from "../../contexts/cart.context";
import "./home.styles.scss";

const Home = (props) => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "women",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
    },
    {
      id: 5,
      title: "men",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
    },
  ];

  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const hideCartDropdown = () => {
    if (isCartOpen) setIsCartOpen(!isCartOpen);
    else return;
  };
  return (
    <div onClick={hideCartDropdown}>
      <Outlet />
      <Directory categories={categories} />
    </div>
  );
};

export default Home;

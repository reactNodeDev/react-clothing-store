import { ReactComponent as ShoppingIcon } from "../../shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  let toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  let classToAdd = "cart-icon-container";
  if (isCartOpen) {
    classToAdd += " background-color";
  }

  return (
    <div className={classToAdd} onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">10</span>
    </div>
  );
};

export default CartIcon;

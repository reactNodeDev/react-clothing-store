import { ReactComponent as ShoppingIcon } from "../../shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);

  let toggleCartDropdown = () => {
    if (!isCartOpen) setIsCartOpen(true);
    if (isCartOpen) setIsCartOpen(false);
  };

  let classToAdd = "cart-icon-container";
  if (isCartOpen) {
    classToAdd += " active";
  }

  const totalCartItems = cartItems.length;

  return (
    <div className={classToAdd} onClick={toggleCartDropdown}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count"> {totalCartItems} </span>
    </div>
  );
};

export default CartIcon;

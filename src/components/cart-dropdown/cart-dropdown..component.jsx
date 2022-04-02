import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { Link } from "react-router-dom";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map(
          (item) =>
            item.quantity !== 0 && <CartItem key={item.id} product={item} />
        )}
        <Link to={"/checkout"}>
          <Button children="Checkout" />
        </Link>
      </div>
    </div>
  );
};

export default CartDropdown;

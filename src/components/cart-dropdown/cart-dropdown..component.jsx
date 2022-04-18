import Button, { BTN_TYPE_CLASSES } from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { Link } from "react-router-dom";
import {
  CartDropDownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map(
            (item) =>
              item.quantity !== 0 && 
              <CartItem key={item.id} product={item} />
          )
        ) : (
          <EmptyMessage> Your Cart Is Empty </EmptyMessage>
        )}
        <Link to={"/checkout"}>
        <Button children="Checkout" buttonType={BTN_TYPE_CLASSES.default} />
      </Link>
      </CartItems>
    </CartDropDownContainer>
  );
};

export default CartDropdown;

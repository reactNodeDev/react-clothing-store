import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutCartItem from "../../components/checkout-cart-item/checkout-cart-item.component";
import "./checkout-page.styles.scss";

const CheckoutPage = () => {
  const { cartItems, letsCalculateCartTotal, cartTotal } =
    useContext(CartContext);

  letsCalculateCartTotal(cartItems);

  return (
    <>
      <div class="checkout-items-grid">
        {cartItems !== [] &&
          cartItems.map(
            (item) =>
              item.quantity !== 0 && (
                <CheckoutCartItem key={item.id} item={item} />
              )
          )}
      </div>
      <h3 className="subtotal">Subtotal - {cartTotal} $</h3>

      <button className="proceed-to-pay-btn"> Proceed To Pay </button>
    </>
  );
};

export default CheckoutPage;

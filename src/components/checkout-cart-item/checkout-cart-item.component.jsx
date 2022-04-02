import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout-cart-item.styles.scss";

const CheckoutCartItem = ({ item }) => {
  const { name, price, imageUrl, quantity } = item;
  const { addItemToCart, subtractItemFromCart } = useContext(CartContext);

  const changeCartItemQuantity = (e) => {
    if (e.target.classList.contains("add-to-quantity")) addItemToCart(item);
    if (
      e.target.classList.contains("subtract-from-quantity") &&
      item.quantity !== 0
    )
      subtractItemFromCart(item);
  };

  return (
    <div class="checkout-cart-item">
      <div class="product-image-container">
        <img src={imageUrl} class="product-image" alt="" />
      </div>

      <div class="product-info-container">
        <span class="name">
          {quantity} X {name}
        </span>
        <span class="price"> {price} $ </span>
        <div class="cart-item-button-container">
          <button
            class="cart-button subtract-from-quantity"
            onClick={changeCartItemQuantity}
          >
            -
          </button>
          <span class="quantity"> {quantity} </span>
          <button
            class="cart-button add-to-quantity"
            onClick={changeCartItemQuantity}
          >
            +
          </button>
          <button class="cart-button delete-button">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCartItem;

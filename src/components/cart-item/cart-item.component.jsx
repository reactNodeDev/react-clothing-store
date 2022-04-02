import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./cart-item.styles.scss";

const CartItem = ({ product }) => {
  const { name, imageUrl, price } = product;
  let { quantity } = product;

  const { addItemToCart, subtractItemFromCart } = useContext(CartContext);

  const changeQuantity = (e) => {
    if (e.target.classList.contains("add-to-quantity")) {
      addItemToCart(product);
    }

    if (
      e.target.classList.contains("subtract-from-quantity") &&
      quantity !== 0
    ) {
      subtractItemFromCart(product);
    }
  };

  return (
    <div class="cart-item">
      <div class="cart-product-img-container">
        <img src={imageUrl} alt="" />
      </div>

      <div class="cart-product-info-container">
        <p className="name">{name}</p>
        <p className="price"> {price * quantity} $ </p>
        <div className="cart-item-div div-1">
          <button className="add-to-quantity" onClick={changeQuantity}>
            +
          </button>
          <span style={{ margin: "auto 0.1rem", padding: "0.4rem" }}>
            {quantity}
          </span>
          <button className="subtract-from-quantity" onClick={changeQuantity}>
            -
          </button>
        </div>
        <div className="cart-item-div div-2">
          <button>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

import Button from "../button/button.component";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { id, name, imageUrl, price } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name" id={id}>
          {name}
        </span>
        <span className="price"> {price}$ </span>
      </div>
      <Button children="Add To Cart" buttonType="inverted" />
    </div>
  );
};

export default ProductCard;

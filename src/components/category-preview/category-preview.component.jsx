import Button from "../button/button.component";
import ProductCard from "../product-card/product-card.component";
import "./category-preview.styles.scss";

const CategoryPreview = ({ title, products }) => {
  return (
    <>
      <h2 className="title"> {title.toUpperCase()}</h2>
      <div className="category-preview">
        {products
          .filter((_, index) => index < 4)
          .map((product, i) => {
            return (
              <div className={`product product-${i + 1}`}>
                <ProductCard key={product.id} product={product} />
              </div>
            );
          })}
        <div className="see-more-div">
          <Button
            children={`See All ${title.toUpperCase()}`}
            buttonType="inverted"
          />
        </div>
      </div>
    </>
  );
};

export default CategoryPreview;

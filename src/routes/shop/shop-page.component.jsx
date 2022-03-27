import { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { ProductsContext } from "../../contexts/products.context";
import "./shop-page.styles.scss";

const ShopPage = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((product) => {
        return (
          <div>
            <ProductCard key={product.id} product={product} />
          </div>
        );
      })}
    </div>
  );
};

export default ShopPage;

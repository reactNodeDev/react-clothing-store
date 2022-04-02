import { useContext, Fragment } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { CategoriesContext } from "../../contexts/categories.context";
import "./categories-preview-page.styles.scss";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <div className="shop-container">
            <CategoryPreview key={title} title={title} products={products} />
          </div>
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;

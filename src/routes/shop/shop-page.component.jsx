import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview-page/categories-preview-page.component";
import CategoryProducts from "../category-products/category-products.component";

const ShopPage = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<CategoryProducts />} />
    </Routes>
  );
};

export default ShopPage;

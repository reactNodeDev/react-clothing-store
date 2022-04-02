import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/navigation-bar/navigation-bar.component";
import Home from "./routes/homepage/home.component";
import AuthenticationPage from "./components/Authentication-Page/Authentication-page.component";
import ShopPage from "./routes/shop/shop-page.component";
import CheckoutPage from "./routes/checkout/checkout-page.component";
import CategoryPreview from "./components/category-preview/category-preview.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="/shop/*" element={<ShopPage />} />
        <Route path="/auth" element={<AuthenticationPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/preview" element={<CategoryPreview />} />
      </Route>
    </Routes>
  );
};

export default App;

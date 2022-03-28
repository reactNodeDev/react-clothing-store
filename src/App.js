import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/navigation-bar/navigation-bar.component";
import Home from "./routes/homepage/home.component";
import AuthenticationPage from "./components/Authentication-Page/Authentication-page.component";
import ShopPage from "./routes/shop/shop-page.component";

const CheckOutPage = () => {
  return (
    <>
      <h1>checkout page</h1>
    </>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/auth" element={<AuthenticationPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
      </Route>
    </Routes>
  );
};

export default App;

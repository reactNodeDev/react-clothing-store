import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/navigation-bar/navigation-bar.component";
import Home from "./routes/homepage/home.component";

const Shop = () => {
  return (
    <div>
      <h1> Shop Page </h1>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;

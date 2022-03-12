import { Component } from "react/cjs/react.development";
import { Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/pages/homepage/homepage.component";
import ShopPage from "./components/pages/homepage/shop/shop.component";
import { Switch } from "react-router-dom";
import Header from "./components/header/header.component";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path={"/"} component={Homepage} />
          <Route path={"/shop"} component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

export default App;

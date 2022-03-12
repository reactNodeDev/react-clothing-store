import { Component } from "react/cjs/react.development";
import { Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/pages/homepage/homepage.component";
import ShopPage from "./components/pages/homepage/shop/shop.component";

const Hatspage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Hats Page </h1>
    </div>
  );
};

const Specifichatpage = (props) => {
  return <h1> This is hat number {props.match.params.hatsID} </h1>;
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path={"/"} component={Homepage} />
        <Route exact path={"/hats"} component={Hatspage} />
        <Route path={"/hats/:hatsID"} component={Specifichatpage} />
        <Route path={"/shop"} component={ShopPage} />

        <Route exact path={"/blog.hot/specific/hats"} component={Hatspage} />
        <Route
          path={"/blog.hot/specific/hats/:hatsID"}
          component={Specifichatpage}
        />
      </div>
    );
  }
}

export default App;

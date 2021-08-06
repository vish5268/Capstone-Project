import "./styles.css";
import React from "react";

// Importing component
import Header from "./components/Header";

// Importing pages
import Photos from "./pages/Photos";
import Cart from "./pages/Cart";

// Importing Router components
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Photos />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
};

export default App;

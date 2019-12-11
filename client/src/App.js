import React from "react";
// import './bootstrap.min.css'
import { Button } from "reactstrap";
import "./App.css";
import AppNavbar from "./component/AppNavbar";
import ShoppingList from "./component/ShoppingList";
import ItemModal from "./component/ItemModal";
import { Provider } from "react-redux";
import store from "./store";
import CategoryList from "./component/CategoryList";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <ItemModal />
        <ShoppingList />
        <CategoryList />
      </div>
    </Provider>
  );
}

export default App;

import "./App.css";
import Products from "./components/Products/Products.js";
import { PRODUCT_DATA } from "./ProductItems.js";
import Search from "./components/Search/Search.js";
import { useState } from "react";

const App = () => {
  const [productName, setProductName] = useState("");

  return (
    <>
      <Search setProductName={setProductName} />
      <Products productItems={PRODUCT_DATA} productName={productName} />
    </>
  );
};

export default App;

import "./App.css";
import Products from "./components/Products/Products.js";
import Filter from "./components/Filter/Filter.js";
import { PRODUCT_DATA } from "./ProductItems.js";
import { useState } from "react";

const App = () => {
  const [selectedTab, setSelectedTab] = useState("همه");
  function selectedTabHandler(category) {
    setSelectedTab(category);
  }
  return (
    <>
      <Filter
        productItems={PRODUCT_DATA}
        selectedTabHandler={selectedTabHandler}
        selectedTab={selectedTab}
      />
      <Products productItems={PRODUCT_DATA} selectedTab={selectedTab} />
    </>
  );
};
export default App;

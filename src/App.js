import "./App.css";
import Products from "./components/Products/Products.js";
import Filter from "./components/Filter/Filter.js";
import { PRODUCT_DATA } from "./ProductItems.js";

const App = () => {
  return (
    <>
      <Filter productItems={PRODUCT_DATA} />
      <Products productItems={PRODUCT_DATA} />
    </>
  );
};
export default App;

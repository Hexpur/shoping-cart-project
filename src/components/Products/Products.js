import Card from "../UI/Card.js";
import ProductItem from "./ProductItem.js";
import "./Products.css";

function Products({ productItems, selectedTab }) {
  return (
    <Card className="products">
      {productItems
        .filter((product) => product.category === selectedTab)
        .map((product, index) => (
          <ProductItem key={index} {...product} />
        ))}
    </Card>
  );
}

export default Products;

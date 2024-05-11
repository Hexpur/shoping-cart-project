import Card from "../Card.js";
import ProductItem from "./ProductItem.js";
import "./Products.css";

function Products({ productItems }) {
  return (
    <Card className="products">
      {productItems.map((product, index) => (
        <ProductItem key={index} {...product} />
      ))}
    </Card>
  );
}

export default Products;

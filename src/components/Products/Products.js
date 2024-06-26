import Card from "../UI/Card.js";
import ProductItem from "./ProductItem.js";
import "./Products.css";

function Products({ productItems, productName }) {
  return (
    <Card className="products">
      {productItems
        .filter((p) => p.title.includes(productName))
        .map((product, index) => (
          <ProductItem key={index} {...product} />
        ))}
    </Card>
  );
}

export default Products;

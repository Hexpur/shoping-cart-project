import "./Filter.css";

export default function Filter({ productItems }) {
  const categoryItems = productItems.map((product) => product.category);
  const categoryUniqueItems = categoryItems.filter(
    (category, index) => categoryItems.indexOf(category) === index
  );
  return (
    <div className="filter">
      <ul className="filter__list">
        {categoryUniqueItems.map((category, index) => (
          <li key={index}>
            <button>{category}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

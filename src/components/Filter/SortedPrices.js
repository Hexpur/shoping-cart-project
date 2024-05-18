import "./Filter.css";

function SortedPrices(props) {
  const prices = [100, 200, 400, 1000];

  return (
    <div className="filter">
      <ul className="filter__list">
        {prices.map((price, index) => (
          <li key={index}>
            <button
              className={props.selectedPrice === price ? "active" : ""}
              onClick={() => props.selectedPriceHandler(price)}
            >
              {price}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SortedPrices;

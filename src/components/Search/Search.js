import { useState } from "react";
import Card from "../UI/Card";
import "./Search.css";
import { useRef } from "react";

function Search({ setProductName }) {
  const productNameRef = useRef();
  const [isSearching, setIsSearching] = useState(false);
  // const [productName, setProductName] = useState("");

  // function setProductNameValue(e) {
  //   setProductName(e.target.value);
  // }

  function HandleSearchBox() {
    isSearching
      ? submitInput()
      : setIsSearching((latestIsSearchingValue) => !latestIsSearchingValue);
  }

  let timer = useRef();

  function submitInput() {
    if (timer) clearTimeout(timer);
    timer.current = setTimeout(() => {
      console.log(productNameRef.current.value);
      setProductName(productNameRef.current.value);
    }, 1000);
  }

  return (
    <Card className="search">
      {isSearching ? (
        <input
          type="text"
          placeholder="نام محصول مورد نظر"
          ref={productNameRef}
          // value={productName}
          onChange={submitInput}
        />
      ) : null}
      <button onClick={HandleSearchBox}>
        {isSearching ? "جستجو" : "جستجو نام محصول"}
      </button>
    </Card>
  );
}

export default Search;

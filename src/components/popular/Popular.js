import React, { useEffect, useState } from "react";
import "../popular/Popular.css";
import axios from "axios";

const Popular = () => {
  const products = [
    "All",
    "Milks & Dairies",
    "Coffes & Teas",
    "Pet Foods",
    "Meats",
    "Vegetables",
    "Fruits",
  ];

  //   const [items, setItems] = useState([]);

  //   const getProducts = async () => {
  //     try {
  //       const response = await axios.get("https://dummyjson.com/products");
  //       setItems(response?.data);
  //       console.log(items?.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   useEffect(() => {
  //     getProducts();
  //   }, []);

  const product = products?.map((e, i) => <li key={i}> {e} </li>);
  return (
    <div className="popular">
      <div className="container">
        <div className="popular_contents">
          <div className="title">
            <h3>Popular Products</h3>
            <ul>{product}</ul>
          </div>
          <div className="p_cards">
            <div className="p_card">
              {/* <button></button> */}
              {/* <img src={} alt="product" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;

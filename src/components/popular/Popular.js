import React, { useEffect, useState } from "react";
import "../popular/Popular.css";
import axios from "axios";
import star from "../../assets/images/star.svg";
import cart2 from "../../assets/images/cart_btn.svg";

const Popular = () => {
  const API = "https://dummyjson.com/products";
  const products = [
    "All",
    "Milks & Dairies",
    "Coffes & Teas",
    "Pet Foods",
    "Meats",
    "Vegetables",
    "Fruits",
  ];
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(API)
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
    // .finally()
  }, []);
  const cards = data.slice(1, 11)?.map((pro) => (
    <div className="p_card">
      <button>{pro.brand}</button>
      <img src={pro.images[0]} alt="product" />
      <h5>{pro.title}</h5>
      <h3>{pro.description}</h3>
      <div className="rate">
        <img src={star} alt="rating" />
        <h6>{pro.rating}</h6>
      </div>
      <p>By {pro.category}</p>
      <div className="cost">
        <p>
          $ {pro.price} <span>${`${pro.price + 5.67}`}</span>
        </p>
        <button>
          <img src={cart2} alt="cart" />
          Add
        </button>
      </div>
    </div>
  ));
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
          <div className="p_cards">{cards}</div>
        </div>
      </div>
    </div>
  );
};

export default Popular;

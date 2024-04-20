import React from "react";
import "../shop/Shop.css";
import banner1 from "../../assets/images/banner-1.png";
import banner2 from "../../assets/images/banner-2.png";
import banner3 from "../../assets/images/banner-3.png";

const Shop = () => {
  const card = [
    {
      id: 1,
      title: `Everyday Fresh &
        Clean with Our
        Products`,
      image: banner1,
    },
    {
      id: 2,
      title: `Make your Breakfast
        Healthy and Easy`,
      image: banner2,
    },
    {
      id: 3,
      title: `The best Organic
        Products Online`,
      image: banner3,
    },
  ];
  const cards = card?.map((e) => (
    <div
      style={{ backgroundImage: `url(${e.image})` }}
      key={e.id}
      className="card"
    >
      <h3>{e.title}</h3>
      <button>Shop Now</button>
    </div>
  ));

  return (
    <div className="shop">
      <div className="container">
        <div className="shop_cards">{cards}</div>
      </div>
    </div>
  );
};

export default Shop;

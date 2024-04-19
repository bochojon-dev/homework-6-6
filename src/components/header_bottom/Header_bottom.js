import React from "react";
import "./Header_bottom.css";
import logo from "../../assets/images/logo.png";
import search from "../../assets/images/search.svg";
import user from "../../assets/images/user.svg";
import heart from "../../assets/images/heart.svg";
import cart from "../../assets/images/cart.svg";
const Header_bottom = () => {
  const icons = [
    {
      id: 1,
      image: user,
      title: "Account",
    },
    {
      id: 2,
      image: heart,
      title: "Wishlist",
    },
    {
      id: 3,
      image: cart,
      title: "Cart",
    },
  ];
  let icon = icons.map((e) => (
    <li key={e.id}>
      <img src={e.image} alt="icon" />
      <p>{e.title}</p>
    </li>
  ));

  return (
    <div className="bottom">
      <div className="container">
        <div className="bottom_contents">
          <div className="logo">
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="inputs">
            <form>
              <input type="text" placeholder="Search for items..." />
              <select name="search">
                <option value="All categories">All categories</option>
                <option value="Vegetables">Vegetables</option>
                <option value="Clothes">Clothes</option>
              </select>
              <span>
                <img src={search} alt="search" />
              </span>
            </form>
          </div>
          <div className="icons">
            <ul>{icon}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header_bottom;

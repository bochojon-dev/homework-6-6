import React from "react";
import "../banner/Banner.css";
import cross from "../../assets/images/cross.svg";
import { BsSend } from "react-icons/bs";
const Banner = () => {
  const tips = ["Shopping", "Recips", "Kitchen", "News", "Food"];
  const types = tips?.map((el) => (
    <button>
      <img src={cross} alt="cross" />
      <p>{el}</p>
    </button>
  ));
  return (
    <div className="banner">
      <div className="container">
        <div className="banner_contents">
          <div className="texts">
            <h3>
              <span>100%</span> Organic Vegetables
            </h3>
            <h2>The best way to stuff your wallet.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              reiciendis beatae consequuntur.
            </p>
            <div className="banner_input">
              <div className="img">
                <BsSend />
              </div>
              <input type="text" placeholder="Your email address" />
              <button>Subscribe</button>
            </div>
          </div>
          <div className="types">{types}</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

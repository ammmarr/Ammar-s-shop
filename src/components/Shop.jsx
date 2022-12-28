import React from "react";
import ShopItem from "./ShopItem";
import "../componentsStyles/Shop.css";
import shopItems from "../data/shopItems";
import { useLocation } from "react-router-dom";

const Shop = () => {
  const location = useLocation();

  

  return (
    <div
      className="shop-contianer"
      style={location.pathname != "/" ? { marginTop: "25vh" } : null}
    >
      <div className="shop-title">
        <h3>BROWSE OUR ITEMS</h3>
        <h1>Ideal for your Home</h1>
        <span></span>
      </div>
      <div className="shop-container-items-wrapper">
        {shopItems.map((item) => (
          <ShopItem
            key={item.id}
            img={item.img}
            category={item.category}
            name={item.name}
            price={item.price}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};
export default Shop;

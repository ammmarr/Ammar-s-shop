/* eslint-disable no-unused-vars */
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions } from "../store/cartSlice";

const ShopItem = (props) => {
  const [outline, setOutline] = useState(false);
  const outlineTriggerBag = () => setOutline((prev) => !prev);

  const cartItems = useSelector((state) => state.cart.itemsList);

  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(
      cartActions.removeFromCart({
        id: props.id,
      })
    );
  };
  const handleCartClick = () => {
    if (outline) {
      removeFromCart();
    } else addToCart();
    outlineTriggerBag();
  };
  const addToCart = () => {
    dispatch(
      cartActions.addToCart({
        name: props.name,
        id: props.id,
        price: props.price,
        Img: props.img,
        quantity: 1,
      })
    );
  };

  return (
    <div className="shop-item-container" key={props.price}>
      <Link
        to={`/${props.id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="image-wrapper">
          <img src={props.img} className="shop-img" />
          <div className="hover-animation-div">
            {cartItems.find((x) => x.id == props.id) ? (
              <div className="icon-wrapper" onClick={() => handleCartClick()}>
                <ShoppingBagIcon />
              </div>
            ) : (
              <div className="icon-wrapper" onClick={() => handleCartClick()}>
                <ShoppingBagOutlinedIcon />
              </div>
            )}

            <div className="icon-wrapper">
              <SearchOutlinedIcon />
            </div>
          </div>
        </div>
        <div className="pricing-name">
          <div>{props.name}</div>
          <div>{props.price}</div>
        </div>
        <div className="category-type">{props.category}</div>
      </Link>
    </div>
  );
};
export default ShopItem;

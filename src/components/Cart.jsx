import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../componentsStyles/Cart.css";
import ClearIcon from "@mui/icons-material/Clear";
import { cartActions } from "../store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.itemsList);

  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(
      cartActions.removeFromCart({
        id: id,
      })
    );
  };

  var num = 0;
  const incQuantity = (id) => {
    dispatch(
      cartActions.incQuantity({
        id: id,
        quantity: ++num,
      })
    );
  };
  const decQuantity = (id) => {
    dispatch(
      cartActions.decQuantity({
        id: id,
      })
    );
  };

  return (
    <div className="cart-container">
      <h2>YOUR CART</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <div
              className="cart-item-section-icon"
              onClick={() => removeFromCart(item.id)}
            >
              <ClearIcon />
            </div>
            <div className="cart-item-section2">
              <img src={item.itemImg}></img>

              <h4>{item.name}</h4>
            </div>
            <div className="cart-item-section">
              <h4>${item.price}</h4>
            </div>
            <div className="cart-item-section quantity-selection">
              <button onClick={() => decQuantity(item.id)}> -</button>
              <h4>{item.quantity}</h4>
              <button onClick={() => incQuantity(item.id)}>+ </button>
            </div>
            <div className="cart-item-section cart-item-section-right">
              <h4>${item.subTotal}</h4>
            </div>
          </div>
        ))
      ) : (
        <h3>YOUR CART IS EMPTY! </h3>
      )}
    </div>
  );
};
export default Cart;

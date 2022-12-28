import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    totalQuantity: 30,
    itemsList: [],
    showCart: false,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.itemsList.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.itemsList.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: newItem.quantity,
          subTotal: parseInt(newItem.price) * newItem.quantity,
          itemImg: newItem.Img,
        });
      }
    },
    removeFromCart(state, action) {
      const ItemId = action.payload.id;
      const filtered = state.itemsList.filter((item) => item.id !== ItemId);
      state.itemsList = filtered;
    },
    incQuantity(state, action) {
      const itemIndex = state.itemsList.findIndex(
        (cartItem) => cartItem.id == action.payload.id
      );
      if (state.itemsList[itemIndex].quantity > 0) {
        state.itemsList[itemIndex].quantity++;
        state.itemsList[itemIndex].subTotal =
          parseInt(state.itemsList[itemIndex].quantity) *
          state.itemsList[itemIndex].price;
      } else {
        state.itemsList;
      }
    },
    decQuantity(state, action) {
      const itemIndex = state.itemsList.findIndex(
        (cartItem) => cartItem.id == action.payload.id
      );
      if (state.itemsList[itemIndex].quantity > 1) {
        state.itemsList[itemIndex].quantity--;
        state.itemsList[itemIndex].subTotal =
          parseInt(state.itemsList[itemIndex].quantity) *
          state.itemsList[itemIndex].price;
      } else if (state.itemsList[itemIndex].quantity == 1) {
        const filtered = state.itemsList.filter(
          (item) => item.id !== action.payload.id
        );

        state.itemsList = filtered;
      } else {
        state.itemsList;
      }
    },

    setShowCart(state) {
      state.showCart = true;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;

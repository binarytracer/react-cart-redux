import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalQuantity: 0, changed: false },
  reducers: {
    addItemToCart(state, action) {
      state.changed = true;
      const { payload: item } = action;
      state.totalQuantity++;

      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      } else {
        state.items.push({ ...item, quantity: 1, totalPrice: item.price });
      }
    },
    removeItemFromCart(state, action) {
      state.changed = true;
      const { payload: id } = action;
      const existingItem = state.items.find((i) => i.id === id);

      state.totalQuantity--;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((i) => i.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      }
    },

    adjustQuantity(state, action) {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((i) => i.id === id);

      existingItem.quantity += quantity;
      state.totalQuantity += quantity;

      if (existingItem.quantity <= 0) {
        state.items = state.items.filter((i) => i.id !== id);
      } else {
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      }
    },

    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;

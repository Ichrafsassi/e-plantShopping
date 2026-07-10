import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
      state.totalQuantity++;
    },
    removeItem: (state, action) => {
      const itemName = action.payload;
      const item = state.items.find(i => i.name === itemName);
      if (item) {
        state.totalQuantity -= item.quantity;
        state.items = state.items.filter(i => i.name !== itemName);
      }
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.items.find(i => i.name === name);
      if (item) {
        const diff = quantity - item.quantity;
        item.quantity = quantity;
        state.totalQuantity += diff;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;

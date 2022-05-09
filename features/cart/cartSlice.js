import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  cart: {},
  status: "idle",
  error: null,
};

export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
  const response = await localStorage.getItem("user-123");
  return JSON.parse(response);
});

export const addCart = createAsyncThunk("cart/addCart", async (cartObj) => {
  console.log(cartObj);
  const response = await localStorage.setItem("user-123", cartObj);
  return localStorage.getItem("user-123");
});

export const deleteCart = createAsyncThunk("cart/deleteCart", async () => {
  const response = await localStorage.removeItem("user-123");
  return localStorage.getItem("user-123");
});

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartUpdated(state, action) {
      const { itemId, quantity, totalPrice } = action.payload;
      const existingCart = state.cart.find((cart) => cart.itemId === itemId);
      if (existingCart) {
        existingCart.quantity = quantity;
        existingCart.totalPrice = totalPrice;
      }
    },
    cartDeleted(state, action) {
      const { itemId } = action.payload;
      const existingCart = state.cart.find((cart) => cart.itemId === itemId);
      if (existingCart) {
        localStorage.removeItem(itemId);
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCart.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cart = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addCart.fulfilled, (state, action) => {
        state.cart = JSON.parse(action.payload);
      })
      .addCase(deleteCart.fulfilled, (state, action) => {
        state.cart = JSON.parse(action.payload);
      });
  },
});

export const { cartDeleted, cartUpdated } = cartSlice.actions;

export const selectAllCarts = (state) => state.cart.cart;

export default cartSlice.reducer;

// cartAdded: {
//   reducer(state, action) {
//     state.push(action.payload);
//   },
//   prepare(
//     itemId,
//     itemName,
//     imageURL,
//     quantity,
//     basePrice,
//     discountPercentage,
//     netPricePerItem,
//     totalPrice
//   ) {
//     return {
//       payload: {
//         itemId,
//         itemName,
//         imageURL,
//         quantity,
//         basePrice,
//         discountPercentage,
//         netPricePerItem,
//         totalPrice,
//       },
//     };
//   },
// },

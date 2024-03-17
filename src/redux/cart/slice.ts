import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartItem, CartItemSliceState, Status } from './types'
import { calcTotalPrice } from '../../utils/calcTotalPrice'
import { fetchCartItems } from './asyncAction'

const initialState: CartItemSliceState = {
  items: [],
  totalPrice: 0,
  status: Status.LOADING
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<CartItem[]>) {
      state.items = action.payload;
      state.totalPrice = calcTotalPrice(state.items)
    },
    plusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.id === action.payload)
      if (findItem) {
        findItem.count++
      }
      state.totalPrice = calcTotalPrice(state.items);
    },
    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.id === action.payload)

      if (findItem) {
        findItem.count--
      }

      state.totalPrice = calcTotalPrice(state.items)
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = calcTotalPrice(state.items)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCartItems.pending, (state) => {
      state.items = [];
      state.totalPrice = 0;
      state.status = Status.LOADING
    });

    builder.addCase(fetchCartItems.fulfilled, (state, action) => {
      state.items = action.payload;
      state.totalPrice = calcTotalPrice(state.items);
      state.status = Status.SUCCESS
    });
    
    builder.addCase(fetchCartItems.rejected, (state) => {
      state.items = [];
      state.totalPrice = 0;
      state.status = Status.ERROR
    });
  },
});

export const { setItems, plusItem, minusItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
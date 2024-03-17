import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { CartItem } from './types'

export const fetchCartItems = createAsyncThunk<CartItem[]>(
  'cartItem',
  async() => {
    const { data } = await axios.get<CartItem[]>(
      'https://65f4c474f54db27bc0224e9c.mockapi.io/cart-items'
    );    
    return data
  }
)
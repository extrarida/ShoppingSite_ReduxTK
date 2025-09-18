import { createSlice } from '@reduxjs/toolkit';

//creating a slice for the cart part of the app
const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
    }
});

const initialState = ({
    cartItems: [],
});


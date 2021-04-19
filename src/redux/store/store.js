import { combineReducers, configureStore } from '@reduxjs/toolkit';
import React from 'react';
import productReducer from '../slice/product-slice'
import cartReducer from '../slice/cart-slice'
const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer
})
const store = configureStore({
    reducer: rootReducer
})

export default store;
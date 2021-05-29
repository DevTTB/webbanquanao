import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productReducer from '../slice/product-slice'
import cartReducer from '../slice/cart-slice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from '../slice/user-slice';
import userSigninReducer from '../slice/userSignin-slice'

const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer,
    user: userReducer,
    userSignin: userSigninReducer,
})
const persistConfig = {
    key: 'root',
    storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer
})
export const persistor = persistStore(store)

export default store;
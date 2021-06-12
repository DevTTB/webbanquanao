import { createSlice } from '@reduxjs/toolkit'

const cart = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItemToCart: (state, action) => {
            const updateItemId = action.payload.productId
            const itemIndex = state.findIndex(item => item.productId === updateItemId)
            console.log(action.payload)
            if (itemIndex >= 0) {
                state[itemIndex].quantity++
            } else {
                state.push(action.payload)
            }

        },
        removeItemToCart: (state, action) => {
            const removeItemId = action.payload.id
            return state.filter(item => item.productId !== removeItemId)
        },
        increaseItemQuantity: (state, action) => {
            const idItem = action.payload.id
            const itemIndex = state.findIndex(item => item.productId === idItem)
            if (itemIndex >= 0) {
                state[itemIndex].quantity++
            }
        },
        decreaseItemQuantity: (state, action) => {
            const idItem = action.payload.id
            const itemIndex = state.findIndex(item => item.productId === idItem)
            if (itemIndex >= 0) {
                state[itemIndex].quantity--
            }
        },
        paymentSuccess: (state, action) => {
            console.log('slice:', action.payload)
            return state.filter(item => item.productId === 999)
        }

    }
})
const { reducer, actions } = cart
export const { addItemToCart, removeItemToCart, increaseItemQuantity, decreaseItemQuantity, paymentSuccess } = actions
export default reducer
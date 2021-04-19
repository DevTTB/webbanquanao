import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import productApi from '../../custom-axios/productApi'

export const setProduct = createAsyncThunk('product', async (params, thunkAPI) => {
    const dataProduct = await productApi.getAll()
    return dataProduct
})

const product = createSlice({
    name: 'photo',
    initialState: {
        data: [],
        loading: false,
        error: ''
    },
    reducers: {
        addItemToProduct: (state, action) => {
            state.push(action.payload)
        }
    },
    extraReducers: {
        [setProduct.pending]: (state) => {
            state.loading = true
        },
        [setProduct.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error
        },
        [setProduct.fulfilled]: (state, action) => {
            state.loading = false
            state.data = action.payload
        }
    }

})
const { reducer, actions } = product
export const { addItemToProduct } = actions
export default reducer
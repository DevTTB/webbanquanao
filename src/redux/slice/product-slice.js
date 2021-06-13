import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import productApi from '../../custom-axios/productApi'

export const getProduct = createAsyncThunk('product/getProduct', async (params, thunkAPI) => {
    const data = await productApi.getAll()
    return data
})

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        loading: false,
        error: false
    },
    reducers: {},
    extraReducers: {
        [getProduct.pending]: (state, action) => {
            state.loading = true
        },
        [getProduct.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error
        },
        [getProduct.fulfilled]: (state, action) => {
            state.loading = false
            state.data = action.payload
        },
    }
})

const { reducer: productReducer } = productSlice
export default productReducer


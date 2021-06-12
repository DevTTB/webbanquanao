import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import productApi from '../../custom-axios/productApi'

export const setProduct = createAsyncThunk('product', async (params, thunkAPI) => {
    const dataProduct = await productApi.getAll()
    return dataProduct
})

const product = createSlice({
    name: 'product',
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
        [setProduct.pending]: (state) => state.loading = true,
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

const productCreate = createSlice({
    name: 'product',
    initialState: {
        data: [],
        loading: false,
        error: ''
    },
    reducers: {},
    extraReducers: {
        [setProduct.pending]: (state) => state.loading = true,
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

const productUpdate = createSlice({
    name: 'product',
    initialState: {
        data: [],
        loading: false,
        error: ''
    },
    reducers: {},
    extraReducers: {
        [setProduct.pending]: (state) => state.loading = true,
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

const productDelete = createSlice({
    name: 'product',
    initialState: {
        data: [],
        loading: false,
        error: ''
    },
    reducers: {},
    extraReducers: {
        [setProduct.pending]: (state) => state.loading = true,
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

const { reducer: productReducer, actions } = product
const { reducer: productCreateReducer, actionsCreate } = productCreate
const { reducer: productUpdateReducer, actionsUpdate } = productUpdate
const { reducer: productDeleteReducer, actionsDelete } = productDelete

export const { addItemToProduct } = actions

export {
    productReducer,
    productUpdateReducer,
    productCreateReducer
}

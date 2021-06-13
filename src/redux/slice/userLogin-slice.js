import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import userLoginApi from "../../custom-axios/userLoginApi";
import Cookie from "js-cookie"
import userSignupApi from "../../custom-axios/userSignupApi";


export const loginUser = createAsyncThunk('userLogin', async (params, thunkAPI) => {
    const data = await userLoginApi.post(params.email, params.password)
    Cookie.set('user-info', JSON.stringify(data))
    return data
})

export const signupUser = createAsyncThunk('userSignup', async (params, thunkAPI) => {
    const data = await userSignupApi.post(params.name, params.email, params.password)
    Cookie.set('user-info', JSON.stringify(data))
    return data
})

export const updateUser = createAsyncThunk('userUpdate', async (params, thunkAPI) => {
    const data = await userSignupApi.post(params.id, params.name, params.email, params.password)
    Cookie.set('user-info', JSON.stringify(data))
    return data
})

const userLogin = createSlice({
    name: 'userLogin',
    initialState: {
        userInfo: [],
        loading: false,
        error: ''
    },
    reducers: {},
    extraReducers: {
        [loginUser.pending]: (state) => state.loading = true,
        [loginUser.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error
        },
        [loginUser.fulfilled]: (state, action) => {
            state.loading = false
            state.userInfo = action.payload
        },
        [signupUser.pending]: (state) => {
            state.loading = true
        },
        [signupUser.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error
        },
        [signupUser.fulfilled]: (state, action) => {
            state.loading = false
            state.userInfo = action.payload
        }
    }

})
const userSignup = createSlice({
    name: 'userSignup',
    initialState: {
        userInfo: [],
        loading: false,
        error: ''
    },
    reducers: {},
    extraReducers: {
        [signupUser.pending]: (state) => {
            state.loading = true
        },
        [signupUser.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error
        },
        [signupUser.fulfilled]: (state, action) => {
            state.loading = false
            state.userInfo = action.payload
        }
    }
})

const { reducer: userLoginReducer , actionsLogin } = userLogin
const { reducer: userSignupReducer , actionsSignup } = userSignup

export {
    userLoginReducer,
    userSignupReducer,
}
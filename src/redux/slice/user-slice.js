import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../custom-axios/userApi";
import userLoginApi from "../../custom-axios/userLoginApi";
import userSignupApi from "../../custom-axios/userSignupApi";

export const getUser = createAsyncThunk('user/getUser', async () => {
    const currentUser = await userApi.getUser()
    return currentUser
})

export const loginUser = createAsyncThunk('userLogin', async (params, thunkAPI) => {
    const data = await userLoginApi.post(params?.email, params?.password)
    return data
})

export const signupUser = createAsyncThunk('userSignup', async (params, thunkAPI) => {
    const data = await userSignupApi.post(params?.name, params?.email, params?.password)
    return data
})

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: {},
        loading: false,
        error: false
    },
    reducers: {},
    extraReducers: {
        [getUser.pending]: (state) => {
            state.loading = true
        },
        [getUser.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error
        },
        [getUser.fulfilled]: (state, action) => {
            state.loading = false
            state.current = action.payload
        },
        [loginUser.pending]: (state) => {
            state.loading = true
        },
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

const { reducer: userReducer } = userSlice
export default userReducer
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import userSigninApi from "../../custom-axios/userSigninApi";
import Cookie from "js-cookie"


export const signinUser = createAsyncThunk('userSignin', async (params, thunkAPI) => {
    const data = await userSigninApi.post(params.email, params.password)
    Cookie.set('user-info', JSON.stringify(data))
    return data
})

const userSignin = createSlice({
    name: 'userSignin',
    initialState: {
        userInfo: [],
        loading: false,
        error: ''
    },
    reducers: {},
    extraReducers: {
        [signinUser.pending]: (state) => {
            state.loading = true
        },
        [signinUser.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error
        },
        [signinUser.fulfilled]: (state, action) => {
            state.loading = false
            state.userInfo = action.payload
        }
    }

})
const { reducer, actions } = userSignin
export const {  } = actions
export default reducer
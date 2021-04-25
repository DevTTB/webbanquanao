import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../custom-axios/userApi";

export const getUser = createAsyncThunk('user/getUser', async (params, thunkAPI) => {
    const currentUser = await userApi.getUser()
    return currentUser
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
    }
})

const { reducer: userReducer } = userSlice
export default userReducer
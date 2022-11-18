import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { userManageServices } from "../../services/userManageServices"

const initialState = {
    userList: [],
    isFetching: false,
    error: undefined,
}

export const { reducer: userManageReducer, actions: userManageAction } = createSlice({
    name: "userManage",
    initialState,
    reducer: {},
    extraReducers: (builder) => {
        builder
            //getUserList
            .addCase(getUserList.pending, (state, action) => {
                state.isFetching = true
            })
            .addCase(getUserList.fulfilled, (state, action) => {
                state.userList = action.payload
                state.isFetching = false
            })
            .addCase(getUserList.rejected, (state, action) => {
                state.error = action.payload
                state.isFetching = false
            })
    }
})

export const getUserList = createAsyncThunk(
    'userManage/getUserList',
    async (data, { dispatch, getState, rejectWithValue }) => {
        try {
            const result = await userManageServices.getUserList()
            return result.data.content
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)
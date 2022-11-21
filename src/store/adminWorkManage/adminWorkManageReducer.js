import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { adminWorkManageServices } from "../../services/adminWorkManageServices"

const initialState = {
    workList: [],
    isFetching: false,
    error: undefined,
}

export const { reducer: adminWorkManageReducer, actions: adminWorkManageAction } = createSlice({
    name: "adminWorkManage",
    initialState,
    reducer: {},
    extraReducers: (builder) => {
        builder
            //getWorkList
            .addCase(getWorkList.pending, (state, action) => {
                state.isFetching = true
            })
            .addCase(getWorkList.fulfilled, (state, action) => {
                state.workList = action.payload
                state.isFetching = false
            })
            .addCase(getWorkList.rejected, (state, action) => {
                state.error = action.payload
                state.isFetching = false
            })
    }
})

export const getWorkList = createAsyncThunk(
    'adminWorkManage/getWorkList',
    async (data, { dispatch, getState, rejectWithValue }) => {
        try {
            const result = await adminWorkManageServices.getWorkList()
            return result.data.content
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)


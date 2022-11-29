import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { adminOrderManageServices } from "../../services/adminOrderManageServices"


const initialState = {
    ordersList: [],
    isFetching: false,
    error: null,
    isPosting: false,
    errorMessage: null,
    isSuccess: false,
}

export const { reducer: ordersManageReducer, actions: ordersManageAction } = createSlice({
    name: "ordersManage",
    initialState,
    reducer: {},
    extraReducers: (builder) => {
        builder
            //getOrdersList
            .addCase(getOrdersList.pending, (state, action) => {
                state.isFetching = true
            })
            .addCase(getOrdersList.fulfilled, (state, action) => {
                state.ordersList = action.payload
                state.isFetching = false
            })
            .addCase(getOrdersList.rejected, (state, action) => {
                state.error = action.payload
                state.isFetching = false
            })
            //postNewOrder
            .addCase(postNewOrder.pending, (state, action) => {
                state.isPosting = true
                state.isSuccess = false
                state.errorMessage = null
            })
            .addCase(postNewOrder.fulfilled, (state, action) => {
                state.isPosting = false
                state.isSuccess = true
                state.errorMessage = action.payload
            })
            .addCase(postNewOrder.rejected, (state, action) => {
                state.isPosting = false
                state.isSuccess = false
                state.errorMessage = action.payload.message
            })
    }
})

export const getOrdersList = createAsyncThunk(
    'ordersManage/getOrdersList',
    async (data, { dispatch, getState, rejectWithValue }) => {
        try {
            const result = await adminOrderManageServices.getOrdersList()
            return result.data.content
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const postNewOrder = createAsyncThunk(
    'adminWorkManage/postNewOrder',
    async (work, { dispatch, getState, rejectWithValue }) => {
        try {
            const result = await adminOrderManageServices.postNewOrder(work)
            console.log('Added Successfully!')
            return result.data.content
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

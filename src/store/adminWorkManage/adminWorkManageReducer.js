import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { get } from "lodash"
import { adminWorkManageServices } from "../../services/adminWorkManageServices"

const initialState = {
    workList: [],
    isFetching: false,
    error: undefined,
    isPosting: false,
    errorMessage: null,
    workInfo: [],
    isFetchingWorkInfo: false,
    isFetchingDeleteWork: false,
    workCategory: [],
    isFetchingCategory: false,
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
            //postNewWork
            .addCase(postNewWork.pending, (state, action) => {
                state.isPosting = true
                state.errorMessage = null
            })
            .addCase(postNewWork.fulfilled, (state, action) => {
                state.isPosting = false
                state.errorMessage = action.payload
            })
            .addCase(postNewWork.rejected, (state, action) => {
                state.isPosting = false
                state.errorMessage = action.payload.message
            })
            //getWorkInfo
            .addCase(getWorkInfo.pending, (state, action) => {
                state.isFetchingWorkInfo = true
            })
            .addCase(getWorkInfo.fulfilled, (state, action) => {
                state.isFetchingWorkInfo = false
                state.workInfo = action.payload
            })
            .addCase(getWorkInfo.rejected, (state, action) => {
                state.isFetchingWorkInfo = false
                state.error = action.payload
            })
            //deleteWork
            .addCase(deleteWork.pending, (state, action) => {
                state.isFetchingDeleteWork = true
                state.errorMessage = null
            })
            .addCase(deleteWork.fulfilled, (state, action) => {
                state.isFetchingDeleteWork = false
                state.errorMessage = action.payload
            })
            .addCase(deleteWork.rejected, (state, action) => {
                state.isFetchingDeleteWork = false
                state.errorMessage = action.payload.message
            })
            //getWorkCategoryDetail
            .addCase(getWorkCategoryDetail.pending, (state, action) => {
                state.isFetching = true
            })
            .addCase(getWorkCategoryDetail.fulfilled, (state, action) => {
                state.workCategory = action.payload
                state.isFetchingCategory = false
            })
            .addCase(getWorkCategoryDetail.rejected, (state, action) => {
                state.error = action.payload
                state.isFetchingCategory = false
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

export const postNewWork = createAsyncThunk(
    'adminWorkManage/postNewWork',
    async (work, { dispatch, getState, rejectWithValue }) => {
        try {
            const result = await adminWorkManageServices.postNewWork(work)
            console.log('Added Successfully!')
            return result.data.content
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const getWorkInfo = createAsyncThunk(
    'adminWorkManage/getWorkInfo',
    async (workId, { dispatch, getState, rejectWithValue }) => {
        try {
            const result = await adminWorkManageServices.getWorkInfo(workId)
            return result.data.content
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const deleteWork = createAsyncThunk(
    'adminWorkManage/deleteWork',
    async (workId, { dispatch, getState, rejectWithValue }) => {
        try {
            const result = await adminWorkManageServices.deleteWork(workId)
            if (result.data.statusCode === 200) {
                return result.data.content
            }
            dispatch(getWorkInfo())
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const getWorkCategoryDetail = createAsyncThunk(
    'adminWorkManage/getWorkCategoryDetail',
    async (data, { dispatch, getState, rejectWithValue }) => {
        try {
            const result = await adminWorkManageServices.getWorkCategoryDetail()
            return result.data.content
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)
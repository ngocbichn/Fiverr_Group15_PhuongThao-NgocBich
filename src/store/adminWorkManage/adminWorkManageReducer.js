import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { get } from "lodash"
import { adminWorkManageServices } from "../../services/adminWorkManageServices"


const initialState = {
    workList: [],
    isFetching: false,
    error: null,
    isPosting: false,
    workInfo: [],
    isFetchingWorkInfo: false,
    isFetchingDeleteWork: false,
    workCategory: [],
    isFetchingCategory: false,
    workCateInfo: [],
    isFetchingWorkCateInfo: false,
    isSuccess: false,
    isFetchingDeleteCate: false,
    isLoadingWorkChanged: false,
    isUpdatingImg: false,
    isLoadingCateChanged: false,
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
                state.isSuccess = false
            })
            .addCase(postNewWork.fulfilled, (state, action) => {
                state.isPosting = false
                state.isSuccess = true
                state.error = action.payload
            })
            .addCase(postNewWork.rejected, (state, action) => {
                state.isPosting = false
                state.isSuccess = false
                state.error = action.payload
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
            //putWorkChanged
            .addCase(putWorkChanged.pending, (state, action) => {
                state.isLoadingWorkChanged = true
            })
            .addCase(putWorkChanged.fulfilled, (state, action) => {
                state.isLoadingWorkChanged = false
            })
            .addCase(putWorkChanged.rejected, (state, action) => {
                state.isLoadingWorkChanged = false
                state.error = action.payload
            })
            //postWorkImage
            .addCase(postWorkImage.pending, (state, action) => {
                state.isUpdatingImg = true
            })
            .addCase(postWorkImage.fulfilled, (state, action) => {
                state.isUpdatingImg = false
                state.workList = action.payload
            })
            .addCase(postWorkImage.rejected, (state, action) => {
                state.isUpdatingImg = false
                state.error = action.payload
            })
            //deleteWork
            .addCase(deleteWork.pending, (state, action) => {
                state.isFetchingDeleteWork = true
            })
            .addCase(deleteWork.fulfilled, (state, action) => {
                state.isFetchingDeleteWork = false
                state.errorMessage = action.payload.message
            })
            .addCase(deleteWork.rejected, (state, action) => {
                state.isFetchingDeleteWork = false
                state.error = action.payload
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
            //addNewCategory
            .addCase(addNewCategory.pending, (state, action) => {
                state.isPosting = true
            })
            .addCase(addNewCategory.fulfilled, (state, action) => {
                state.isPosting = false
                state.error = action.payload
            })
            .addCase(addNewCategory.rejected, (state, action) => {
                state.isPosting = false
                state.error = action.payload
            })
            //getCategory
            .addCase(getCategoryInfo.pending, (state, action) => {
                state.isFetchingWorkCateInfo = true
            })
            .addCase(getCategoryInfo.fulfilled, (state, action) => {
                state.isFetchingWorkCateInfo = false
                state.workCateInfo = action.payload
            })
            .addCase(getCategoryInfo.rejected, (state, action) => {
                state.isFetchingWorkCateInfo = false
                state.error = action.payload
            })
            //putCategoryChanged
            .addCase(putCategoryChanged.pending, (state, action) => {
                state.isLoadingCateChanged = true
            })
            .addCase(putCategoryChanged.fulfilled, (state, action) => {
                state.isLoadingCateChanged = false
            })
            .addCase(putCategoryChanged.rejected, (state, action) => {
                state.isLoadingCateChanged = false
                state.error = action.payload
            })
            //deleteCategory
            .addCase(deleteCategory.pending, (state, action) => {
                state.isFetchingDeleteCate = true
            })
            .addCase(deleteCategory.fulfilled, (state, action) => {
                state.isFetchingDeleteCate = false
                state.error = action.payload
            })
            .addCase(deleteCategory.rejected, (state, action) => {
                state.isFetchingDeleteCate = false
                state.error = action.payload
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

export const putWorkChanged = createAsyncThunk(
    'ordersManage/putOrderInfoChanged',
    async ({ id, valueUpdated }, { dispatch, getState, rejectWithValue }) => {
        try {
            const result = await adminWorkManageServices.putWorkChanged(id, valueUpdated)
            if (result.data.statusCode === 200) {
                console.log('Updated Successfully!')
                return result.data.content
            }
            dispatch(getWorkInfo())
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const postWorkImage = createAsyncThunk(
    'ordersManage/postWorkImage',
    async ({ workId, valueUpdated }, { dispatch, getState, rejectWithValue }) => {
        try {
            const result = await adminWorkManageServices.postWorkImage(workId, valueUpdated)
            if (result.data.statusCode === 200) {
                console.log('Updated Successfully!')
                return result.data.content
            }
            // dispatch(getWorkInfo())
        } catch (error) {
            return rejectWithValue(error)
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

export const addNewCategory = createAsyncThunk(
    'adminWorkManage/addNewCategory',
    async (category, { dispatch, getState, rejectWithValue }) => {
        try {
            const result = await adminWorkManageServices.addNewCategory(category)
            return result.data.content
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const getCategoryInfo = createAsyncThunk(
    'adminWorkManage/getCategoryInfo',
    async (categoryId, { dispatch, getState, rejectWithValue }) => {
        try {
            const result = await adminWorkManageServices.getCategoryInfo(categoryId)
            return result.data.content
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const putCategoryChanged = createAsyncThunk(
    'adminWorkManage/putCategoryChanged',
    async ({ id, valueUpdated }, { dispatch, getState, rejectWithValue }) => {
        try {
            const result = await adminWorkManageServices.putCategoryChanged(id, valueUpdated)
            if (result.data.statusCode === 200) {
                console.log('Updated Successfully!')
                return result.data.content
            }
            dispatch(getCategoryInfo())
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const deleteCategory = createAsyncThunk(
    'adminWorkManage/deleteCategory',
    async (categoryId, { dispatch, getState, rejectWithValue }) => {
        try {
            const result = await adminWorkManageServices.deleteCategory(categoryId)
            if (result.data.statusCode === 200) {
                return result.data.content
            }
            dispatch(getCategoryInfo())
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)
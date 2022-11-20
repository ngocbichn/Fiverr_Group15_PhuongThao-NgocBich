import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { userManageServices } from "../../services/userManageServices"

const initialState = {
    userList: [],
    isFetching: false,
    error: undefined,
    userInfo: [],
    isFetchingUserInfo: false,
    isLoadingUserChanged: false,
    isFetchingDeleteUser: false,
    errorMessage: null,
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
            //getUserInfo
            .addCase(getUserInfo.pending, (state, action) => {
                state.isFetchingUserInfo = true
            })
            .addCase(getUserInfo.fulfilled, (state, action) => {
                state.isFetchingUserInfo = false
                state.userInfo = action.payload
            })
            .addCase(getUserInfo.rejected, (state, action) => {
                state.isFetchingUserInfo = false
                state.error = action.payload
            })
            //postNewUser
            .addCase(postNewUser.pending, (state, action) => {
                state.isLoadingUserChanged = true
                state.errorMessage = null
            })
            .addCase(postNewUser.fulfilled, (state, action) => {
                state.isLoadingUserChanged = false
                state.errorMessage = action.payload
            })
            .addCase(postNewUser.rejected, (state, action) => {
                state.isLoadingUserChanged = false
                state.errorMessage = action.payload.message
            })
            //deleteUser
            .addCase(deleteUser.pending, (state, action) => {
                state.isFetchingDeleteUser = true
                state.errorMessage = null
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.isFetchingDeleteUser = false
                state.errorMessage = action.payload
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.isFetchingDeleteUser = false
                state.errorMessage = action.payload.message
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

export const getUserInfo = createAsyncThunk(
    'userManage/getUserInfo',
    async (userId, { dispatch, getState, rejectWithValue }) => {
        try {
            const result = await userManageServices.getUserInfo(userId)
            return result.data.content
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const postNewUser = createAsyncThunk(
    'userManage/postNewUser',
    async (user, { dispatch, getState, rejectWithValue }) => {
        try {
            const result = await userManageServices.postNewUser(user)
            if (result.data.statusCode === 200) {
                return result.data.content
            }
            dispatch(postNewUser())
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const deleteUser = createAsyncThunk(
    'userManage/deleteUser',
    async (userId, { dispatch, getState, rejectWithValue }) => {
        try {
            const result = await userManageServices.deleteUser(userId)
            if (result.data.statusCode === 200) {
                return result.data.content
            }
            dispatch(getUserInfo())
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)
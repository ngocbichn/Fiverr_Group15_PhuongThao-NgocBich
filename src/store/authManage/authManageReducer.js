import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { authManageServices } from "../../services/authManageServices"

const initialState = {
    userSignUp: [],
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
}

export const { reducer: authManageReducer, actions: authManageAction } = createSlice({
    name: 'authManage',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signUpAction.pending, (state, action) => {
                state.isFetching = true
            })
            .addCase(signUpAction.fulfilled, (state, action) => {
                state.isFetching = false
                state.isSuccess = true
                state.userSignUp = action.payload
            })
            .addCase(signUpAction.rejected, (state, action) => {
                state.isFetching = false
                state.isError = true
                state.errorMessage = action.payload.message
            })
    }
})

export const signUpAction = createAsyncThunk(
    'authManage/signup',
    async (signUpInfo, { dispatch, getState, rejectWithValue }) => {
        try {
            const result = await authManageServices.signUp(signUpInfo)

            if (result.data.statusCode === 200) {

                return result.data.content
            }

        } catch (error) {
            return rejectWithValue(error.response.data)

        }
    })


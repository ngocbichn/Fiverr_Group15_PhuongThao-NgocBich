import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authManageServices } from "../../services/authManageServices";

let user = {}

if (localStorage.getItem('User_Login')) {
    user = JSON.parse(localStorage.getItem('User_Login'))
}

const initialState = {
    userSignUp: [],
    userSignIn: user,
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
};

export const { reducer: authManageReducer, actions: authManageAction } =
    createSlice({
        name: "authManage",
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder
                //sign Up
                .addCase(signUpAction.pending, (state, action) => {
                    state.isFetching = true;
                    state.isSuccess = false;
                })
                .addCase(signUpAction.fulfilled, (state, action) => {
                    state.isFetching = false;
                    state.isSuccess = true;
                    state.userSignUp = action.payload;
                })
                .addCase(signUpAction.rejected, (state, action) => {
                    state.isFetching = false;
                    state.isError = true;
                    state.isSuccess = false;
                    state.errorMessage = action.payload.message;
                })
                //sign In
                .addCase(signInAction.pending, (state, action) => {
                    state.isFetching = true;
                    state.isSuccess = false;
                })
                .addCase(signInAction.fulfilled, (state, action) => {
                    state.isFetching = false;
                    state.isSuccess = true;
                    localStorage.setItem('User_Login', JSON.stringify(action.payload))
                    state.userSignIn = action.payload;
                })
                .addCase(signInAction.rejected, (state, action) => {
                    state.isFetching = false;
                    state.isError = true;
                    state.isSuccess = false;
                    state.errorMessage = action.payload.message;
                })
        },
    });

export const signUpAction = createAsyncThunk(
    "authManage/signup",
    async (signUpInfo, { dispatch, getState, rejectWithValue }) => {
        try {
            const result = await authManageServices.signUp(signUpInfo);

            if (result.data.statusCode === 200) {
                console.log("Register Successfully!");
                return result.data.content;
            }
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const signInAction = createAsyncThunk(
    "authManage/signin",
    async (signInInfo, { dispatch, getState, rejectWithValue }) => {
        try {
            const result = await authManageServices.signIn(signInInfo)
            if (result.data.statusCode === 200) {
                console.log("Sign In Successfully!")
                return result.data.content
            }
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)


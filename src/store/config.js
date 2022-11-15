import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { workManageReducer } from "./workManage";
import { authManageReducer } from "./authManage"

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
    workManageReducer,
    authManageReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
    devTools: true,
})
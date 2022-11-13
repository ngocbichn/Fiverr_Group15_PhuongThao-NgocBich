import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { workManageReducer } from "./workManage";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
    workManageReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
    devTools: true,
})
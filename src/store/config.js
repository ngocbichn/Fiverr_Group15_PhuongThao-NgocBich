import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { workManageReducer } from "./workManage";
import { authManageReducer } from "./authManage"
import { userManageReducer } from "./userManage";
import { adminWorkManageReducer } from "./adminWorkManage"
import { ordersManageReducer } from "./ordersManage"

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
    workManageReducer,
    authManageReducer,
    userManageReducer,
    adminWorkManageReducer,
    ordersManageReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
    devTools: true,
})
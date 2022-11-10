import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({})

export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
    devTools: true,
})
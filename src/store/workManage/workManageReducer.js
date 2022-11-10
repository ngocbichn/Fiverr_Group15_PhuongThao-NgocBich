
import { createSlice } from "@reduxjs/toolkit"

const initialState = {

}

export const { reducer: workManageReducer, actions: workManageAction } = createSlice({
    name: 'workManage',
    initialState,
    reducers: {},
    extraReducers: (builder) => { }
})
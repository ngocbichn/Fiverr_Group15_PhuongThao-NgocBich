
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { workManageServices } from "../../services/workManageServices"

const initialState = {
menuLoaiCV: [],
fetchingmenuLoaiVC: false


}

export const { reducer: workManageReducer, actions: workManageAction } = createSlice({
    name: 'workManage',
    initialState,
    reducers: {},
    extraReducers: (builder) => { 
        
    }
})


export const getMenuLoaiCV = createAsyncThunk(
    'workManage/getMenuLoaiCV', async(_,{dispatch,getState,rejectWithValue}) => {
        try {
            const result = await workManageServices.getMenuLoaiCV()
            return result.data.content
            
        } catch (error) {
            return rejectWithValue(error.response.data)
            
        }

    }
)

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { workManageServices } from "../../services/workManageServices"

const initialState = {
menuLoaiCV: [],
fetchingmenuLoaiVC: false,
DScongviectheoChiTietLoai: [],
fetchingDSCVtheoChiTietloai: false,
DScongviectheoTen: [],
fetchingDSCVtheoTen: false,

}

export const { reducer: workManageReducer, actions: workManageAction } = createSlice({
    name: 'workManage',
    initialState,
    reducers: {},
    extraReducers: (builder) => { 
        builder 
        //getMenuLoai CV 
        .addCase(getMenuLoaiCV.pending, (state,action) => {
            state.fetchingmenuLoaiVC = true

        })
        .addCase(getMenuLoaiCV.fulfilled, (state,action) => {
            state.fetchingmenuLoaiVC = false;
            state.menuLoaiCV = action.payload

            
        })
        .addCase(getMenuLoaiCV.rejected, (state,action) => {
            state.fetchingmenuLoaiVC = true
            state.menuLoaiCV = action.payload

            
        })
        
        //Lấy cv theo chi tiết loại

        .addCase(getCVtheochitietloai.pending, (state,action) => {
            state.fetchingDSCVtheoChiTietloai = true

        })
        .addCase(getCVtheochitietloai.fulfilled, (state,action) => {
            state.fetchingDSCVtheoChiTietloai = false
            state.DScongviectheoChiTietLoai = action.payload

        })
        .addCase(getCVtheochitietloai.rejected, (state,action) => {
            state.fetchingDSCVtheoChiTietloai = false
            state.DScongviectheoChiTietLoai = action.payload

        })

        //Lấy công việc theo tên (search)
        .addCase(getCVTheoTen.pending, (state,action) => {
            state.fetchingDSCVtheoTen = true

        })
        .addCase(getCVTheoTen.fulfilled, (state,action) => {
            state.fetchingDSCVtheoTen = false
            state.DScongviectheoTen =action.payload

        })
        .addCase(getCVTheoTen.rejected, (state,action) => {
            state.fetchingDSCVtheoTen = false
            state.DScongviectheoTen =action.payload

        })
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

export const getCVtheochitietloai = createAsyncThunk('workManage/getCVtheochitietloai',async (maChiTietLoai,{dispatch, getState,rejectWithValue}) => {
    try {

        const result = await workManageServices.getCVtheochitietloai(maChiTietLoai)
        return result.data.content
        
    } catch (error) {
        return rejectWithValue(error.response.data)
        
    }

})

export const getCVTheoTen = createAsyncThunk('workManage/getCVTheoTen', async (tenCV, {dispatch,getState,rejectWithValue}) => {
    try {

        const result = await workManageServices.getCVTheoTen(tenCV)
        console.log(result.data.content)

        return result.data.content
        
    } catch (error) {
        return rejectWithValue(error.response.data)
        
    }
})

export const getChiTietLoaiCV = createAsyncThunk('workManage/getChiTietLoaiCV', async(MaLoaiCongViec, {dispatch,getState,rejectWithValue}) => {
    try {
        const result = await workManageServices.getChiTietLoaiCV(MaLoaiCongViec)
        console.log(result.data.content)
        return result.data.content
        
    } catch (error) {
        return rejectWithValue(error.response.data)
        
        
    }

})

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { workManageServices } from "../../services/workManageServices"

const initialState = {
menuLoaiCV: [],
fetchingmenuLoaiVC: false,
DScongviectheoChiTietLoai: null,
fetchingDSCVtheoChiTietloai: false,
DScongviectheoTen: [],
fetchingDSCVtheoTen: false,
chiTietLoaiCV: [],
fetchingchiTietLoaiCV: false,
ChiTietCongViec: null, 
fetchingCTCV: false,
binhLuanTheoCV: null, 
fetchingbinhLuanTheoCV: false,


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
        //lấy chi tiết loại CV 

        .addCase(getChiTietLoaiCV.pending,(state, action) => {
            state.fetchingchiTietLoaiCV = true
        })
        .addCase(getChiTietLoaiCV.fulfilled,(state, action) => {
            state.fetchingchiTietLoaiCV = false
            state.chiTietLoaiCV = action.payload
        })
        .addCase(getChiTietLoaiCV.rejected,(state, action) => {
            state.fetchingchiTietLoaiCV = false
            state.chiTietLoaiCV = action.payload
        })

        //lấy nội dung chi tiết công việc 
        .addCase(getCongViecChiTiet.pending, (state,action) => {
            state.fetchingCTCV = true;
        })
        .addCase(getCongViecChiTiet.fulfilled, (state,action) => {
            state.fetchingCTCV = false;
            state.ChiTietCongViec = action.payload
        })
        .addCase(getCongViecChiTiet.rejected, (state,action) => {
            state.fetchingCTCV = false;
            state.ChiTietCongViec = action.payload
        })

        //lấy bình luận theo công việc 

        .addCase(getBinhLuanTheoCV.pending, (state,action) => {
            state.fetchingbinhLuanTheoCV = true;
        })
        .addCase(getBinhLuanTheoCV.fulfilled, (state,action) => {
            state.fetchingbinhLuanTheoCV = false;
            state.binhLuanTheoCV = action.payload
        })
        .addCase(getBinhLuanTheoCV.rejected, (state,action) => {
            state.fetchingbinhLuanTheoCV = false;
            state.binhLuanTheoCV = action.payload
        })
        //post bình luận 
       
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

//lấy nội dung chi tiết công việc
export const getCongViecChiTiet = createAsyncThunk('workManage/getCongViecChiTiet',async(maCongViec, {dispatch,getState,rejectWithValue}) => {

    try {
        const result = await workManageServices.getCongViecChiTiet(maCongViec)
       
        return result.data.content
        
    } catch (error) {
        return rejectWithValue(error.response.data)
        
    }


})

//lấy bình luận theo cv 
export const getBinhLuanTheoCV = createAsyncThunk('workManage/getBinhLuanTheoCV', async(maCongViec, {dispatch,getState,rejectWithValue}) => {
    try {
        const result =  await workManageServices.getBinhLuanTheoCV(maCongViec)
        console.log('A')
        console.log(result.data.content)
        return result.data.content
        
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

//add bình luận 
export const binhLuanAction = createAsyncThunk('workManage/binhLuanAction', async(binhLuan, {dispatch,getState,rejectWithValue}) => {
    try {
        console.log(binhLuan)
        const result =await workManageServices.binhLuanAction(binhLuan);
         dispatch(getBinhLuanTheoCV(binhLuan.maCongViec))
        return result.data.content
        
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

//thuê công việc 
export const thueCongViec = createAsyncThunk('workManage/binhLuanAction', async (congViec, {dispatch, getState, rejectWithValue}) => {
    try {
        const result = await workManageServices.thueCongViec(congViec)
        alert('Thuê thành công')

        return result.data.content
        
    } catch (error) {
        return rejectWithValue(error.response.data)
    }

})
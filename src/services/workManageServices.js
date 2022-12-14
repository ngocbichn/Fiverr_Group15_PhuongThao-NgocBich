import { api } from "../constants/api"

export const workManageServices = {

    getMenuLoaiCV: () => {
        return api.get('cong-viec/lay-menu-loai-cong-viec')
    },

    getCVtheochitietloai: (maChiTietLoai) => {
        return api.get(`cong-viec/lay-cong-viec-theo-chi-tiet-loai/${maChiTietLoai}`)
    },

    getCVTheoTen: (tenCV) => {
        return api.get(`cong-viec/lay-danh-sach-cong-viec-theo-ten/${tenCV}`)

    },
    getChiTietLoaiCV: (MaLoaiCongViec) => {
        return api.get(`cong-viec/lay-chi-tiet-loai-cong-viec/${MaLoaiCongViec}`)
    },

    getCongViecChiTiet: (maCongViec) => {
        return api.get(`cong-viec/lay-cong-viec-chi-tiet/${maCongViec}`)
    },
    getBinhLuanTheoCV: (maCongViec) => {
        return api.get(`binh-luan/lay-binh-luan-theo-cong-viec/${maCongViec}`)
    },
    binhLuanAction: (binhLuan) => {
        return api.post('binh-luan',binhLuan)
    },
    thueCongViec: (congViec) => {
        return api.post('thue-cong-viec', congViec)
    },
    layDSdathue: () => {
        return api.get('thue-cong-viec/lay-danh-sach-da-thue')
    }




    
}
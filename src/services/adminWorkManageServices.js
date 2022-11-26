import { api } from "../constants/api"

export const adminWorkManageServices = {
    getWorkList: () => {
        return api.get('cong-viec')
    },
    postNewWork: (work) => {
        return api.post('cong-viec', work)
    },
    getWorkInfo: (workId) => {
        return api.get(`cong-viec/${workId}`)
    },
    updateWorkImage: (workId, formData) => {
        return api.post(`cong-viec/upload-hinh-cong-viec/${workId}`, formData)
    },
    deleteWork: (workId) => {
        return api.delete(`cong-viec/${workId}`)
    },
    getWorkCategoryDetail: () => {
        return api.get('chi-tiet-loai-cong-viec')
    },
    addNewCategory: (category) => {
        return api.post('chi-tiet-loai-cong-viec/them-nhom-chi-tiet-loai', category)
    },
    getDetailCategoryId: (id) => {
        return api.get(`chi-tiet-loai-cong-viec/${id}`)
    },
}
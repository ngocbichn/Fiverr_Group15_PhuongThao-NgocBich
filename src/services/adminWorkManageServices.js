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
    putWorkChanged: (workId, workChanged) => {
        return api.put(`cong-viec/${workId}`, workChanged)
    },
    postWorkImage: (workId, formData) => {
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
    getCategoryInfo: (categoryId) => {
        return api.get(`chi-tiet-loai-cong-viec/${categoryId}`)
    },
    deleteCategory: (categoryId) => {
        return api.delete(`chi-tiet-loai-cong-viec/${categoryId}`)
    },
}
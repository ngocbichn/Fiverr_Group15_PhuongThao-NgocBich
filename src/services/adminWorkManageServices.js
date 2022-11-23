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
    deleteWork: (workId) => {
        return api.delete(`cong-viec/${workId}`)
    }
}
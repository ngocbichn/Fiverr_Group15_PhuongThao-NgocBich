import { api } from "../constants/api"

export const userManageServices = {
    getUserList: () => {
        return api.get('users')
    },
    postNewUser: (formData) => {
        return api.post('users/upload-avatar', formData)
    },
    getUserInfo: (userId) => {
        return api.get(`users/${userId}`)
    },
    deleteUser: (userId) => {
        return api.delete(`users?id=${userId}`)
    },
    searchUserByName: (name) => {
        return api.get(`users/search/${name}`)
    },
}
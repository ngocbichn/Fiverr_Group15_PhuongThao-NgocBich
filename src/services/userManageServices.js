import { api } from "../constants/api"

export const userManageServices = {
    getUserList: () => {
        return api.get('users')
    },
    postNewUser: (user) => {
        return api.post('users', user)
    },
    getUserInfo: (userId) => {
        return api.get(`users/${userId}`)
    },
    putUserChanged: (userId, userChanged) => {
        return api.put(`users/${userId}`, userChanged)
    },
    deleteUser: (userId) => {
        return api.delete(`users?id=${userId}`)
    },
    searchUserByName: (name) => {
        return api.get(`users/search/${name}`)
    },
}
import { api } from "../constants/api"

export const userManageServices = {
    getUserList: () => {
        return api.get('users')
    },
}
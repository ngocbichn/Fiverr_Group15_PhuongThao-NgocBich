import { api } from "../constants/api"

export const adminWorkManageServices = {
    getWorkList: () => {
        return api.get('cong-viec')
    },
}
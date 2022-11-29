import { api } from "../constants/api"

export const adminOrderManageServices = {
    getOrdersList: () => {
        return api.get('thue-cong-viec')
    },
    postNewOrder: (order) => {
        return api.post('thue-cong-viec', order)
    }
}
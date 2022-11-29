import { api } from "../constants/api"

export const adminOrderManageServices = {
    getOrdersList: () => {
        return api.get('thue-cong-viec')
    },
    postNewOrder: (order) => {
        return api.post('thue-cong-viec', order)
    },
    getOrderInfo: (orderId) => {
        return api.get(`thue-cong-viec/${orderId}`)
    },
    putOrderInfoChanged: (orderChanged, orderId) => {
        return api.put(`thue-cong-viec/${orderId}`, orderChanged)
    }
}
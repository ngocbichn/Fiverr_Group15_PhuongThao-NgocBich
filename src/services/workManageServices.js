import { api } from "../constants/api"

export const workManageServices = {

    getMenuLoaiCV: () => {
        return api.get('cong-viec/lay-menu-loai-cong-viec')
    }

    
}
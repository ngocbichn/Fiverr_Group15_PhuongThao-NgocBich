import { useSelector } from "react-redux";

export const useAdminWorkManage = () => useSelector((state) => state.adminWorkManageReducer)
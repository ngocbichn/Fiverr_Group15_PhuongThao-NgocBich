import { useSelector } from "react-redux";

export const useAuthManage = () => useSelector((state) => state.authManageReducer)
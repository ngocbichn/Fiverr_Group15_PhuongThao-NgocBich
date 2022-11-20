import { useSelector } from "react-redux";

export const useUserManage = () => useSelector((state) => state.userManageReducer)
import { useSelector } from "react-redux";

export const useWorkManage = () => useSelector((state) => state.workManageReducer)
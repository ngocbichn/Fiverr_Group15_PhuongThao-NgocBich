import { useSelector } from "react-redux";

export const useOrdersManage = () => useSelector((state) => state.ordersManageReducer)
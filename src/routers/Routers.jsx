import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import Home from '../components/pages/Home/Home'
import WorkList from "../components/pages/WorkList/WorkList";
import SignUp from "../components/pages/SignUp/SignUp"
import SignIn from "../components/pages/SignIn/SignIn"
import WorkCategory from "../components/pages/WorkCategory/WorkCategory";
import AdminLayout from "../components/layouts/AdminLayout";
import User from "../components/pages/Admin/User/User";
import AdminWorkList from "../components/pages/Admin/Work/AdminWorkList";
import UserAddNew from "../components/pages/Admin/User/UserAddNew";
import AdminWorkAddNew from "../components/pages/Admin/Work/AdminWorkAddNew"
import Dashboard from "../components/pages/Admin/Dashboard/Dashboard";
import UserInfo from "../components/pages/Admin/User/UserInfo";
import AdminWorkCategory from "../components/pages/Admin/WorkCategory/AdminWorkCategory";
import WorkOrders from "../components/pages/Admin/Orders/WorkOrders";
import SingleDetail from "../components/pages/Admin/WorkCategory/SingleDetail";
import AdminAddNewCategory from "../components/pages/Admin/WorkCategory/AdminAddNewCategory";
import EditDetailName from "../components/pages/Admin/WorkCategory/EditDetailName";
import AdminWorkUpdateImg from "../components/pages/Admin/Work/AdminWorkUpdateImg";
import WorkDetail from "../components/pages/WorkDetail/WorkDetail";

const Routers = () => {
    const Routing = useRoutes([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    path: '/',
                    element: <Navigate to="home" />
                },
                {
                    path: 'home',
                    element: <Home />
                },
                {
                    path: 'worklist',
                    element: <WorkList />
                },
                {
                    path: 'categories/:maLoaiCV',
                    element: <WorkCategory />
                },
                {
                    path: 'workdetail/:maCongViec',
                    element: <WorkDetail />
                },
                {
                    path: 'signup',
                    element: <SignUp />
                },
                {
                    path: 'signin',
                    element: <SignIn />
                }
            ],
        },
        {
            path: "/admin",
            element: <AdminLayout />,
            children: [
                {
                    path: 'dashboard',
                    element: <Dashboard />,
                },
                {
                    path: 'user',
                    element: <User />,
                },
                {
                    path: 'worklist',
                    element: <AdminWorkList />
                },
                {
                    path: 'workcategory',
                    element: <AdminWorkCategory />
                },
                {
                    path: 'workorders',
                    element: <WorkOrders />
                },
                {
                    path: '/admin',
                    element: <Navigate to='/admin/dashboard' />
                },
                {
                    path: '/admin/user/addnew',
                    element: <UserAddNew />
                },
                {
                    path: '/admin/user/info/:userId',
                    element: <UserInfo />
                },
                {
                    path: '/admin/worklist/addnew',
                    element: <AdminWorkAddNew />
                },
                {
                    path: '/admin/worklist/uploadworkimg/:workId',
                    element: <AdminWorkUpdateImg />
                },
                {
                    path: '/admin/workcategory/singledetail/:id',
                    element: <SingleDetail />
                },
                {
                    path: '/admin/workcategory/addnewcategory',
                    element: <AdminAddNewCategory />
                },
                {
                    path: '/admin/workcategory/editDetailName/:id',
                    element: <EditDetailName />
                },
            ]
        },
    ]);
    return Routing;
};

export default Routers;
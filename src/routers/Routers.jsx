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
import UserEdit from "../components/pages/Admin/User/UserEdit";
import AdminWorkList from "../components/pages/Admin/Work/AdminWorkList";
import UserAddNew from "../components/pages/Admin/User/UserAddNew";
import AdminWorkAddNew from "../components/pages/Admin/Work/AdminWorkAddNew"

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
                    path: 'user',
                    element: <User />,
                },
                {
                    path: 'worklist',
                    element: <AdminWorkList />
                },
                {
                    path: '/admin',
                    element: <Navigate to='/admin/user' />
                },
                {
                    path: '/admin/user/addnew',
                    element: <UserAddNew />
                },
                {
                    path: '/admin/user/edit/:userId',
                    element: <UserEdit />
                },
                {
                    path: '/admin/worklist/addnew',
                    element: <AdminWorkAddNew />
                },
            ]
        },
    ]);
    return Routing;
};

export default Routers;
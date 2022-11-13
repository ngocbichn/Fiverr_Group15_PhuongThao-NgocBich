import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import Home from '../components/pages/Home/Home'
import WorkList from "../components/pages/WorkList/WorkList";

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
                    element: <WorkList/>
                },

            ],
        }

    ]);
    return Routing;
};

export default Routers;
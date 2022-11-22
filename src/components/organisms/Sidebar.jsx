import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Sidebar = () => {
    return (
        <Container className="Sidebar">
            <div className="brand text-center py-20 pr-52 pl-18 mb-16">
                <a className="logo" style={{ lineHeight: "52px" }}>
                    <svg
                        width="89"
                        height="27"
                        viewBox="0 0 89 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g fill="#404145">
                            <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path>
                        </g>
                        <g fill="#1dbf73">
                            <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path>
                        </g>
                    </svg>
                </a>
            </div>
            <div className="sidebar_list">
                <div className="">
                    <ul>
                        <li className="user flex justify-start items-center py-6 px-18 mb-10 hover:underline cursor-pointer focus:text-primary">
                            <span className="mr-12"><i className="fa-solid fa-house font-semibold" style={{ width: "18px", height: "18px" }}></i></span>
                            <NavLink to="/admin/dashboard" className="font-semibold text-16" style={{ color: "#222325" }}>Dashboard</NavLink>
                        </li>
                        <li className="user flex justify-start items-center py-6 px-18 mb-10 hover:underline cursor-pointer focus:text-primary">
                            <span className="mr-12"><i className="fa-solid fa-users font-semibold" style={{ width: "18px", height: "18px" }}></i></span>
                            <NavLink to="/admin/user" className="font-semibold text-16" style={{ color: "#222325" }}>User</NavLink>
                        </li>
                        <li className="user flex justify-start items-center py-6 px-18 mb-10 hover:underline cursor-pointer focus:text-primary">
                            <span className="mr-12"><i className="fa-solid fa-list font-semibold" style={{ width: "18px", height: "18px" }}></i></span>
                            <NavLink to="/admin/worklist" className="font-semibold text-16" style={{ color: "#222325" }}>Work List</NavLink>
                        </li>
                        <li className="user flex justify-start items-center py-6 px-18 mb-10 hover:underline cursor-pointer focus:text-primary">
                            <span className="mr-12"><i className="fa-solid fa-layer-group font-semibold" style={{ width: "18px", height: "18px" }}></i></span>
                            <span className="font-semibold text-16">Work Category</span>
                        </li>
                        <li className="user flex justify-start items-center py-6 px-18 mb-10 hover:underline cursor-pointer focus:text-primary">
                            <span className="mr-12"><i className="fa-solid fa-folder-plus font-semibold" style={{ width: "18px", height: "18px" }}></i></span>
                            <span className="font-semibold text-16">Work Orders</span>
                        </li>
                    </ul>
                </div>
            </div>
        </Container>
    );
};

export default Sidebar;

export const Container = styled.div`
  &.Sidebar {
    min-width: 230px;
    max-width: 230px;
    background-color: #fff;
    min-height: 100vh;
    transition: 0.3s;
    position: fixed;
    bottom: 0;
    top: 0;
    border-right: 1px solid #e4e5e7;
    z-index: 1001;
  }
`;

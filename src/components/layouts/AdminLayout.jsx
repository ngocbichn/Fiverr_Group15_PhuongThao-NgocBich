import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "../organisms/Sidebar";
import Topbar from "../organisms/Topbar";

const AdminLayout = () => {
  return (
    <Container className="AdminLayout">
      <Sidebar />
      <div className="main_content">
        <Topbar />
        <Outlet />
      </div>
    </Container>
  );
};

export default AdminLayout;

export const Container = styled.div`
  &.AdminLayout {
    margin: 0;
    overflow-x: hidden !important;
    font-size: 0.8125rem;
    background-color: #fff;
    color: #303e67;
    min-height: 100vh;
    letter-spacing: 0.1px;
    line-height: 1.5;
    display: flex;
    position: relative;

    .main_content {
      flex: 1;
      padding: 0;
      display: block;
      margin-left: 230px;
    }
  }
`;

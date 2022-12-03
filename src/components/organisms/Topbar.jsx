import React from "react";
import styled from "styled-components";
import { Dropdown, Space } from 'antd';
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthManage } from "../../store/authManage";

const Topbar = () => {

  const navigate = useNavigate()

  const { userSignIn } = useAuthManage()

  const directAdminPage = () => {
    const item = JSON.parse(localStorage.getItem("User_Login"));
    const role = item.user.role
    if (role === "ADMIN") {
      navigate("/admin")
      window.location.reload()
    } else {
      navigate("#")
      window.location.reload()
    }
  }

  const items = [
    { label: (<NavLink onClick={() => { navigate("/profiledetail"); window.location.reload(); }}>Profile</NavLink>), key: "profile" },
    {
      label: (<a onClick={() => { directAdminPage() }}> Admin Setting</ a>), key: "Contact"
    },
    {
      label: (
        <NavLink
          onClick={() => {
            localStorage.removeItem("User_Login");
            navigate("/home");
            window.location.reload();
          }}
        >
          Sign Out
        </NavLink>
      ),
      key: "signOut",
    },
  ];

  return (
    <Container className="Topbar">
      <div className="topbar_content flex justify-end items-center p-10">
        <ul className="flex justify-between items-center mb-0 gap-12">
          <li>
            <span>
              <i className="text-20 fa-solid fa-bell text-primary"></i>
            </span>
          </li>
          <li className="flex justify-center items-center px-18">
            <span className="text-primary font-medium cursor-pointer" onClick={() => { navigate("/profiledetail") }}>{userSignIn.user.name}</span>
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                <img src="https://joeschmoe.io/api/v1/random" alt="" className="w-40 h-40 rounded-full dark:bg-gray-500" />
              </a>
            </Dropdown>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Topbar;

export const Container = styled.div`
  &.Topbar {
    width: 100%;
    z-index: 1001;
    .topbar_content {
      background: #fff;
      min-height: 52px;
      position: relative;
      border-bottom: 1px solid #e4e5e7;
    }
  }
`;

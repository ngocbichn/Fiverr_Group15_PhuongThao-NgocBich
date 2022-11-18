import React from "react";
import styled from "styled-components";
import { Dropdown, Space } from 'antd';

const Topbar = () => {
  const items = [
    { label: "Profiles", key: "profile" },
    { label: "Contact", key: "contact" },
    { label: "Log Out", key: "logOut" },
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
          <li>
            <span></span>
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-40 h-40 rounded-full dark:bg-gray-500" />
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

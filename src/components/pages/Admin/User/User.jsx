import React, { Fragment } from "react";
import { Table } from "antd";
import {
    AudioOutlined,
    EditFilled,
    DeleteFilled,
    CalendarOutlined,
} from "@ant-design/icons";
import { Input, Space } from "antd";
import styled from "styled-components";
import { useUserManage } from "../../../../store/userManage/userManageSelector";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getUserList } from "../../../../store/userManage/userManageReducer";

const User = () => {
    //getMovieList
    const dispatch = useDispatch();
    const { userList, userList: { id } } = useUserManage();

    useEffect(() => {
        dispatch(getUserList());
    }, []);

    const navigate = useNavigate();
    // console.log("movieList", movieList);

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            render: (text, object) => {
                return <span>{text}</span>;
            },
            sorter: (a, b) => a.id - b.id,
            sortDirections: ["ascend", "descend"],
            width: "8%",
        },
        {
            title: "Name",
            dataIndex: "name",
            sorter: (a, b) => {
                let nameA = a.name.toLowerCase().trim();
                let nameB = b.name.toLowerCase().trim();
                if (nameA > nameB) {
                    return 1;
                }
                return -1;
            },
            width: "18%",
            sortDirections: ["descend", "ascend"],
        },
        {
            title: "Email",
            dataIndex: "email",
            width: "24%",
        },
        {
            title: "Gender",
            dataIndex: "gender",
            render: (value, gender) => {
                return <Fragment>{value === true ? "Male" : "Female"}</Fragment>;
            },
            filters: [
                {
                    text: "Male",
                    value: true,
                },
                {
                    text: "Female",
                    value: false,
                },
            ],
            width: "10%",
        },
        {
            title: "Role",
            dataIndex: "role",
            render: (value, role) => {
                return (
                    <Fragment>
                        {(value === "ADMIN") | (value === "USER") ? value : "USER"}
                    </Fragment>
                );
            },
            filters: [
                {
                    text: "ADMIN",
                    value: "ADMIN",
                },
                {
                    text: "USER",
                    value: "USER",
                },
            ],
            filterMode: "tree",
            filterSearch: true,
            onFilter: (value, record) => record.role.includes(value),
            width: "15%",
        },
        {
            title: "Actions",
            dataIndex: "hanhDong",
            width: "25%",
            render: (text, user) => {
                return (
                    <div className="flex justify-start align-items-center">
                        <div className="mr-10">
                            <NavLink
                                key={1}
                                className=" text-primary text-20 p-2 hover:text-green-700"
                                to={`/admin/user/edit/${user.id}`}
                            >
                                <EditFilled />
                            </NavLink>
                        </div>
                    </div>
                );
            },
        },
    ];

    const data = userList;

    const onChange = (pagination, filters, sorter, extra) => {
        console.log("params", pagination, filters, sorter, extra);
    };

    const { Search } = Input;

    const onSearch = (value) => {
        console.log(value);
    };
    return (
        <Container className="UserAdmin">
            <div className="container">
                <div className="title">
                    <div className="title_content">
                        <h4 className="text-18 text-headingPrimary font-semibold leading-5 tracking-tight">
                            User List
                        </h4>
                        <ol className="breadcrumb flex">
                            <li className="breadcrumb_item">
                                <Link
                                    to="/home"
                                    className="text-textPrimary hover:text-primary"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="font-semibold mx-10 text-primary">/</li>
                            <li className="breadcrumb_item">
                                <Link
                                    to="/admin"
                                    className="text-textPrimary hover:text-primary"
                                >
                                    Admin
                                </Link>
                            </li>
                            <li className="font-semibold mx-10 text-primary">/</li>
                            <li className="breadcrumb_item">
                                <Link
                                    to="/admin/user"
                                    className="text-textPrimary hover:text-primary"
                                >
                                    User
                                </Link>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="userList">
                    <div className="user_data">
                        <div className="input_search my-20">
                            <Search placeholder="Name" onSearch={onSearch} enterButton />
                        </div>
                    </div>
                    <div className="user_table">
                        <Table
                            key={id}
                            columns={columns}
                            dataSource={data}
                            onChange={onChange}
                            rowKey={"id"}
                        />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default User;

export const Container = styled.div`
  &.UserAdmin {
    .container {
      padding: 14px;
      margin: 0;
      .title {
        .title_content {
          .breadcrumb {
            .breadcrumn_item.active {
              color: #1dbf73;
              font-weight: 600;
            }
          }
        }
      }
      .userList {
        .user_data {
          .input_search {
            width: 100%;
            .ant-input-group > .ant-input:first-child,
            .ant-input-group-addon:first-child {
              border-color: #62646a;
            }
            .ant-input {
              padding: 8px;
            }
            .ant-btn-primary {
              background-color: #1dbf73;
              color: #fff;
              font-weight: 700;
              font-size: 16px;
              line-height: 10px;
              height: 40px;
              border-radius-top-right: 4px;
              border: none;
              padding: 0 20px;
              opacity: 0.85;
              transition: 0.4s ease;
              &:hover {
                opacity: 1;
              }
            }
          }
        }
        .user_table {
          .ant-table {
            .ant-table-content {
              .ant-table-thead {
                .ant-table-column-title,
                .ant-table-cell {
                  font-size: 16px;
                  font-weight: 500;
                }
              }

              .ant-table-tbody {
                .ant-table-cell {
                  font-weight: 400;
                  font-size: 13px;
                }
              }
            }
          }
        }
      }
    }
  }
`;

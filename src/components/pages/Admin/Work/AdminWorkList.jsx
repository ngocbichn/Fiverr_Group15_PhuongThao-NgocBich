import React, { Fragment, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAdminWorkManage } from "../../../../store/adminWorkManage/adminWorkManageSelector";
import { Table, Tooltip } from "antd";
import {
    EditFilled,
    DeleteFilled,
    UploadOutlined,
    ToolFilled,
} from "@ant-design/icons";
import { Input, Space } from "antd";
import { useDispatch } from "react-redux";
import { deleteWork, getWorkList } from "../../../../store/adminWorkManage/adminWorkManageReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";


const AdminWorkList = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWorkList());
    }, []);

    const navigate = useNavigate();

    const { workList, workList: { id }, workInfo } = useAdminWorkManage();

    const starArray = [...Array(5).keys()].map(i => i + 1);



    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            render: (text, object) => {
                return <span>{text}</span>;
            },
            sorter: (a, b) => a.id - b.id,
            sortDirections: ["ascend", "descend"],
            width: "6%",
        },
        {
            title: "Image",
            dataIndex: "hinhAnh",
            render: (imgSrc, object) => {
                return <img src={imgSrc} alt="image" style={{ width: "50px", height: "50px" }} />
            },
            width: "8%",
        },
        {
            title: "Work",
            dataIndex: "tenCongViec",
            sorter: (a, b) => {
                let tenCongViecA = a.tenCongViec.toLowerCase().trim();
                let tenCongViecB = b.tenCongViec.toLowerCase().trim();
                if (tenCongViecA > tenCongViecB) {
                    return 1;
                }
                return -1;
            },
            width: "22%",
            sortDirections: ["descend", "ascend"],
        },
        {
            title: "Description",
            dataIndex: "moTa",
            render: (text, work) => {
                return (
                    <Fragment>
                        {work.moTa.length > 50
                            ? work.moTa.substr(0, 60) + "......."
                            : work.moTa}
                    </Fragment>
                );
            },
            width: "25%",
        },
        {
            title: "Price",
            dataIndex: "giaTien",
            render: (num, work) => {
                return <Fragment>
                    ${num}
                </Fragment>;
            },
            width: "7%",
        },
        {
            title: "Difficulty",
            dataIndex: "saoCongViec",
            render: (text, work) => {
                return (
                    <Fragment>
                        {starArray.map(i => ( // use many times
                            <FontAwesomeIcon
                                key={i}
                                icon={faStar}
                                color={work.saoCongViec >= i ? "#1dbf73" : "lightgrey"}
                            />
                        ))}
                    </Fragment>
                );
            },
            width: "12%",
        },
        {
            title: "Actions",
            dataIndex: "hanhDong",
            width: "20%",
            render: (text, work) => {
                return (
                    <div className="flex justify-start align-items-center">
                        <div className="mr-10">
                            <NavLink
                                key={1}
                                style={{ cursor: "pointer" }}
                                className=" text-blue-400 text-20 p-2 hover:text-blue-700"
                                to={`/admin/worklist/uploadworkimg/${work.id}`}
                            >
                                <Tooltip color="blue" title="Update Image">
                                    <UploadOutlined />
                                </Tooltip>
                            </NavLink>
                            <span
                                key={2}
                                style={{ cursor: "pointer" }}
                                className=" text-orange-600 text-20 p-2 hover:text-orange-200"
                                onClick={() => {
                                    if (window.confirm("Do you want to delete " + work.name)) {
                                        dispatch(deleteWork(work.id)
                                        );

                                    }
                                    // window.location.reload()
                                }}
                            >
                                <DeleteFilled />
                            </span>
                        </div>
                    </div>
                );
            },
        },
    ];

    const data = workList;
    // console.log('data', data)

    const onChange = (pagination, filters, sorter, extra) => {
        // console.log("params", pagination, filters, sorter, extra);
    };

    const { Search } = Input;

    const onSearch = (value) => {
        console.log(value);
    };

    return (
        <Container className="AdminWorkList">
            <div className="container">
                <div className="title">
                    <div className="title_content">
                        <h4 className="text-18 text-headingPrimary font-semibold leading-5 tracking-tight">
                            Work List
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
                                    to="/admin/worklist"
                                    className="text-textPrimary hover:text-primary"
                                >
                                    Work List
                                </Link>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="admin_workList">
                    <div className="worklist_data">
                        <div className="my-24">
                            <Link
                                to="/admin/worklist/addnew"
                                className="bg-primary text-white font-medium text-14 hover:bg-green-800 py-10 px-18 rounded hover:text-white"
                            >
                                Add A New Work
                            </Link>
                        </div>
                    </div>
                    <div className="worklist_table">
                        <Table
                            key={id}
                            columns={columns}
                            dataSource={data}
                            onChange={onChange}
                            rowKey={"id"}
                            bordered
                        />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default AdminWorkList;

export const Container = styled.div`
  &.AdminWorkList {
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
      .admin_workList{
        .worklist_data {
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
      }
    }
  }
`;

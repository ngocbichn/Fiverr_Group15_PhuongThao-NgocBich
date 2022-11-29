import React, { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Tabs, Card, Collapse, Tooltip } from 'antd';
import { useAdminWorkManage } from "../../../../store/adminWorkManage/adminWorkManageSelector";
import { useDispatch } from "react-redux";
import { deleteCategory, getWorkCategoryDetail } from "../../../../store/adminWorkManage/adminWorkManageReducer";
import {
    EditFilled,
    DeleteFilled, InfoCircleOutlined, PlusOutlined, CiCircleFilled
} from "@ant-design/icons";
import { Table, Input } from "antd";

const AdminWorkCategory = () => {

    const { workCategory, workCategory: { id }, isFetchingCategory, error } = useAdminWorkManage()

    const dispatch = useDispatch()

    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getWorkCategoryDetail())
    }, [])

    console.log(workCategory)

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            render: (text, object) => {
                return <span>{text}</span>;
            },
            sorter: (a, b) => a.id - b.id,
            sortDirections: ["ascend", "descend"],
            width: "10%",
        },
        {
            title: "Image",
            dataIndex: "hinhAnh",
            render: (imgSrc, object) => {
                return <img src={imgSrc} alt="image" style={{ width: "50px", height: "50px" }} />
            },
            width: "20%",
        },
        {
            title: "Category Name",
            dataIndex: "tenNhom",
            sorter: (a, b) => {
                let tenCongViecA = a.tenCongViec.toLowerCase().trim();
                let tenCongViecB = b.tenCongViec.toLowerCase().trim();
                if (tenCongViecA > tenCongViecB) {
                    return 1;
                }
                return -1;
            },
            width: "30%",
            sortDirections: ["descend", "ascend"],
        },
        {
            title: "Category Code",
            dataIndex: "maLoaiCongviec",
            render: (text, object) => {
                return <span>{text}</span>;
            },
            sorter: (a, b) => a.maLoaiCongviec - b.maLoaiCongviec,
            sortDirections: ["ascend", "descend"],
            width: "10%",
        },
        {
            title: "Actions",
            dataIndex: "hanhDong",
            width: "30%",
            render: (text, category) => {
                return (
                    <div className="flex justify-start align-items-center">
                        <div className="mr-10">
                            <NavLink
                                key={1}
                                style={{ cursor: "pointer" }}
                                className=" text-green-400 text-20 p-2 hover:text-green-700 mr-10"
                                to={`/admin/workcategory/info/${category.id}`}
                            >
                                <Tooltip color="green" title="View Detail">
                                    <InfoCircleOutlined />
                                </Tooltip>
                            </NavLink>
                            <span
                                key={2}
                                style={{ cursor: "pointer" }}
                                className=" text-orange-600 text-20 p-2 hover:text-orange-200"
                                onClick={() => {
                                    if (window.confirm("Do you want to delete " + category.tenNhom)) {
                                        dispatch(deleteCategory(category.id)
                                        );

                                    }
                                    window.location.reload()
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

    const data = workCategory;
    // console.log('data', data)

    const onChange = (pagination, filters, sorter, extra) => {
        console.log("params", pagination, filters, sorter, extra);
    };

    const { Search } = Input;

    const onSearch = (value) => {
        console.log(value);
    };

    return (
        <Container className="AdminWorkCategory">
            <div className="content">
                <div className="title mb-20">
                    <div className="title_content">
                        <h4 className="text-18 text-headingPrimary font-semibold leading-5 tracking-tight">
                            Work Category
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
                                    to="/admin/workcategory"
                                    className="text-textPrimary hover:text-primary"
                                >
                                    Work Category
                                </Link>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="my-24">
                    <Link
                        to="/admin/workcategory/addnewcategory"
                        className="bg-primary text-white font-medium text-14 hover:bg-green-800 py-10 px-18 rounded hover:text-white"
                    >
                        Add A New Category
                    </Link>
                </div>
                <div className="workCategory">
                    <div className="workCategory_table">
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

export default AdminWorkCategory;

export const Container = styled.div`
  &.AdminWorkCategory {
    .content {
      padding: 14px;
      margin: 0;
    }
  }
`;

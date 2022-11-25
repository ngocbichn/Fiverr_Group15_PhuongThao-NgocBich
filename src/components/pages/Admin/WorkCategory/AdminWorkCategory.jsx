import React, { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Tabs, Card, Collapse, Tooltip } from 'antd';
import { useAdminWorkManage } from "../../../../store/adminWorkManage/adminWorkManageSelector";
import { useDispatch } from "react-redux";
import { getWorkCategoryDetail } from "../../../../store/adminWorkManage/adminWorkManageReducer";
import {
    EditFilled,
    DeleteFilled, InfoCircleOutlined, PlusOutlined
} from "@ant-design/icons";

const AdminWorkCategory = () => {

    const { workCategory, isFetchingCategory, error } = useAdminWorkManage()

    const dispatch = useDispatch()

    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getWorkCategoryDetail())
    }, [])

    console.log(workCategory)

    const { Panel } = Collapse;

    const onChange = (key) => {
        console.log(key);
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
                <div className="work_category">
                    <div className="">
                        {
                            workCategory.map((work) => (
                                <div className="" key={work.id}>
                                    <Collapse defaultActiveKey={['7']} onChange={onChange}>
                                        <Panel header={work.tenNhom} key={work.id}>
                                            {work.dsChiTietLoai.map((chiTietLoai) => (
                                                <div className="flex justify-between px-24 items-center" key={chiTietLoai.id}>
                                                    <span
                                                        className="hover:text-primary cursor-pointer"
                                                        onClick={() => { navigate(`/admin/workcategory/singledetail/${chiTietLoai.id}`) }}
                                                    >
                                                        {chiTietLoai.tenChiTiet}
                                                    </span>
                                                    <span>
                                                        <NavLink
                                                            className=" text-primary text-20 p-2 hover:text-green-700"
                                                            to={`/admin/workcategory/singledetail/${chiTietLoai.id}`}
                                                        >
                                                            <Tooltip color="green" title="View Detail">
                                                                <InfoCircleOutlined />
                                                            </Tooltip>
                                                        </NavLink>
                                                        <NavLink
                                                            className=" text-yellow-400 text-20 p-2 ml-10 hover:text-orange-600"
                                                            to={`/admin/workcategory`}
                                                        >
                                                            <Tooltip color="yellow" title="Edit"></Tooltip>
                                                        </NavLink>
                                                        <span
                                                            style={{ cursor: "pointer" }}
                                                            className=" text-orange-600 text-20 p-2 ml-10 hover:text-orange-200"
                                                        // onClick={() => {
                                                        //     if (window.confirm("Do you want to delete " + user.name + "?")) {
                                                        //         dispatch(deleteUser(user.id)
                                                        //         );

                                                        //     }
                                                        // }}
                                                        >
                                                            <Tooltip color="red" title="Delete">
                                                                <DeleteFilled />
                                                            </Tooltip>
                                                        </span>
                                                    </span>
                                                </div>
                                            ))}
                                            <div className="px-24 my-8 ">
                                                <span className="flex justify-start items-center gap-6 hover:text-primary">
                                                    <PlusOutlined className=" text-black font-medium text-12 hover:text-primary" />
                                                    <Link
                                                        to="/admin/workcategory"
                                                        className=" text-black font-medium text-12 hover:text-primary hover:underline"
                                                    >
                                                        Add A New One
                                                    </Link>
                                                </span>
                                            </div>
                                        </Panel>
                                    </Collapse>
                                </div>
                            ))
                        }

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

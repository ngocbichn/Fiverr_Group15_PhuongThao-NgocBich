import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { useFormik } from "formik";
import { useAdminWorkManage } from "../../../../store/adminWorkManage/adminWorkManageSelector";
import { getCategoryInfo } from "../../../../store/adminWorkManage/adminWorkManageReducer";
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, Card, List, Space } from 'antd';

const AdminWorkCategoryInfo = () => {

    const [imgSrc, setImgSrc] = useState("");

    const param = useParams()

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategoryInfo(param.categoryId));
    }, []);

    const { workCateInfo, workCateInfo: { dsChiTietLoai } } = useAdminWorkManage()
    console.log(workCateInfo)
    console.log('dsChiTietLoai', dsChiTietLoai)

    const renderTenChiTiet = () => {
        return dsChiTietLoai?.map((item, index) => {
            return (
                <p key={index} className="">{item.tenChiTiet}</p>
            )
        })
    }

    return (
        <Container className="AdminWorkCategoryInfo">
            <div className="content">
                <div className="title mb-36">
                    <div className="title_content">
                        <h4 className="text-18 text-headingPrimary font-semibold leading-5 tracking-tight">
                            Category Detail
                        </h4>
                        <ol className="breadcrumb flex mb-30">
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
                            <li className="font-semibold mx-10 text-primary">/</li>
                            <li className="breadcrumb_item">
                                <Link
                                    to="#"
                                    className="text-textPrimary hover:text-primary"
                                >
                                    Category Detail
                                </Link>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="main px-20">
                    <div className="information flex justify-center items-center">
                        <div className="avatar w-400 flex justify-center items-center">
                            <img
                                className="w-full"
                                style={{ width: 170, height: 170 }}
                                src={imgSrc === "" ? workCateInfo.hinhAnh : imgSrc}
                                alt="..."
                            />
                        </div>
                        <div className="description pr-300">
                            <h4 className="font-semibold text-16">
                                Category Name:
                                <span className="ml-8">{workCateInfo.tenNhom}</span>
                            </h4>
                            <p className="font-semibold text-16">
                                Category Code:
                                <span className="ml-8 font-normal text-14">{workCateInfo.maLoaiCongviec}</span>
                            </p>
                            <p className="font-semibold text-16">
                                Category Detail List:
                            </p>
                            <span>{renderTenChiTiet()}</span>
                        </div>

                    </div>
                </div>
            </div>
        </Container>
    );
};

export default AdminWorkCategoryInfo;

export const Container = styled.div`
  &.AdminWorkCategoryInfo {
    padding: 14px;
    margin: 0;

    .card{
        .card_item{
            background: #00b09b;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #96c93d, #00b09b);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #96c93d, #00b09b); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        }
    }
  }
`;

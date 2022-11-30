import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import {
    Button,
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    TreeSelect,
} from "antd";
import { useFormik } from "formik";
import { useAdminWorkManage } from '../../../../store/adminWorkManage/adminWorkManageSelector';
import { useDispatch } from 'react-redux';
import { getWorkInfo, updateWorkImage } from '../../../../store/adminWorkManage/adminWorkManageReducer';

const AdminWorkDetail = () => {

    const [imgSrc, setImgSrc] = useState("");

    const param = useParams()

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWorkInfo(param.workId));
    }, []);

    const { workInfo } = useAdminWorkManage()
    console.log(workInfo)

    return (
        <Container className='AdminWorkDetail'>
            <div className="content">
                <div className="title mb-36">
                    <div className="title_content">
                        <h4 className="text-18 text-headingPrimary font-semibold leading-5 tracking-tight">
                            Work Detail
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
                                    to="/admin/worklist"
                                    className="text-textPrimary hover:text-primary"
                                >
                                    Work List
                                </Link>
                            </li>
                            <li className="font-semibold mx-10 text-primary">/</li>
                            <li className="breadcrumb_item">
                                <Link
                                    to="#"
                                    className="text-textPrimary hover:text-primary"
                                >
                                    Work Detail
                                </Link>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className='flex justify-start items-center px-24 gap-14'>
                    <div className="avatar w-345 flex justify-center items-center">
                        <img
                            className='w-full'
                            style={{ width: 170, height: 170 }}
                            src={imgSrc === "" ? workInfo.hinhAnh : imgSrc}
                            alt="..."
                        />
                    </div>
                    <div className='description pr-300'>
                        <h4 className='font-semibold text-14'>
                            Name:
                            <span className='ml-8'>{workInfo.tenCongViec}</span>
                        </h4>
                        <p className='font-semibold'>
                            Work Id:
                            <span className='ml-8 font-normal'>{workInfo.id}</span>
                        </p>
                        <p className='font-semibold'>
                            Short Description:
                            <span className='ml-8 font-normal'>{workInfo.moTaNgan}</span>
                        </p>
                        <p className='font-semibold'>
                            Price:
                            <span className='ml-8 font-normal'>${workInfo.giaTien}</span>
                        </p>
                        <p className='font-semibold'>
                            Difficulty:
                            <span className='ml-8 font-normal'>{workInfo.saoCongViec}</span>
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default AdminWorkDetail

export const Container = styled.div`
    &.AdminWorkDetail{
        padding: 14px;
      margin: 0;
    }
`
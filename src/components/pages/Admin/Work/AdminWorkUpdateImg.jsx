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

const AdminWorkUpdateImg = () => {

    const [imgSrc, setImgSrc] = useState("");

    const param = useParams()

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWorkInfo(param.workId));
    }, []);

    const { workInfo } = useAdminWorkManage()
    console.log(workInfo)

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            id: workInfo.id,
            hinhAnh: null,
        },
        onSubmit: (values) => {
            console.log("values", values);
            const formData = new FormData();
            // formData.append('tenPhim', formik.values.tenPhim)

            for (let key in values) {
                if (key !== "hinhAnh") {
                    formData.append(key, values[key]);
                } else {
                    if (values.hinhAnh !== null) {
                        formData.append("File", values.hinhAnh, values.hinhAnh.name);
                    }
                }
            }
            // console.log('formik', formData.get('moTa'))
            dispatch(updateWorkImage(formData));
        },
    });

    const handleChangeFile = async (e) => {
        let file = e.target.files[0];
        if (
            file.type === "image/jpeg" ||
            file.type === "image/jpg" ||
            file.type === "image/png" ||
            file.type === "image.gif"
        ) {
            await formik.setFieldValue("hinhAnh", file);
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                // console.log(e.target.result)
                setImgSrc(e.target.result);
            };
        }
    };

    return (
        <Container className='AdminWorkUpdateImg'>
            <div className="UpdateImg_content">
                <div className="title mb-36">
                    <div className="title_content">
                        <h4 className="text-18 text-headingPrimary font-semibold leading-5 tracking-tight">
                            Update Work Image
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
                                    to="/admin/worklist/uploadworkimg/:id"
                                    className="text-textPrimary hover:text-primary"
                                >
                                    Update Work Image
                                </Link>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className='flex justify-start items-center px-20'>
                    <div className="form_updateImg">
                        <Form
                            onSubmitCapture={formik.handleSubmit}
                            labelCol={{
                                span: 4,
                            }}
                            wrapperCol={{
                                span: 14,
                            }}
                            layout="horizontal"
                            size="middle"
                        >
                            <Form.Item label="Image">
                                <input
                                    type="file"
                                    onChange={handleChangeFile}
                                    accept="image/png,image/jpeg,image/jpg,image/gif"
                                />
                                <br />
                                <img
                                    style={{ width: 150, height: 150 }}
                                    src={imgSrc === "" ? workInfo.hinhAnh : imgSrc}
                                    alt="..."
                                />
                            </Form.Item>
                            <Form.Item label="Submit">
                                <button
                                    type="submit"
                                    className="btnEditUser bg-primary text-white font-medium text-14 hover:bg-green-800 py-10 px-18 rounded"
                                >
                                    Update Image
                                </button>
                            </Form.Item>
                        </Form>
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

export default AdminWorkUpdateImg

export const Container = styled.div`
    &.AdminWorkUpdateImg{
        padding: 14px;
      margin: 0;
        .UpdateImg_content{}
    }
`
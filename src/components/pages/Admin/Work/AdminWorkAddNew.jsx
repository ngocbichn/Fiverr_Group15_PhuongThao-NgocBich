import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
import moment from "moment";
import { useUserManage } from '../../../../store/userManage/userManageSelector';
import { useDispatch } from 'react-redux';
import { postNewUser } from '../../../../store/userManage/userManageReducer';

const AdminWorkAddNew = () => {
    const [imgSrc, setImgSrc] = useState("");

    const { isLoadingUserChanged, errorMessage } = useUserManage()

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            tenCongViec: "",
            danhGia: 0,
            giaTien: 0,
            nguoiTao: 1,
            hinhAnh: null,
            moTa: "",
            maChiTietLoaiCongViec: 0,
            moTaNgan: "",
            saoCongViec: 0,
        },
        onSubmit: (values) => {
            console.log('values', values)
        },
    });

    const handleChangeSelect = (name) => {
        return (value) => {
            formik.setFieldValue(name, value);
        };
    }

    const handleChangeInputNumber = (name) => {
        return (value) => {
            formik.setFieldValue(name, value)
        }
    }

    const handleChangeFile = (e) => {
        let file = e.target.files[0];
        if (
            file.type === "image/jpeg" ||
            file.type === "image/jpg" ||
            file.type === "image/png" ||
            file.type === "image.gif"
        ) {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                // console.log(e.target.result
                setImgSrc(e.target.result);
            };
            formik.setFieldValue("hinhAnh", file);

            // formik.setErrors()
        }
    };

    return (
        <Container className="AdminWorkAddNew">
            <div className="WorkAddNew_content">
                <div className="title">
                    <div className="title_content">
                        <h4 className="text-18 text-headingPrimary font-semibold leading-5 tracking-tight">
                            Add a New Work
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
                            <li className="font-semibold mx-10 text-primary">/</li>
                            <li className="breadcrumb_item">
                                <Link
                                    to="/admin/worklist/addnew"
                                    className="text-textPrimary hover:text-primary"
                                >
                                    Add New Work
                                </Link>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="form_addNew">
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
                        <Form.Item label="Name">
                            <Input
                                name="tenCongViec"
                                placeholder="Name"
                                onChange={formik.handleChange}
                            />
                        </Form.Item>
                        <Form.Item label="Review">
                            <InputNumber
                                placeholder="Review"
                                onChange={handleChangeInputNumber("danhGia")}
                                min={1}
                            />
                        </Form.Item>
                        <Form.Item label="Price">
                            <InputNumber
                                placeholder="$10"
                                onChange={handleChangeInputNumber("giaTien")}
                                min={1}
                                max={99}
                            />
                        </Form.Item>
                        <Form.Item label="Description">
                            <Input
                                name="moTa"
                                placeholder="Description"
                                onChange={formik.handleChange}
                            />
                        </Form.Item>
                        <Form.Item label="Short Description">
                            <Input
                                placeholder="Full editing of the file up to 5 minutes..."
                                onChange={formik.handleChange}
                            />
                        </Form.Item>
                        <Form.Item label="Work Detail Id">
                            <InputNumber
                                placeholder="1"
                                onChange={handleChangeInputNumber("maChiTietLoaiCongViec")}
                                min={1}
                            />
                        </Form.Item>
                        <Form.Item label="Difficulty">
                            <InputNumber
                                placeholder="1"
                                onChange={handleChangeInputNumber("saoCongViec")}
                                min={1}
                                max={5}
                            />
                        </Form.Item>
                        <Form.Item label="Image">
                            <input
                                type="file"
                                onChange={handleChangeFile}
                                accept="image/png,image/jpeg,image/jpg,image/gif"
                            />
                            <br />
                            <img style={{ width: 150, height: 150 }} src={imgSrc} alt="..." />
                        </Form.Item>
                        <Form.Item label="Submit">
                            <button
                                type="submit"
                                className="btnEditUser bg-primary text-white font-medium text-14 hover:bg-green-800 py-10 px-18 rounded"
                            >
                                Add a New Work
                            </button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </Container>
    )
}

export default AdminWorkAddNew

export const Container = styled.div`
    &.AdminWorkAddNew{
        .WorkAddNew_content{
            padding: 14px;
      margin: 0;
            .title{}
            .form_addNew{}
        }
    }
`
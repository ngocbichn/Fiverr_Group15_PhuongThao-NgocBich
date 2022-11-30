import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import {
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
} from "antd";
import { useUserManage } from '../../../../store/userManage/userManageSelector';
import { getUserInfo } from '../../../../store/userManage/userManageReducer';
import moment from "moment";

const EditUser = () => {
    const param = useParams();

    const { userInfo } = useUserManage();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserInfo(param.userId));
    }, []);

    const navigate = useNavigate();

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            id: userInfo.id,
            name: userInfo?.name,
            email: userInfo?.email,
            phone: userInfo?.phone,
            birthday: userInfo?.birthday,
            gender: userInfo?.gender,
            role: userInfo?.role,
        },
        onSubmit: (values) => {
            console.log('values', values)
            // dispatch(putWorkChanged({
            //     id: values.id,
            //     valueUpdated: values,
            // }));
            // navigate(-1)
        },
    });

    const handleChangeInputNumber = (name) => {
        return (value) => {
            formik.setFieldValue(name, value);
        };
    };

    const handleChangeDatePicker = (value) => {
        // console.log('datePickerChange', moment(value))
        let birthday = moment(value);
        formik.setFieldValue("birthday", birthday);
    };

    const handleChangeSwitch = (name) => {
        return (value) => {
            formik.setFieldValue(name, value);
        };
    };

    return (
        <Container className="EditUser">
            <div className="content">
                <div className="title mb-20">
                    <div className="title_content">
                        <h4 className="text-18 text-headingPrimary font-semibold leading-5 tracking-tight">
                            Edit User
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
                                    User List
                                </Link>
                            </li>
                            <li className="font-semibold mx-10 text-primary">/</li>
                            <li className="breadcrumb_item">
                                <Link to="#" className="text-textPrimary hover:text-primary">
                                    Edit User
                                </Link>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="form_edit">
                    <Form
                        onSubmitCapture={formik.handleSubmit}
                        labelCol={{
                            span: 4,
                        }}
                        wrapperCol={{
                            span: 14,
                        }}
                        layout="horizontal"
                        size="large"
                    >
                        <Form.Item label="Name">
                            <Input
                                name="name"
                                placeholder="Name"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />
                        </Form.Item>
                        <Form.Item label="Email">
                            <Input
                                name="email"
                                placeholder="Email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                        </Form.Item>
                        <Form.Item label="Phone">
                            <InputNumber
                                placeholder=""
                                onChange={handleChangeInputNumber("phone")}
                                min={1}
                                value={formik.values.phone}
                            />
                        </Form.Item>
                        <Form.Item label="Birthday">
                            <DatePicker
                                format={"DD/MM/YYYY"}
                                onChange={handleChangeDatePicker}
                                value={moment(formik.values.birthday)}
                            />
                        </Form.Item>
                        <Form.Item label="Gender" valuePropName="checked">
                            <Switch
                                name="gender"
                                onChange={handleChangeSwitch("gender")}
                                checked={formik.values.gender}
                            />
                        </Form.Item>
                        <Form.Item label="Role">
                            <Input
                                name="role"
                                placeholder=""
                                onChange={formik.handleChange}
                                value={formik.values.role}
                            />
                        </Form.Item>
                        <Form.Item label="Submit">
                            <button
                                type="submit"
                                className="btnEditWork bg-primary text-white font-medium text-14 hover:bg-green-800 py-10 px-18 rounded"
                            >
                                Edit User
                            </button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </Container>
    )
}

export default EditUser

export const Container = styled.div`
    &.EditUser{
        .content{
            margin: 0;
            padding: 14px;
        }
    }
`
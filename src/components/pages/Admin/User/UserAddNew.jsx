import React from 'react'
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

const UserAddNew = () => {

    const { isLoadingUserChanged, errorMessage } = useUserManage()

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            birthday: "",
            gender: true,
            role: "ADMIN",
        },
        onSubmit: (values) => {
            dispatch(postNewUser(values))
            alert('Added Successfully!')
            navigate('/admin/user')
        },
    });

    const handleChangeDatePicker = (value) => {
        console.log("datePickerChange", moment(value).format("DD/MM/YYYY"));
        let birthday = moment(value).format("DD/MM/YYYY");
        formik.setFieldValue("birthday", birthday);
    };

    const handleChangeSelect = (name) => {
        return (value) => {
            formik.setFieldValue(name, value);
        };
    }

    return (
        <Container className="UserAddNew">
            <div className="UserAddNew_content">
                <div className="title">
                    <div className="title_content">
                        <h4 className="text-18 text-headingPrimary font-semibold leading-5 tracking-tight">
                            Add a New Admin
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
                            <li className="breadcrumb_item">
                                <Link
                                    to="/admin/user/addnew"
                                    className="text-textPrimary hover:text-primary"
                                >
                                    Add New
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
                                name="name"
                                placeholder="Name"
                                onChange={formik.handleChange}
                            />
                        </Form.Item>
                        <Form.Item label="Email">
                            <Input
                                name="email"
                                placeholder="Email"
                                onChange={formik.handleChange}
                            />
                        </Form.Item>
                        <Form.Item label="Password">
                            <Input
                                name="password"
                                placeholder="Password"
                                onChange={formik.handleChange}
                            />
                        </Form.Item>
                        <Form.Item label="Phone">
                            <Input
                                name="phone"
                                placeholder="Phone"
                                onChange={formik.handleChange}
                            />
                        </Form.Item>
                        <Form.Item label="Birthday">
                            <DatePicker
                                format={"DD/MM/YYYY"}
                                onChange={handleChangeDatePicker}
                            />
                        </Form.Item>
                        <Form.Item label="Gender">
                            <Select
                                name="gender"
                                onChange={handleChangeSelect('gender')}
                                options={[
                                    {
                                        value: true,
                                        label: "Male",
                                    },
                                    {
                                        value: false,
                                        label: "Female",
                                    },
                                ]}
                            />
                        </Form.Item>
                        <Form.Item label="Role">
                            <Input
                                name="role"
                                defaultValue={"ADMIN"}
                            />
                        </Form.Item>
                        <Form.Item label="Submit">
                            <button
                                type="submit"
                                className="btnEditUser bg-primary text-white font-medium text-14 hover:bg-green-800 py-10 px-18 rounded"
                            >
                                Add a New Admin
                            </button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </Container>
    )
}

export default UserAddNew

export const Container = styled.div`
    &.UserAddNew{
        .UserAddNew_content{
            padding: 14px;
      margin: 0;
            .title{}
            .form_addNew{}
        }
    }
`
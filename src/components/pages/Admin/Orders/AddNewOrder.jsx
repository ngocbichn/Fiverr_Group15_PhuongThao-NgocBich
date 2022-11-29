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
import { useDispatch } from 'react-redux';
import { postNewUser } from '../../../../store/userManage/userManageReducer';
import { useOrdersManage } from '../../../../store/ordersManage/ordersManageSelector';
import { postNewOrder } from '../../../../store/ordersManage/ordersManageReducer';

const AddNewOrder = () => {

    const { isPosting, errorMessage, isSuccess } = useOrdersManage()

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            maCongViec: 0,
            maNguoiThue: 0,
            ngayThue: "",
            hoanThanh: true,
        },
        onSubmit: (values) => {
            console.log(values)
            dispatch(postNewOrder(values))
            if (isSuccess) {
                alert('Added Successfully!')
                navigate(-1)
            }
        },
    });

    const handleChangeDatePicker = (value) => {
        let date = moment(value).format("DD/MM/YYYY");
        formik.setFieldValue("ngayThue", date);
    };

    const handleChangeSelect = (name) => {
        return (value) => {
            formik.setFieldValue(name, value);
        };
    }

    return (
        <Container className="AddNewOrder">
            <div className="content">
                <div className="title mb-20">
                    <div className="title_content">
                        <h4 className="text-18 text-headingPrimary font-semibold leading-5 tracking-tight">
                            Add a New Order
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
                                    to="/admin/workorders"
                                    className="text-textPrimary hover:text-primary"
                                >
                                    Work Orders
                                </Link>
                            </li>
                            <li className="font-semibold mx-10 text-primary">/</li>
                            <li className="breadcrumb_item">
                                <Link
                                    to="/admin/workorders/addnew"
                                    className="text-textPrimary hover:text-primary"
                                >
                                    Add New Order
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
                        <Form.Item label="Work Id">
                            <Input
                                name="maCongViec"
                                placeholder="2"
                                onChange={formik.handleChange}
                            />
                        </Form.Item>
                        <Form.Item label="Employer Id">
                            <Input
                                name="maNguoiThue"
                                placeholder="1601"
                                onChange={formik.handleChange}
                            />
                        </Form.Item>
                        <Form.Item label="Date">
                            <DatePicker
                                format={"DD/MM/YYYY"}
                                onChange={handleChangeDatePicker}
                            />
                        </Form.Item>
                        <Form.Item label="Completion">
                            <Select
                                name="hoanThanh"
                                onChange={handleChangeSelect('hoanThanh')}
                                options={[
                                    {
                                        value: true,
                                        label: "Done",
                                    },
                                    {
                                        value: false,
                                        label: "Progressing",
                                    },
                                ]}
                            />
                        </Form.Item>
                        <Form.Item label="Submit">
                            <button
                                type="submit"
                                className="btnAddNewOrder bg-primary text-white font-medium text-14 hover:bg-green-800 py-10 px-18 rounded"
                            >
                                Add a New Order
                            </button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </Container>
    )
}

export default AddNewOrder

export const Container = styled.div`
    &.AddNewOrder{
        .content{
            padding: 14px;
            margin: 0;
        }
    }
`
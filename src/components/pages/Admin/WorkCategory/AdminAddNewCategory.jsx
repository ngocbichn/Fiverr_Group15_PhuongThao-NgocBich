import React, { useEffect } from "react";
import styled from "styled-components";
import {
    Form,
    Input,
    InputNumber,
} from "antd";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { useAdminWorkManage } from "../../../../store/adminWorkManage/adminWorkManageSelector";
import { useDispatch } from "react-redux";
import { addNewCategory } from "../../../../store/adminWorkManage/adminWorkManageReducer";

const AdminAddNewCategory = () => {
    const { isPosting, errorMessage } = useAdminWorkManage();

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            tenChiTiet: "",
            maLoaiCongViec: 0,
        },
        onSubmit: (values) => {
            console.log("values", values);
            dispatch(addNewCategory(values));
        },
    });

    const handleChangeInputNumber = (name) => {
        return (value) => {
            formik.setFieldValue(name, value)
        }
    }

    return (
        <Container className="addNewCategory">
            <div className="CateAddNew_content">
                <div className="title">
                    <div className="title_content">
                        <h4 className="text-18 text-headingPrimary font-semibold leading-5 tracking-tight">
                            Add a New Category
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
                                    to="/admin/workcategory/addnewcategory"
                                    className="text-textPrimary hover:text-primary"
                                >
                                    Add a New Category
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
                                name="tenChiTiet"
                                placeholder="Name"
                                onChange={formik.handleChange}
                            />
                        </Form.Item>
                        <Form.Item label="Work Category Id">
                            <InputNumber
                                placeholder="2"
                                onChange={handleChangeInputNumber("maLoaiCongViec")}
                                min={1}
                                max={10}
                            />
                        </Form.Item>
                        <Form.Item label="Submit">
                            <button
                                type="submit"
                                className="btnEditUser bg-primary text-white font-medium text-14 hover:bg-green-800 py-10 px-18 rounded"
                            >
                                Add a New Category
                            </button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </Container>
    );
};

export default AdminAddNewCategory;

export const Container = styled.div`
  &.addNewCategory {
    .CateAddNew_content {
      padding: 14px;
      margin: 0;
    }
  }
`;

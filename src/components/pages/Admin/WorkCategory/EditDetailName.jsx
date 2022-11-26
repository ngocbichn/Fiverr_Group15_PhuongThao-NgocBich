import React, { useEffect } from 'react'
import styled from 'styled-components'
import {
    Form,
    Input,
    InputNumber,
} from "antd";
import { useFormik } from "formik";
import { Link, useParams } from "react-router-dom";
import { useAdminWorkManage } from '../../../../store/adminWorkManage/adminWorkManageSelector';
import { useDispatch } from 'react-redux';
import { getWorkCategoryDetail } from '../../../../store/adminWorkManage/adminWorkManageReducer';

const EditDetailName = () => {

    const param = useParams()

    const { workCateInfo } = useAdminWorkManage()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getWorkCategoryDetail(param.id))
    }, [])

    const formik = useFormik({
        initialValues: {
            tenChiTiet: workCateInfo.tenChiTiet,
            id: workCateInfo.id,
        },
        onSubmit: (values) => {
            console.log("values", values);
        },
    });

    const handleChangeInputNumber = (name) => {
        return (value) => {
            formik.setFieldValue(name, value);
        };
    };

    return (
        <Container className='EditDetailName'>
            <div className="Edit_content">
                <div className="title">
                    <div className="title_content">
                        <h4 className="text-18 text-headingPrimary font-semibold leading-5 tracking-tight">
                            Edit Detail Name
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
                                    to="/admin/workcategory/editDetailName/:id"
                                    className="text-textPrimary hover:text-primary"
                                >
                                    Edit Detail Name
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
                                value={formik.values.tenChiTiet}
                            />
                        </Form.Item>
                        <Form.Item label="Work Category Id">
                            <InputNumber
                                placeholder="2"
                                onChange={handleChangeInputNumber("id")}
                                min={1}
                                max={100}
                                value={formik.values.id}
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
    )
}

export default EditDetailName

export const Container = styled.div`
   &.EditDetailName{
    .Edit_content {
      padding: 14px;
      margin: 0;
    }
   }
`
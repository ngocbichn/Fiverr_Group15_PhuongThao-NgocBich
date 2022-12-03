import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getCategoryInfo, putCategoryChanged, putWorkChanged } from '../../../../store/adminWorkManage/adminWorkManageReducer';
import { useAdminWorkManage } from '../../../../store/adminWorkManage/adminWorkManageSelector';
import {
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
} from "antd";

const AdminEditWorkCategory = () => {

    const param = useParams();

    const { workCateInfo } = useAdminWorkManage();
    console.log(workCateInfo)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategoryInfo(param.categoryId));
    }, []);

    const navigate = useNavigate();

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            id: workCateInfo.id,
            tenChiTiet: workCateInfo?.tenNhom,
            maLoaiCongviec: workCateInfo?.maLoaiCongviec,
            danhSachChiTiet: workCateInfo?.danhSachChiTiet,
        },
        onSubmit: (values) => {
            console.log('values', values)
            dispatch(putCategoryChanged({
                id: values.id,
                valueUpdated: values,
            }));
            navigate(-1)
        },
    });

    const handleChangeInputNumber = (name) => {
        return (value) => {
            formik.setFieldValue(name, value);
        };
    };

    return (
        <Container className="AdminEditWorkCategory">
            <div className="content">
                <div className="title mb-20">
                    <div className="title_content">
                        <h4 className="text-18 text-headingPrimary font-semibold leading-5 tracking-tight">
                            Edit Category
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
                            <li className="font-semibold mx-10 text-primary">/</li>
                            <li className="breadcrumb_item">
                                <Link to="#" className="text-textPrimary hover:text-primary">
                                    Edit Category
                                </Link>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="form_edit flex gap-30">
                    <div className='flex justify-center items-start pr-20 border-r-2 border-grey' style={{ width: '20%' }}>
                        <img src={workCateInfo.hinhAnh} style={{ width: '170px', height: '170px' }} alt="workImage" />
                    </div>
                    <div className='' style={{ width: '80%' }}>
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
                            <Form.Item label="Category Name">
                                <Input
                                    name="tenChiTiet"
                                    placeholder="Category name"
                                    onChange={formik.handleChange}
                                    value={formik.values.tenChiTiet}
                                />
                            </Form.Item>
                            <Form.Item label="Category Id">
                                <InputNumber
                                    placeholder=""
                                    onChange={handleChangeInputNumber("maLoaiCongviec")}
                                    min={1}
                                    value={formik.values.maLoaiCongviec}
                                />
                            </Form.Item>
                            <Form.Item label="Submit">
                                <button
                                    type="submit"
                                    className="btnEditCate bg-primary text-white font-medium text-14 hover:bg-green-800 py-10 px-18 rounded"
                                >
                                    Edit Category
                                </button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default AdminEditWorkCategory

export const Container = styled.div`
    &.AdminEditWorkCategory{
        .content{
            margin: 0;
            padding: 14px;
        }
    }
`

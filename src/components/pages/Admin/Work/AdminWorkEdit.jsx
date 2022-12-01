import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getWorkInfo, putWorkChanged } from '../../../../store/adminWorkManage/adminWorkManageReducer';
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

const AdminWorkEdit = () => {
    const param = useParams();

    const { workInfo } = useAdminWorkManage();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWorkInfo(param.workId));
    }, []);

    const navigate = useNavigate();

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            id: workInfo.id,
            tenCongViec: workInfo?.tenCongViec,
            danhGia: workInfo?.danhGia,
            giaTien: workInfo?.giaTien,
            nguoiTao: workInfo?.nguoiTao,
            hinhAnh: workInfo?.hinhAnh,
            moTa: workInfo?.moTa,
            maChiTietLoaiCongViec: workInfo?.maChiTietLoaiCongViec,
            moTaNgan: workInfo?.moTaNgan,
            saoCongViec: workInfo?.saoCongViec,
        },
        onSubmit: (values) => {
            console.log('values', values)
            dispatch(putWorkChanged({
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
        <Container className="AdminWorkEdit">
            <div className="content">
                <div className="title mb-20">
                    <div className="title_content">
                        <h4 className="text-18 text-headingPrimary font-semibold leading-5 tracking-tight">
                            Edit Work Orders
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
                                <Link to="#" className="text-textPrimary hover:text-primary">
                                    Edit Work
                                </Link>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="form_edit flex gap-30">
                    <div className='flex justify-center items-start pr-20 border-r-2 border-grey' style={{ width: '20%' }}>
                        <img src={workInfo.hinhAnh} style={{ width: '170px', height: '170px' }} alt="workImage" />
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
                            <Form.Item label="Work Name">
                                <Input
                                    name="tenCongViec"
                                    placeholder="Work name"
                                    onChange={formik.handleChange}
                                    value={formik.values.tenCongViec}
                                />
                            </Form.Item>
                            <Form.Item label="Rating">
                                <InputNumber
                                    placeholder="235"
                                    onChange={handleChangeInputNumber("danhGia")}
                                    min={1}
                                    value={formik.values.danhGia}
                                />
                            </Form.Item>
                            <Form.Item label="Price">
                                <InputNumber
                                    placeholder="$10"
                                    onChange={handleChangeInputNumber("giaTien")}
                                    min={1}
                                    value={formik.values.giaTien}
                                />
                            </Form.Item>
                            <Form.Item label="User Id">
                                <InputNumber
                                    placeholder="1603"
                                    onChange={handleChangeInputNumber("nguoiTao")}
                                    min={1}
                                    value={formik.values.nguoiTao}
                                />
                            </Form.Item>
                            <Form.Item label="Work Id">
                                <InputNumber
                                    placeholder="2"
                                    onChange={handleChangeInputNumber("maChiTietLoaiCongViec")}
                                    min={1}
                                    value={formik.values.maChiTietLoaiCongViec}
                                />
                            </Form.Item>
                            <Form.Item label="Difficulty">
                                <InputNumber
                                    placeholder="2"
                                    onChange={handleChangeInputNumber("saoCongViec")}
                                    min={1}
                                    max={5}
                                    value={formik.values.saoCongViec}
                                />
                            </Form.Item>
                            <Form.Item label="Description">
                                <Input
                                    name="moTa"
                                    placeholder=""
                                    onChange={formik.handleChange}
                                    value={formik.values.moTa}
                                />
                            </Form.Item>
                            <Form.Item label="Short Description">
                                <Input
                                    name="moTaNgan"
                                    placeholder=""
                                    onChange={formik.handleChange}
                                    value={formik.values.moTaNgan}
                                />
                            </Form.Item>
                            <Form.Item label="Submit">
                                <button
                                    type="submit"
                                    className="btnEditWork bg-primary text-white font-medium text-14 hover:bg-green-800 py-10 px-18 rounded"
                                >
                                    Edit Work
                                </button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default AdminWorkEdit

export const Container = styled.div`
    &.AdminWorkEdit{
        .content{
            margin: 0;
            padding: 14px;
        }
    }
`
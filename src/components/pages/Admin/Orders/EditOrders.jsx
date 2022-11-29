import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import {
    getOrderInfo,
    putOrderInfoChanged,
} from "../../../../store/ordersManage/ordersManageReducer";
import { useOrdersManage } from "../../../../store/ordersManage/ordersManageSelector";
import { DatePicker, Form, Input, InputNumber, Switch } from "antd";
import moment from "moment";

const EditOrders = () => {
    const param = useParams();

    const { orderInfo, isFetchingOrderInfo } = useOrdersManage();
    console.log("orderInfo", orderInfo);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrderInfo(param.orderId));
    }, []);

    const navigate = useNavigate();

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            id: orderInfo.id,
            maCongViec: orderInfo?.maCongViec,
            maNguoiThue: orderInfo?.maNguoiThue,
            ngayThue: orderInfo?.ngayThue,
            hoanThanh: orderInfo?.hoanThanh,
        },
        onSubmit: (values) => {
            console.log("values", values);
            dispatch(putOrderInfoChanged(values.id, values));
        },
    });

    const handleChangeDatePicker = (value) => {
        // console.log('datePickerChange', moment(value))
        let ngayThue = moment(value);
        formik.setFieldValue("ngayThue", ngayThue);
    };

    const handleChangeSwitch = (name) => {
        return (value) => {
            formik.setFieldValue(name, value);
        };
    };

    const handleChangeInputNumber = (name) => {
        return (value) => {
            formik.setFieldValue(name, value);
        };
    };

    return (
        <Container className="EditOrders">
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
                                    to="/admin/workorders"
                                    className="text-textPrimary hover:text-primary"
                                >
                                    Work Orders
                                </Link>
                            </li>
                            <li className="font-semibold mx-10 text-primary">/</li>
                            <li className="breadcrumb_item">
                                <Link to="#" className="text-textPrimary hover:text-primary">
                                    Edit Work Orders
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
                        <Form.Item label="Work Id">
                            <InputNumber
                                placeholder="10"
                                onChange={handleChangeInputNumber("maCongViec")}
                                min={1}
                                value={formik.values.maCongViec}
                            />
                        </Form.Item>
                        <Form.Item label="Employer Id">
                            <InputNumber
                                placeholder="10"
                                onChange={handleChangeInputNumber("maNguoiThue")}
                                min={1}
                                value={formik.values.maNguoiThue}
                            />
                        </Form.Item>
                        <Form.Item label="Date hired">
                            <DatePicker
                                format={"DD/MM/YYYY"}
                                onChange={handleChangeDatePicker}
                                value={moment(formik.values.ngayThue)}
                            />
                            {/* value={moment(formik.values.ngayKhoiChieu, "DD/MM/YYYY")} */}
                        </Form.Item>
                        <Form.Item label="Completion" valuePropName="checked">
                            <Switch
                                name="hoanThanh"
                                onChange={handleChangeSwitch("hoanThanh")}
                                checked={formik.values.hoanThanh}
                            />
                        </Form.Item>
                        <Form.Item label="Submit">
                            <button
                                type="submit"
                                className="btnEditOrder bg-primary text-white font-medium text-14 hover:bg-green-800 py-10 px-18 rounded"
                            >
                                Edit Order
                            </button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </Container>
    );
};

export default EditOrders;

export const Container = styled.div`
  &.EditOrders {
    .content {
      margin: 0;
      padding: 14px;

      .ant-form-item {
        .ant-switch-checked {
          background-color: #1dbf73;
        }
      }
    }
  }
`;

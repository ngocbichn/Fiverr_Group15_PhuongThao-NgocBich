import React, { useEffect, useState } from "react";
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
import styled from "styled-components";
import { useFormik } from "formik";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useUserManage } from "../../../../store/userManage/userManageSelector";
import moment from "moment";
import { useDispatch } from "react-redux";
import { getUserInfo, postNewUser } from "../../../../store/userManage/userManageReducer";

const UserEdit = () => {

    const [imgSrc, setImgSrc] = useState("");

    const param = useParams();

    const { userInfo } = useUserManage();
    // console.log('userInfo', userInfo)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserInfo(param.userId));
    }, []);

    const [componentSize, setComponentSize] = useState("default");

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: userInfo?.name,
            phone: userInfo?.phone,
            birthday: userInfo?.birthday,
            avatar: null,
            gender: userInfo?.gender,
            role: userInfo?.role,
        },
        onSubmit: (values) => {
            console.log("values", values);
            const formData = new FormData();
            // formData.append('tenPhim', formik.values.tenPhim)

            for (let key in values) {
                if (key !== "avatar") {
                    formData.append(key, values[key]);
                } else {
                    if (values.avatar !== null) {
                        formData.append("File", values.avatar, values.avatar.name);
                    }
                }
            }
            dispatch(postNewUser(values))
        },
    });

    const handleChangeDatePicker = (value) => {
        console.log("datePickerChange", moment(value));
        let birthday = moment(value);
        formik.setFieldValue("birthday", birthday);
    };

    const handleChangeSelect = (name) => {
        return (value) => {
            formik.setFieldValue(name, value);
        };
    };

    const handleChangeFile = async (e) => {
        let file = e.target.files[0];
        if (
            file.type === "image/jpeg" ||
            file.type === "image/jpg" ||
            file.type === "image/png" ||
            file.type === "image.gif"
        ) {
            await formik.setFieldValue("avatar", file);
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                // console.log(e.target.result)
                setImgSrc(e.target.result);
            };
        }
    };

    return (
        <Container className="UserEdit">
            <div className="UserEdit_content">
                <div className="title">
                    <div className="title_content">
                        <h4 className="text-18 text-headingPrimary font-semibold leading-5 tracking-tight">
                            Edit User Information
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
                        initialValues={{
                            size: componentSize,
                        }}
                        size="middle"
                    >
                        <Form.Item label="Name">
                            <Input
                                name="name"
                                placeholder="Name"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />
                        </Form.Item>
                        <Form.Item label="Phone">
                            <Input
                                name="phone"
                                placeholder="Phone"
                                onChange={formik.handleChange}
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
                        <Form.Item label="Avatar">
                            <input
                                type="file"
                                onChange={handleChangeFile}
                                accept="image/png,image/jpeg,image/jpg,image/gif"
                            />
                            <br />
                            <img
                                style={{ width: 150, height: 150 }}
                                src={imgSrc === "" ? userInfo.avatar : imgSrc}
                                alt="..."
                            />
                        </Form.Item>
                        <Form.Item label="Gender">
                            <Select
                                name="gender"
                                value={formik.values.gender}
                                onChange={handleChangeSelect("gender")}
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
                            <Select
                                name="role"
                                value={formik.values.role}
                                onChange={handleChangeSelect("role")}
                                options={[
                                    {
                                        value: "ADMIN",
                                        label: "ADMIN",
                                    },
                                    {
                                        value: "USER",
                                        label: "USER",
                                    },
                                ]}
                            />
                        </Form.Item>
                        <Form.Item label="Submit">
                            <button
                                type="submit"
                                className="btnEditUser bg-primary text-white font-medium text-14 hover:bg-green-800 py-10 px-18 rounded"
                            >
                                Edit User
                            </button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </Container>
    );
};

export default UserEdit;

export const Container = styled.div`
  &.UserEdit {
    .UserEdit_content {
      padding: 14px;
      margin: 0;
      .form_edit {
        .ant-form-item {
          .ant-form-item-label {
          }
          .ant-form-item-control {
            .ant-form-item-control-input-content {
              input {
                color: #5e5e5e;
                &:hover {
                  border-color: #1dbf73;
                }
                &:focus {
                  border-color: #1dbf73;
                  box-shadow: none;
                }
              }
              .ant-picker {
                .ant-picker-input {
                  input {
                    color: #5e5e5e;
                  }
                }
                &:hover {
                  border-color: #1dbf73;
                }
                &:focus {
                  border-color: #1dbf73;
                  box-shadow: none;
                }
              }

              .ant-select-selector {
                color: #5e5e5e;
                &:hover {
                  border-color: #1dbf73;
                }
                &:focus {
                  border-color: #1dbf73;
                  box-shadow: none;
                }
              }
            }
          }
        }
      }
    }
  }
`;

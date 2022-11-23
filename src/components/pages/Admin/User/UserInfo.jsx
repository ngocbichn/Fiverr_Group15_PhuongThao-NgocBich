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

const UserInfo = () => {

    // const [imgSrc, setImgSrc] = useState("");

    const param = useParams();

    const { userInfo } = useUserManage();
    // console.log('userInfo', userInfo)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserInfo(param.userId));
    }, []);

    // const [componentSize, setComponentSize] = useState("default");

    // const formik = useFormik({
    //     enableReinitialize: true,
    //     initialValues: {
    //         name: userInfo?.name,
    //         phone: userInfo?.phone,
    //         birthday: userInfo?.birthday,
    //         avatar: null,
    //         gender: userInfo?.gender,
    //         role: userInfo?.role,
    //     },
    //     onSubmit: (values) => {
    //         console.log("values", values);
    //         const formData = new FormData();
    //         // formData.append('tenPhim', formik.values.tenPhim)

    //         for (let key in values) {
    //             if (key !== "avatar") {
    //                 formData.append(key, values[key]);
    //             } else {
    //                 if (values.avatar !== null) {
    //                     formData.append("File", values.avatar, values.avatar.name);
    //                 }
    //             }
    //         }
    //         dispatch(postNewUser(values))
    //     },
    // });

    // const handleChangeDatePicker = (value) => {
    //     console.log("datePickerChange", moment(value));
    //     let birthday = moment(value);
    //     formik.setFieldValue("birthday", birthday);
    // };

    // const handleChangeSelect = (name) => {
    //     return (value) => {
    //         formik.setFieldValue(name, value);
    //     };
    // };

    // const handleChangeFile = async (e) => {
    //     let file = e.target.files[0];
    //     if (
    //         file.type === "image/jpeg" ||
    //         file.type === "image/jpg" ||
    //         file.type === "image/png" ||
    //         file.type === "image.gif"
    //     ) {
    //         await formik.setFieldValue("avatar", file);
    //         let reader = new FileReader();
    //         reader.readAsDataURL(file);
    //         reader.onload = (e) => {
    //             // console.log(e.target.result)
    //             setImgSrc(e.target.result);
    //         };
    //     }
    // };

    return (
        <Container className="UserInfo">
            <div className="UserEdit_content">
                <div className="title">
                    <div className="title_content">
                        <h4 className="text-18 text-headingPrimary font-semibold leading-5 tracking-tight">
                            User Information
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
                    {/* <Form
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
                    </Form> */}
                    <div className="w-1/2 p-18 dark:bg-gray-900 dark:text-gray-100 flex justify-around items-center">
                        <div className="mb-6">
                            <img src={userInfo.avatar} alt="avatar" className="object-cover object-center w-120 h-120 rounded dark:bg-gray-500" />
                        </div>
                        <div className="flex flex-col space-y-4">
                            <div className="mb-14">
                                <h2 className="text-2xl font-semibold">Name: {userInfo.name}</h2>
                                <span className="text-sm dark:text-gray-400">Role: {userInfo.role}</span>
                            </div>
                            <div className="my-14">
                                <span className="flex items-center gap-4 mb-14">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-14 h-14">
                                        <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                                    </svg>
                                    <span className="dark:text-gray-400">{userInfo.email}</span>
                                </span>
                                <span className="flex items-center gap-4 mb-14">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Phonenumber" className="w-14 h-14">
                                        <path fill="currentColor" d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"></path>
                                    </svg>
                                    <span className="dark:text-gray-400">{userInfo.phone}</span>
                                </span>
                                <span className="flex items-center gap-4 mb-14">
                                    <span className="dark:text-gray-400">Birthday: {userInfo.birthday}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default UserInfo;

export const Container = styled.div`
  &.UserInfo {
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

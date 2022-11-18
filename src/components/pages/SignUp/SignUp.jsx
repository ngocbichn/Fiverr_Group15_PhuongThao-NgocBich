import { useFormik } from "formik";
import moment from "moment";
import React, { useEffect } from "react";
import {
    Button,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
} from "antd";
import TextArea from "antd/lib/input/TextArea";
import styled from "styled-components";
import * as Yup from 'yup'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUpAction, useAuthManage } from "../../../store/authManage";
import FormList from "antd/lib/form/FormList";

const SignUp = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()



    const { userSignUp, isFetching, isSuccess, isError, errorMessage } = useAuthManage()

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Email không đúng định dạng'),
        password: Yup.string().required('Password is required'),
        phone: Yup.string().required('Phone is required'),
    })

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            phone: "",
            birthday: "",
            avatar: null,
            gender: true,
            role: "",
            skill: [],
            certification: [],
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            console.log('values', values)
            dispatch(signUpAction(values))
            if (isSuccess) {
                alert('Register successfully!')
                navigate('/home')
            }
        },
    });

    const handleChangeDatePicker = (value) => {
        console.log("datePickerChange", moment(value).format("DD/MM/YYYY"));
        let birthday = moment(value).format("DD/MM/YYYY");
        formik.setFieldValue("birthday", birthday);
    };

    const onChangeRadio = (name) => {
        return (e) => {
            let gender = e.target.value
            formik.setFieldValue(name, gender);
        };
    };

    const handleChangeSelect = (value) => {
        formik.setFieldValue("role", value)
    }

    const handleArr = (name, value) => {
        value = JSON.stringify(value)
        formik.setFieldValue(name, value)
    }



    return (
        <Container className="SignUp bg-primary min-h-screen flex flex-col">
            <div className="container w-2/5 mx-auto px-10 bg-white rounded">
                <h1 className="my-30 text-4xl font-bold text-center sm:text-16 sm:my-12">
                    Sign up to Fiverr
                </h1>
                <Form
                    className="pl-20"
                    onSubmitCapture={formik.handleSubmit}
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    layout="horizontal"
                    size="large"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
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
                        <p className='text-red-500'>{formik.errors.email}</p>
                    </Form.Item>
                    <Form.Item label="Password">
                        <Input
                            name="password"
                            placeholder="Password"
                            onChange={formik.handleChange}
                        />
                        <p className='text-red-500'>{formik.errors.password}</p>
                    </Form.Item>
                    <Form.Item label="Phone">
                        <Input
                            name="phone"
                            placeholder="Phone"
                            onChange={formik.handleChange}
                        />
                        <p className='text-red-500'>{formik.errors.password}</p>
                    </Form.Item>
                    <Form.Item label="Birthday">
                        <DatePicker
                            format={"DD/MM/YYYY"}
                            onChange={handleChangeDatePicker}
                        />
                    </Form.Item>
                    <Form.Item label="Gender">
                        <Radio.Group onChange={onChangeRadio("gender")} label="Gender">
                            <Radio value={true} name="male">
                                Male
                            </Radio>
                            <Radio value={false} name="female">
                                Female
                            </Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="Role">
                        <Select
                            name="role"
                            defaultValue="Select Role"
                            style={{
                                width: '100%',
                            }}
                            onChange={handleChangeSelect}
                            options={[
                                {
                                    value: 'ADMIN',
                                    label: 'ADMIN',
                                },
                                {
                                    value: 'USER',
                                    label: 'USER',
                                },
                            ]}
                        />
                    </Form.Item>
                    <Form.Item label="Skill">
                        <Input
                            name="skill"
                            placeholder="Skill"
                            onChange={handleArr}
                        />
                    </Form.Item>
                    <Form.Item label="Certification">
                        <Input
                            name="certification"
                            placeholder="Certification"
                            onChange={handleArr}
                        />
                    </Form.Item>
                    <Form.Item>
                        <button
                            type="submit"
                            className="bg-primary text-white font-medium text-16 sm:text-14 hover:bg-green-800 py-12 sm:py-8 rounded btn_submit w-full"
                        >
                            Create an account
                        </button>
                    </Form.Item>
                </Form>
                <div className="text-center text-sm text-grey-dark mt-4">
                    By signing up, you agree to the
                    <a
                        className="mx-5 no-underline text-primary hover:underline hover:text-primary"
                        href="#"
                    >
                        Terms of Service
                    </a>{" "}
                    and
                    <a
                        className="mx-5 no-underline text-primary hover:underline hover:text-primary"
                        href="#"
                    >
                        Privacy Policy
                    </a>
                </div>
            </div>
        </Container >
    );
};

export default SignUp;

export const Container = styled.div`
  &.SignUp {
    padding-top: 50px;
    padding-bottom: 50px;
    .container {
      padding-bottom: 50px;
      h1 {
      }
      .ant-form {
        padding-left: 8%;
        padding-right: 8%;
        .ant-form-item {
          .ant-form-item-label {
            label {
              font-weight: 500;
            }
          }
          .ant-row {
            gap: 10px;
            .ant-col {
              max-width: 100%;
            }
          }
        }
        .ant-form-item:nth-child(10) {
          width: 100%;
        }
      }
    }
  }
`;

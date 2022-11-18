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
import { Link, useNavigate } from "react-router-dom";
import { signInAction, useAuthManage } from "../../../store/authManage";

const SignIn = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const { userSignIn, isFetching, isSuccess, isError, errorMessage } = useAuthManage()

    const validationSchema = Yup.object({
        email: Yup.string().required('Email is required'),
        password: Yup.string().required('Password is required'),
    })

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            console.log('values', values)
            dispatch(signInAction(values))
            if (isSuccess) {
                alert('Sign In successfully!')
                navigate('/home')
            }
        },
    });



    return (
        <Container className="SignIn bg-primary min-h-screen flex flex-col">
            <div className="container w-2/5 mx-auto px-10 bg-white rounded">
                <h1 className="my-30 text-4xl font-bold text-center">
                    Sign in
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
                >
                    <Form.Item label="Email">
                        <Input
                            name="email"
                            placeholder="Email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!',
                                },
                            ]}
                        />
                        <p className='text-red-500'>{formik.errors.email}</p>
                    </Form.Item>
                    <Form.Item label="Password">
                        <Input
                            name="password"
                            placeholder="Password"
                            onChange={formik.handleChange}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        />
                        <p className='text-red-500'>{formik.errors.password}</p>
                    </Form.Item>
                    <Form.Item>
                        <button
                            type="submit"
                            className="bg-primary text-white font-medium text-16 hover:bg-green-800 py-12 rounded btn_submit w-full"
                        >
                            Submit
                        </button>
                    </Form.Item>
                </Form>
                <div className="text-center text-sm text-grey-dark mt-4">
                    <p className="px-6 text-16 text-center dark:text-gray-400">Not a member yet?
                        <Link to="/signup" className="font-medium hover:underline" style={{ color: "#1dbf73" }}>Join now</Link>.
                    </p>
                </div>
            </div>
        </Container >
    )
}

export default SignIn

export const Container = styled.div`
  &.SignIn {
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
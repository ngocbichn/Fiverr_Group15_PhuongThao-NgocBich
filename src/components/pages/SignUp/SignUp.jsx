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

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().required('Email is required').email('Email is not valid'),
        password: Yup.string().required('Password is required'),
        phone: Yup.string().required('Phone is required').matches(phoneRegExp, 'Phone number is not valid'),
        birthday: Yup
            .string()
            .nullable()
            .required("Please choose your age"),
        gender: Yup.boolean().required('Gender is required'),
        role: Yup.string()
            .required('Role is required')
            .oneOf(["ADMIN", "USER"])
            .label("Role"),
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
            <div className="container mx-auto px-10 bg-white rounded">
                <h1 className="my-30 text-4xl font-bold text-center">
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
                >
                    <Form.Item label="Name">
                        <Input
                            name="name"
                            placeholder="Name"
                            onChange={formik.handleChange}
                        />
                        <p className='text-red-500'>{formik.errors.name}</p>
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
                        <p className='text-red-500'>{formik.errors.phone}</p>
                    </Form.Item>
                    <Form.Item label="Birthday">
                        <DatePicker
                            format={"DD/MM/YYYY"}
                            onChange={handleChangeDatePicker}
                        />
                        <p className='text-red-500'>{formik.errors.birthday}</p>
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
                        <p className='text-red-500'>{formik.errors.gender}</p>
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
                        <p className='text-red-500'>{formik.errors.role}</p>
                    </Form.Item>
                    <Form.Item label="Skill">
                        <Input
                            name="skill"
                            placeholder="Skill"
                            onChange={handleArr}
                        />
                        <p className='text-red-500'>{formik.errors.skill}</p>
                    </Form.Item>
                    <Form.Item label="Certification">
                        <Input
                            name="certification"
                            placeholder="Certification"
                            onChange={handleArr}
                        />
                        <p className='text-red-500'>{formik.errors.certification}</p>
                    </Form.Item>
                    <Form.Item>
                        <button
                            type="submit"
                            className="bg-primary text-white font-medium text-16 hover:bg-green-800 py-12 rounded btn_submit w-full"
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
      width: 42%;
      h1 {
      }
      .ant-form {
        padding-left: 7%;
        padding-right: 7%;
        .ant-form-item {
            margin-bottom: 0;
          .ant-form-item-label {
            label {
              font-weight: 500;
            }
          }
          .ant-form-item-control{
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

import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import {
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
} from "antd";
import moment from "moment";
import { useUserManage } from '../../../store/userManage/userManageSelector';
import { getUserInfo, putUserChanged } from '../../../store/userManage/userManageReducer';
import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';

const EditProfile = () => {
    const param = useParams();
    console.log(param.userid)

    const { userInfo } = useUserManage()
    // userInfo.skill.push('abd')
    console.log(userInfo)
    const {isUpdate} = useUserManage()
    console.log(isUpdate)
 
   

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserInfo(param.userid));
    }, []);

    const navigate = useNavigate();

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            id: userInfo.id,
            name: userInfo?.name,
            email: userInfo?.email,
            phone: userInfo?.phone,
            birthday: userInfo?.birthday,
            gender: userInfo?.gender,
            role: userInfo?.role,
            skill: userInfo?.skill,
            certification: userInfo?.certification
        },
        onSubmit: (values) => {
            console.log('values', values)
            dispatch(putUserChanged({
                userId: values.id,
                valueUpdated: values,
            }))
            .then(() => {
                if (isUpdate) {
                  navigate(-1)
                }      
              })
            
        },
    });

    const handleChangeInputNumber = (name) => {
        return (value) => {
            formik.setFieldValue(name, value);
        };
    };

    const handleChangeDatePicker = (value) => {
        // console.log('datePickerChange', moment(value))
        let birthday = moment(value);
        formik.setFieldValue("birthday", birthday);
    };

    const handleChangeSwitch = (name) => {
        return (value) => {
            formik.setFieldValue(name, value);
        };
    };
    const handleArraySkill = (skill) => {
        let userInfo1 = {...userInfo, skill: [...userInfo.skill]}
        userInfo1.skill.push(skill.target.value)
        formik.setFieldValue('skill',userInfo1.skill)
        
    };

    const handleArrayCert = (cert) => {
        let userInfo1 = Object.assign({...userInfo, certification: [...userInfo.certification]})
        userInfo1.certification.push(cert.target.value)
        formik.setFieldValue('certification',userInfo1.certification)

    }
    
    


    return (
        <Container className="EditUser">
            <Header/>
            <div className='container'>
            <div className="content">
                <div className="title mb-20">
                    <div className="title_content">
                        <h4 className="text-[24px] text-headingPrimary font-semibold leading-5 tracking-tight text-center">
                            Edit Profile
                        </h4>
                       
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
                        <Form.Item label="Name">
                            <Input
                                name="name"
                                placeholder="Name"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />
                        </Form.Item>
                        <Form.Item label="Email">
                            <Input
                                name="email"
                                placeholder="Email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                        </Form.Item>
                        <Form.Item label="Phone">
                            <InputNumber
                                placeholder=""
                                onChange={handleChangeInputNumber("phone")}
                                min={1}
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
                        <Form.Item label="Gender" valuePropName="checked">
                            <Switch
                                name="gender"
                                onChange={handleChangeSwitch("gender")}
                                checked={formik.values.gender}
                            />
                        </Form.Item>
                        <Form.Item label="Role">
                            <Input
                                name="role"
                                placeholder=""
                                onChange={formik.handleChange}
                                value={formik.values.role}
                            />
                        </Form.Item>
                        <Form.Item label="Skill">
                            <Input
                                name="skill"
                                placeholder="Add your skill"
                                onChange={handleArraySkill}
                                
                            />
                        </Form.Item>
                        <Form.Item label="Certification">
                            <Input
                                name="certification"
                                placeholder="Add your certification"
                                onChange={handleArrayCert}
                               
                            />
                        </Form.Item>

                        
                        <Form.Item label="Submit">
                            <button
                                type="submit"
                                className="btnEditWork bg-primary text-white font-medium text-14 hover:bg-green-800 py-10 px-18 rounded"
                            >
                                Edit Profile
                            </button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
            </div>
            <Footer/>
        </Container>
    )
}

export default EditProfile

export const Container = styled.div`
  &.EditUser{
        .content{
            margin: 0;
            padding: 14px;
        }
    }
    
`
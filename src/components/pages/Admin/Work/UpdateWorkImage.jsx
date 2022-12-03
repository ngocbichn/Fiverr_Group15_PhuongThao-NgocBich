import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components'
import { getWorkInfo, postWorkImage } from '../../../../store/adminWorkManage/adminWorkManageReducer';
import { useAdminWorkManage } from '../../../../store/adminWorkManage/adminWorkManageSelector';
import {
    Form,
    Input,
    InputNumber,
} from "antd";

const UpdateWorkImage = () => {

    const [imgSrc, setImgSrc] = useState("");

    const param = useParams();
    // console.log(param.movieId)
    const { workInfo } = useAdminWorkManage();
    console.log("workInfo", workInfo)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWorkInfo(param.workId));
    }, []);

    const navigate = useNavigate();

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            id: workInfo.id,
            hinhAnh: null,
        },
        onSubmit: (values) => {
            const formData = new FormData();

            formData.append("File", values.hinhAnh, values.hinhAnh.name);

            console.log('formik', formData.get('File'))
            dispatch(postWorkImage({
                workId: values.id,
                valueUpdated: formData,
            }));

            // alert("Uploaded Successfully!");
            // navigate("/admin/films");
        },
    });

    const handleChangeFile = (e) => {
        let file = e.target.files[0];
        if (
            file.type === "image/jpeg" ||
            file.type === "image/jpg" ||
            file.type === "image/png" ||
            file.type === "image.gif"
        ) {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                // console.log(e.target.result
                setImgSrc(e.target.result);
            };
            formik.setFieldValue("hinhAnh", file);

            // formik.setErrors()
        }
    };

    return (
        <Container className="UpdateWorkImage">
            <div className="content">
                <div className="title mb-30">
                    <div className="title_content">
                        <h4 className="text-18 text-headingPrimary font-semibold leading-5 tracking-tight">
                            Update Work Image
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
                                    Update Work Image
                                </Link>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="form_updateWorkImg">
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
                        <Form.Item label="Image">
                            <input
                                type="file"
                                onChange={handleChangeFile}
                                accept="image/png,image/jpeg,image/jpg,image/gif"
                            />
                            <br />
                            <img
                                style={{ width: 150, height: 150 }}
                                src={imgSrc === "" ? workInfo.hinhAnh : imgSrc}
                                alt="..."
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
        </Container>
    )
}

export default UpdateWorkImage

export const Container = styled.div`
    &.UpdateWorkImage{
        .content{
            margin: 0;
            padding: 14px;
        }
    }
`
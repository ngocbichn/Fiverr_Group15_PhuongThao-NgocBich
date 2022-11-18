import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Input } from "antd";

const User = () => {

    const { Search } = Input;

    const onSearch = (value) => {
        console.log(value);
    };
    return (
        <Container className='UserAdmin'>
            <div className='container'>
                <div className='title'>
                    <div className='title_content'>
                        <h4 className='text-18 text-headingPrimary font-semibold leading-5 tracking-tight'>User List</h4>
                        <ol className='breadcrumb flex'>
                            <li className='breadcrumb_item'>
                                <Link to="/home" className='text-textPrimary hover:text-primary'>Home</Link>
                            </li>
                            <li className='font-semibold mx-10 text-primary'>/</li>
                            <li className='breadcrumb_item'>
                                <Link to="/admin" className='text-textPrimary hover:text-primary'>Admin</Link>
                            </li>
                            <li className='font-semibold mx-10 text-primary'>/</li>
                            <li className='breadcrumb_item'>
                                <Link to="/admin/user" className='text-textPrimary hover:text-primary'>User</Link>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className='userList'>
                    <div className='user_data'>
                        <div className="input_search my-20">
                            <Search placeholder="Name" onSearch={onSearch} enterButton />
                        </div></div>
                    <div className='user_table'></div>
                </div>
            </div>
        </Container>
    )
}

export default User

export const Container = styled.div`
    &.UserAdmin{
        .container{
            padding: 12px;
            margin: 0;
            .title{
                .title_content{
                    .breadcrumb{
                        .breadcrumn_item.active{
                            color: #1dbf73;
                            font-weight: 600;
                        }
                    }
                }
            }
            .userList{
                .user_data{
                    .input_search {
                        width: 100%;
                        .ant-input-group > .ant-input:first-child,
                        .ant-input-group-addon:first-child {
                          border-color: #62646a;
                        }
                        .ant-input {
                          padding: 8px;
                        }
                        .ant-btn-primary {
                          background-color: #1dbf73;
                          color: #fff;
                          font-weight: 700;
                          font-size: 16px;
                          line-height: 10px;
                          height: 40px;
                          border-radius-top-right: 4px;
                          border: none;
                          padding: 0 20px;
                          opacity: 0.85;
                          transition: 0.4s ease;
                          &:hover {
                            opacity: 1;
                          }
                        }
                      }
                }
                .user_table{}
            }
        }
    }
`
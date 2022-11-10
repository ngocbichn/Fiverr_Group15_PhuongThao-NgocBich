import React from "react";
import styled from "styled-components";
import Footer from "../../organisms/Footer";
import HeaderHomePage from "../../organisms/HeaderHomePage";
import img from "../../../assets/images/background.png";
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';



const Home = () => {
    const { Search } = Input;
    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );
    const onSearch = (value) => console.log(value);
    return (
        <Container className="HomePage">
            <div className="container">
                <HeaderHomePage className="HeaderHomePage" />
                <div className="carousel">
                    <div className="intro">
                        <h1 className="title tracking-wide">
                            <span>
                                Find the perfect
                                <i className="mx-14">freelance</i>
                                <br />
                                services for your business
                            </span>
                        </h1>
                        <div className="search-bar mb-24">
                            <Search
                                placeholder="input search text"
                                allowClear
                                enterButton="Search"
                                onSearch={onSearch}
                            />
                        </div>
                        <div className="popular-topic flex justify-start">
                            <span className="text-white text-18 font-semibold mr-16">Popular:</span>
                            <ul className="space-x-3 md:flex mb-0 flex items-cente">
                                <li>
                                    <a>Website Design</a>
                                </li>
                                <li>
                                    <a>WordPress</a>
                                </li>
                                <li>
                                    <a>Logo Design</a>
                                </li>
                                <li>
                                    <a>Video Editing</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="trusted_brand mb-80">
                    <ul>
                        <li>
                            <a></a>
                        </li>
                    </ul>
                </div>
                <Footer className="Footer" />
            </div>
        </Container>
    );
};

export default Home;

export const Container = styled.div`
  &.HomePage {
    background-image: url(${img});
    background-repeat: no-repeat;
      background-size: 100%;
    height:900px;
     
      .container {
        max-width: 1280px;
        padding: 0 15px;
        margin: auto;
        box-sizing: border-box;

        .HeaderHomePage {
            color:#fff;
            margin-bottom: 100px;
        }
        .carousel {
            .intro{
                .title{
                    font-size:48px;
                    font-weight:700;
                    line-height: 56px;
                    color:#fff;
                }
                .search-bar{
                    .ant-input-search{
                        width: 50%;
                        border-radius: 0 4px 4px 0;

                        .ant-input-affix-wrapper{
                            padding: 12px 24px;
                            border-color: transparent;
                        }
                        .ant-input-group-addon{
                            border-radius: 0 4px 4px 0;
                            .ant-btn{
                            border-radius: 0 4px 4px 0;
                            overflow:hidden;
                            font-size:14px;
                            height: 48px;
                            font-weight:700;
                            padding-right: 20px;
                            padding-left: 20px;
                            background-color:#1dbf73;
                            border-color: transparent;
                            &:hover{
                                background-color:#008547;
                            }
                        }
                        }
                        
                    }
                }
                .popular-topic{
                    ul{
                        li{
                            a{
                                background-color: transparent;
                                line-height: 24px;
                                font-weight: 600;
                                color: #fff;
                                padding: 6px 14px;
                                border: 1px solid #fff;
                                border-radius: 40px;
                            }
                        }
                    }
                }
            }
        }
        .Footer {
        }
      }
    
  }
`;

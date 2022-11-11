import React from "react";
import styled from "styled-components";
import Footer from "../../organisms/Footer";
import HeaderHomePage from "../../organisms/HeaderHomePage";
import backgroundImg from "../../../assets/images/background.png";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import Feature from "../../organisms/Feature";
import Stats from "../../organisms/Stats";
import Proposition from "../../organisms/Proposition";

const Home = () => {
  const { Search } = Input;
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );
  const onSearch = (value) => console.log(value);
  return (
    <Container className="HomePage">
      <HeaderHomePage className="HeaderHomePage" />
      <div className="carousel">
        <div className="container">
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
                placeholder="Try 'buidling mobile app'"
                allowClear
                enterButton="Search"
                onSearch={onSearch}
              />
            </div>
            <div className="popular-topic flex justify-start">
              <span className="text-white text-18 font-semibold mr-16">
                Popular:
              </span>
              <ul className="md:flex mb-0 flex items-center">
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
      </div>
      <Stats />
      <Feature />
      <Proposition />
    </Container >
  );
};

export default Home;

export const Container = styled.div`
  &.HomePage {
    .container{
        max-width: 1280px;
        padding: 0px 15px;
        margin: auto;
        box-sizing: border-box; 
    }


    .HeaderHomePage {
      color: #fff;
      width: 100%;
      position: absolute;
      top: 0;
      left: 50%;
      z-index: 100;
      transform: translateX(-50%);
    }
    .carousel {
      position: relative;

      background-image: url(${backgroundImg});
      background-repeat: no-repeat;
      background-size: 100%;
      height: 640px;

      .container { 
        /* max-width: 1280px;
        margin: auto;
        box-sizing: border-box;  */
        padding: 200px 15px;
        height: 100%;

        .intro {
          .title {
            font-size: 48px;
            font-weight: 700;
            line-height: 56px;
            color: #fff;
          }
          .search-bar {
            .ant-input-search {
              width: 53%;
              border-radius: 0 4px 4px 0;

              .ant-input-affix-wrapper {
                padding: 12px 24px;
                border-color: transparent;
              }
              .ant-input-group-addon {
                border-radius: 0 4px 4px 0;
                .ant-btn {
                  border-radius: 0 4px 4px 0;
                  overflow: hidden;
                  font-size: 14px;
                  height: 48px;
                  font-weight: 700;
                  padding-right: 20px;
                  padding-left: 20px;
                  background-color: #1dbf73;
                  border-color: transparent;
                  &:hover {
                    background-color: #008547;
                  }
                }
              }
            }
          }
          .popular-topic {
            ul {
              li {
                padding-right:10px;
                a {
                  background-color: transparent;
                  line-height: 24px;
                  font-weight: 600;
                  color: #fff;
                  padding: 4px 12px;
                  border: 1px solid #fff;
                  border-radius: 40px;
                  transition: all ease 0.5s;
                  &:hover{
                    color: #000;
                    background-color: #fff;
                  }
                }
              }
            }
          }
        }
      }
    }
    
  }
`;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DownOutlined, StarOutlined } from "@ant-design/icons";
import { Button, Dropdown, message, Space } from "antd";
import pages from "../../../../assets/images/illustration/pages.png";
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic, Timeline } from 'antd';

const Dashboard = () => {
    const handleMenuClick = (e) => {
        message.info("Click on menu item.");
        console.log("click", e);
    };
    const items = [
        {
            label: "Today",
            key: "1",
        },
        {
            label: "Yesterday",
            key: "2",
        },
        {
            label: "This Week",
            key: "3",
        },
        {
            label: "Last Week",
            key: "4",
        },
        {
            label: "Last Month",
            key: "5",
        },
    ];
    const menuProps = {
        items,
        onClick: handleMenuClick,
    };

    return (
        <Container className="Dashboard">
            <div className="dashboard_content">
                <div className="title">
                    <div className="title_content">
                        <h4 className="text-18 text-headingPrimary font-semibold leading-5 tracking-tight">
                            Overview
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
                                    to="/admin/dashboard"
                                    className="text-textPrimary hover:text-primary"
                                >
                                    Dashboard
                                </Link>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="dashboard_overview my-20">
                    <div className="grid grid-cols-4 gap-12">
                        <div className="col">
                            <div className="card py-14 px-16">
                                <div className="row flex justify-between gap-20">
                                    <div className="text">
                                        <Link
                                            to="/admin/user"
                                            className="font-medium text-15 mb-20"
                                            style={{ color: "#1d2c48" }}
                                        >
                                            Total Users
                                        </Link>
                                        <h3 className="font-bold text-20 my-10">10000</h3>
                                        <p className="mb-0">
                                            <span className="badge font-medium text-12 p-4 mb-0">
                                                Active
                                            </span>
                                        </p>
                                    </div>
                                    <div className="illustration flex items-center">
                                        <div
                                            className="icon w-52 h-52 flex justify-center items-center rounded-[50%]"
                                            style={{ backgroundColor: "#fbfbfb" }}
                                        >
                                            <i
                                                className="fa-solid fa-users-rectangle text-24"
                                                style={{ color: "#a4abc5" }}
                                            ></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card py-14 px-16">
                                <div className="row flex justify-between gap-20">
                                    <div className="text">
                                        <p
                                            className="font-medium text-15 mb-10"
                                            style={{ color: "#1d2c48" }}
                                        >
                                            New Users
                                        </p>
                                        <h3 className="font-bold text-20 mb-10">200</h3>
                                        <p className="mb-0" style={{ color: "#a4abc5 " }}>
                                            <span className="badge font-medium text-12 p-4 mb-0 mr-4">
                                                <i className="fa-solid fa-arrow-trend-up mr-4"></i>7.5%
                                            </span>
                                            Weekly Average
                                        </p>
                                    </div>
                                    <div className="illustration flex items-center">
                                        <div
                                            className="icon w-52 h-52 flex justify-center items-center rounded-[50%]"
                                            style={{ backgroundColor: "#fbfbfb" }}
                                        >
                                            <i
                                                className="fa-regular fa-square-plus text-24"
                                                style={{ color: "#a4abc5" }}
                                            ></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card py-14 px-16">
                                <div className="row flex justify-between gap-20">
                                    <div className="text">
                                        <p
                                            className="font-medium text-15 mb-10"
                                            style={{ color: "#1d2c48" }}
                                        >
                                            Work Category
                                        </p>
                                        <h3 className="font-bold text-20 mb-10">200</h3>
                                        <p className="mb-0">
                                            <span className="badge font-medium text-12 py-4 px-6 mb-0">
                                                Active
                                            </span>
                                        </p>
                                    </div>
                                    <div className="illustration flex items-center">
                                        <div
                                            className="icon w-52 h-52 flex justify-center items-center rounded-[50%]"
                                            style={{ backgroundColor: "#fbfbfb" }}
                                        >
                                            <i
                                                className="fa-solid fa-layer-group text-24"
                                                style={{ color: "#a4abc5" }}
                                            ></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card py-14 px-16">
                                <div className="row flex justify-between gap-20">
                                    <div className="text">
                                        <p
                                            className="font-medium text-15 mb-10"
                                            style={{ color: "#1d2c48" }}
                                        >
                                            Work Order Completion
                                        </p>
                                        <h3 className="font-bold text-20 mb-10">150</h3>
                                        <p className="mb-0" style={{ color: "#a4abc5 " }}>
                                            <span className="badge font-medium text-12 p-4 mb-0 mr-4">
                                                <i className="fa-solid fa-arrow-trend-up mr-4"></i>3.7%
                                            </span>
                                            Daily Completions
                                        </p>
                                    </div>
                                    <div className="illustration flex items-center">
                                        <div
                                            className="icon w-52 h-52 flex justify-center items-center rounded-[50%]"
                                            style={{ backgroundColor: "#fbfbfb" }}
                                        >
                                            <i
                                                className="fa-solid fa-briefcase text-24"
                                                style={{ color: "#a4abc5" }}
                                            ></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dashboard_analytics grid grid-cols-3 gap-12">
                    <div className="col">
                        <div className="card pageViewed rounded">
                            <div className="cardHeader py-14 px-16">
                                <div className="row flex justify-between gap-20">
                                    <div className="text flex items-center">
                                        <h4
                                            className="font-semibold text-15 mb-0"
                                            style={{ color: "#2c3652" }}
                                        >
                                            Categories Viewed By Users
                                        </h4>
                                    </div>
                                    <div className="trigger">
                                        <Dropdown menu={menuProps}>
                                            <Button>
                                                <Space>
                                                    Today
                                                    <DownOutlined />
                                                </Space>
                                            </Button>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                            <div className="cardBody py-14 px-16">
                                <ul className="flex flex-col">
                                    <li className="flex justify-between items-center">
                                        <div className="pageName flex items-center">
                                            <img className="h-30 mr-6" src={`${pages}`} alt="pages" />
                                            <h6
                                                className="text-12 font-semibold mb-0"
                                                style={{ color: "#303e67" }}
                                            >
                                                Graphics & Design
                                            </h6>
                                        </div>
                                        <div className="statistics">
                                            <Link
                                                to="/categories"
                                                className="external_link py-5 px-8 text-12 rounded"
                                            >
                                                2.6k
                                                <i className="fa-solid fa-arrow-up-right-from-square text-15 ml-4"></i>
                                            </Link>
                                        </div>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <div className="pageName flex items-center">
                                            <img className="h-30 mr-6" src={`${pages}`} alt="pages" />
                                            <h6
                                                className="text-12 font-semibold mb-0"
                                                style={{ color: "#303e67" }}
                                            >
                                                Digital Marketing
                                            </h6>
                                        </div>
                                        <div className="statistics">
                                            <Link
                                                to="/categories"
                                                className="external_link py-5 px-8 text-12 rounded"
                                            >
                                                2.6k
                                                <i className="fa-solid fa-arrow-up-right-from-square text-15 ml-4"></i>
                                            </Link>
                                        </div>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <div className="pageName flex items-center">
                                            <img className="h-30 mr-6" src={`${pages}`} alt="pages" />
                                            <h6
                                                className="text-12 font-semibold mb-0"
                                                style={{ color: "#303e67" }}
                                            >
                                                Writing & Translation
                                            </h6>
                                        </div>
                                        <div className="statistics">
                                            <Link
                                                to="/categories"
                                                className="external_link py-5 px-8 text-12 rounded"
                                            >
                                                2.6k
                                                <i className="fa-solid fa-arrow-up-right-from-square text-15 ml-4"></i>
                                            </Link>
                                        </div>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <div className="pageName flex items-center">
                                            <img className="h-30 mr-6" src={`${pages}`} alt="pages" />
                                            <h6
                                                className="text-12 font-semibold mb-0"
                                                style={{ color: "#303e67" }}
                                            >
                                                Video & Animation
                                            </h6>
                                        </div>
                                        <div className="statistics">
                                            <Link
                                                to="/categories"
                                                className="external_link py-5 px-8 text-12 rounded"
                                            >
                                                2.6k
                                                <i className="fa-solid fa-arrow-up-right-from-square text-15 ml-4"></i>
                                            </Link>
                                        </div>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <div className="pageName flex items-center">
                                            <img className="h-30 mr-6" src={`${pages}`} alt="pages" />
                                            <h6
                                                className="text-12 font-semibold mb-0"
                                                style={{ color: "#303e67" }}
                                            >
                                                Music & Audio
                                            </h6>
                                        </div>
                                        <div className="statistics">
                                            <Link
                                                to="/categories"
                                                className="external_link py-5 px-8 text-12 rounded"
                                            >
                                                2.6k
                                                <i className="fa-solid fa-arrow-up-right-from-square text-15 ml-4"></i>
                                            </Link>
                                        </div>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <div className="pageName flex items-center">
                                            <img className="h-30 mr-6" src={`${pages}`} alt="pages" />
                                            <h6
                                                className="text-12 font-semibold mb-0"
                                                style={{ color: "#303e67" }}
                                            >
                                                Programming & Tech
                                            </h6>
                                        </div>
                                        <div className="statistics">
                                            <Link
                                                to="/categories"
                                                className="external_link py-5 px-8 text-12 rounded"
                                            >
                                                2.6k
                                                <i className="fa-solid fa-arrow-up-right-from-square text-15 ml-4"></i>
                                            </Link>
                                        </div>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <div className="pageName flex items-center">
                                            <img className="h-30 mr-6" src={`${pages}`} alt="pages" />
                                            <h6
                                                className="text-12 font-semibold mb-0"
                                                style={{ color: "#303e67" }}
                                            >
                                                Business
                                            </h6>
                                        </div>
                                        <div className="statistics">
                                            <Link
                                                to="/categories"
                                                className="external_link py-5 px-8 text-12 rounded"
                                            >
                                                2.6k
                                                <i className="fa-solid fa-arrow-up-right-from-square text-15 ml-4"></i>
                                            </Link>
                                        </div>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <div className="pageName flex items-center">
                                            <img className="h-30 mr-6" src={`${pages}`} alt="pages" />
                                            <h6
                                                className="text-12 font-semibold mb-0"
                                                style={{ color: "#303e67" }}
                                            >
                                                Lifestyle
                                            </h6>
                                        </div>
                                        <div className="statistics">
                                            <Link
                                                to="/categories"
                                                className="external_link py-5 px-8 text-12 rounded"
                                            >
                                                2.6k
                                                <i className="fa-solid fa-arrow-up-right-from-square text-15 ml-4"></i>
                                            </Link>
                                        </div>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <div className="pageName flex items-center">
                                            <img className="h-30 mr-6" src={`${pages}`} alt="pages" />
                                            <h6
                                                className="text-12 font-semibold mb-0"
                                                style={{ color: "#303e67" }}
                                            >
                                                Data
                                            </h6>
                                        </div>
                                        <div className="statistics">
                                            <Link
                                                to="/categories"
                                                className="external_link py-5 px-8 text-12 rounded"
                                            >
                                                2.6k
                                                <i className="fa-solid fa-arrow-up-right-from-square text-15 ml-4"></i>
                                            </Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card audience_reached_channels mb-10">
                            <div className="cardHeader py-14 px-16 flex items-center">
                                <div className="row flex justify-start">
                                    <div className="text flex items-center">
                                        <h4
                                            className="font-semibold text-15 mb-0"
                                            style={{ color: "#2c3652" }}
                                        >
                                            Audiences reached from Channels
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="cardBody py-14 px-16">
                                <div className="data">
                                    <table className="table-auto w-full">
                                        <thead>
                                            <tr>
                                                <th className="text-left py-12 px-8 text-13">
                                                    Channel
                                                </th>
                                                <th className="text-left py-12 px-8 text-13">Day</th>
                                                <th className="text-left py-12 px-8 text-13">Week</th>
                                                <th className="text-left py-12 px-8 text-13">Month</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Website</td>
                                                <td>150</td>
                                                <td>890</td>
                                                <td>4000</td>
                                            </tr>
                                            <tr>
                                                <td>Facebook</td>
                                                <td>150</td>
                                                <td>890</td>
                                                <td>4000</td>
                                            </tr>
                                            <tr>
                                                <td>Instagram</td>
                                                <td>150</td>
                                                <td>890</td>
                                                <td>4000</td>
                                            </tr>
                                            <tr>
                                                <td>Twitter</td>
                                                <td>150</td>
                                                <td>890</td>
                                                <td>4000</td>
                                            </tr>
                                            <tr>
                                                <td>LinkedIn</td>
                                                <td>150</td>
                                                <td>890</td>
                                                <td>4000</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="card projects_done">
                            <div className="cardHeader py-14 px-16 flex items-center">
                                <div className="row flex justify-start">
                                    <div className="text flex items-center">
                                        <h4
                                            className="font-semibold text-15 mb-0"
                                            style={{ color: "#2c3652" }}
                                        >
                                            Projects done this week
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="cardBody py-14 px-16">
                                <div className="site-statistic-demo-card">
                                    <Row gutter={16}>
                                        <Col span={12}>
                                            <Card>
                                                <Statistic
                                                    title="Increase"
                                                    value={11.28}
                                                    precision={2}
                                                    valueStyle={{
                                                        color: '#3f8600',
                                                    }}
                                                    prefix={<ArrowUpOutlined />}
                                                    suffix="%"
                                                />
                                            </Card>
                                        </Col>
                                        <Col span={12}>
                                            <Card>
                                                <Statistic
                                                    title="Decrease"
                                                    value={9.3}
                                                    precision={2}
                                                    valueStyle={{
                                                        color: '#cf1322',
                                                    }}
                                                    prefix={<ArrowDownOutlined />}
                                                    suffix="%"
                                                />
                                            </Card>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card activity">
                            <div className="cardHeader py-14 px-16 flex items-center">
                                <div className="row flex justify-start">
                                    <div className="text flex items-center">
                                        <h4
                                            className="font-semibold text-15 mb-0"
                                            style={{ color: "#2c3652" }}
                                        >
                                            Activity
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="card_Body py-14 px-16">
                                <Timeline>
                                    <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                                    <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                                    <Timeline.Item color="red">
                                        <p>Solve initial network problems 1</p>
                                        <p>Solve initial network problems 2</p>
                                        <p>Solve initial network problems 3 2015-09-01</p>
                                    </Timeline.Item>
                                    <Timeline.Item>
                                        <p>Technical testing 1</p>
                                        <p>Technical testing 2</p>
                                        <p>Technical testing 3 2015-09-01</p>
                                    </Timeline.Item>
                                    <Timeline.Item color="gray">
                                        <p>Technical testing 1</p>
                                        <p>Technical testing 2</p>
                                        <p>Technical testing 3 2015-09-01</p>
                                    </Timeline.Item>
                                    <Timeline.Item color="gray">
                                        <p>Technical testing 1</p>
                                        <p>Technical testing 2</p>
                                        <p>Technical testing 3 2015-09-01</p>
                                    </Timeline.Item>
                                    <Timeline.Item color="#00CCFF" dot={<StarOutlined />}>
                                        <p>Custom color testing</p>
                                    </Timeline.Item>
                                </Timeline>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Dashboard;

export const Container = styled.div`
  &.Dashboard {
    .dashboard_content {
      padding: 14px;
      margin: 0;
      .title {
        .title_content {
          .breadcrumb {
            .breadcrumn_item.active {
              color: #1dbf73;
              font-weight: 600;
            }
          }
        }
      }
      .dashboard_overview {

        .card{
            background-color: #fff;
    border: 1px solid #e3ebf6;
        }



        .badge {
          background-color: rgba(3, 216, 127, 0.15);
          color: #03d87f;
          box-shadow: 0px 0px 13px 0px rgb(3 216 127 / 5%);
        }
      }

      .dashboard_analytics{

        .audience_reached_channels{
            .cardBody{
                table{
                    thead{
                        background-color: #fbfbfb;
                    }
                    tbody{
                        tr{
                            td{
                                padding: 10px 8px;
                                font-size: 12px;
                            }
                        }

                    }
                }
            }
        }

        .cardHeader{
            border-bottom: 1px solid #e3ebf6;
            height: 60px;
           }

        .card{
            margin-bottom: 16px;
    background-color: #fff;
    border: 1px solid #e3ebf6;


           
           .cardBody{
            li{
                    border-bottom: 1px solid #e3ebf6;
                    padding: 12px 10px;
                }
            .statistics{
                
                .external_link{
                    background-color: rgba(3, 216, 127, 0.15);
                    color: #03d87f;
                    box-shadow: 0px 0px 13px 0px rgb(3 216 127 / 5%);
                    &:hover{
                        background-color: #03d87f;
                    color: #fff;
                    }
                }
            }
           }
        }
        
        .trigger{
            .ant-dropdown-trigger{
                border-color: #1dbf73,
                border-radius: 10%;
                .ant-space{
                   font-size: 12px;
    }
            }
            .ant-btn:hover, .ant-btn:focus {
                color: #1dbf73;
                border-color: #1dbf73;
                background: #fff;
        }
      }
    }
  }
`;

import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const WorkList = () => {
    return (
        <Container className='AdminWorkList'>
            <div className="container">
                <div className="title">
                    <div className="title_content">
                        <h4 className="text-18 text-headingPrimary font-semibold leading-5 tracking-tight">
                            Work List
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
                        </ol>
                    </div>
                </div>
                <div className="admin_workList">
                </div>
            </div>
        </Container>
    )
}

export default WorkList

export const Container = styled.div`
    &.AdminWorkList{
        .container {
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
    }
    }
`
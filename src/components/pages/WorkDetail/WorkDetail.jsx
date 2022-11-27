import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import styled from 'styled-components'
import { getCongViecChiTiet, getCVtheochitietloai, getMenuLoaiCV } from '../../../store/workManage/workManageReducer';
import { useWorkManage } from '../../../store/workManage/workManageSelector';
import Header from '../../organisms/Header';
import { ClockCircleOutlined, CheckOutlined, ArrowRightOutlined, RightOutlined, DownOutlined, SearchOutlined, LikeOutlined, DislikeOutlined } from '@ant-design/icons';
import Footer from '../../organisms/Footer';
import { Tabs } from 'antd';

const WorkDetail = () => {
    const dispatch = useDispatch()
    useEffect(() => { dispatch(getMenuLoaiCV()) }, [])
    const param = useParams()

    console.log(param.maCongViec)

    useEffect(() => {
        dispatch(getCongViecChiTiet(param.maCongViec))
    }, [])

    const getCV = (Chitietid) => {
        dispatch(getCVtheochitietloai(Chitietid))

    }

    const { menuLoaiCV, DScongviectheoChiTietLoai, DScongviectheoTen, ChiTietCongViec } = useWorkManage()

    console.log('ChiTietCongViec', ChiTietCongViec)
    return (
        <Container className='WorkDetail'>
            <Header />
            <div className='categoryMenu'>
                <div className='container'>
                    <ul className='navMenu'>
                        {menuLoaiCV?.map((menuCV, index) => {
                            return (
                                <div className='navCate' key={index}>
                                    <li className='category'> <NavLink to={`/categories/${menuCV.id}`}>{menuCV.tenLoaiCongViec}</NavLink>  </li>
                                    <div className='subMenu'>
                                        <div className='grid  grid-cols-3 gap-[20px]' >
                                            {menuCV.dsNhomChiTietLoai?.map((item) => {
                                                return (


                                                    <div className='groupJobCate' key={item.id}>
                                                        <ul className='listJobCate'>
                                                            <h3>{item.tenNhom}</h3>
                                                            {item.dsChiTietLoai.map((ChiTietLoai) => {
                                                                return (
                                                                    <li key={ChiTietLoai.id}> <a onClick={() => getCV(ChiTietLoai.id)}
                                                                    >{ChiTietLoai.tenChiTiet}</a> </li>)
                                                            }
                                                            )}

                                                        </ul>
                                                    </div>)
                                            })}
                                        </div>
                                    </div>


                                </div>
                            )

                        })}
                    </ul>
                </div>

            </div>
            <div className='container'>
                <div className='content'>
                    <div className='contentLeft'>
                        {ChiTietCongViec?.map((CVChiTiet) => {
                            return (
                                <div className='details' key={CVChiTiet.id}>
                                    <div className='title'>
                                        <a href="">{CVChiTiet.tenLoaiCongViec}</a> <RightOutlined className='rightarrow' />
                                        <a href="">{CVChiTiet.tenNhomChiTietLoai}</a> <RightOutlined className='rightarrow' />
                                        <a href="">{CVChiTiet.tenChiTietLoai}</a> <RightOutlined className='rightarrow' />

                                    </div>
                                    <div className='detailsColumn'>
                                        <div className='workInfo'>
                                            <h3>{CVChiTiet.congViec.tenCongViec}</h3>
                                            <div className='sellerDetail'>
                                                <span className='sellerImg' >
                                                    <img style={{ borderRadius: '50%', width: '24px', height: '24px' }} src={CVChiTiet.avatar} alt="" />
                                                </span>
                                                <span>{CVChiTiet.tenNguoiTao}</span>
                                                <div className='sellerRate'>
                                                    <span className='Rating'>
                                                        <svg className='mr-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15">
                                                            <path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                                                        </svg>
                                                        <svg className='mr-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15">
                                                            <path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                                                        </svg>
                                                        <svg className='mr-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15">
                                                            <path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                                                        </svg>
                                                        <svg className='mr-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15">
                                                            <path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                                                        </svg>
                                                        <svg className='mr-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15">
                                                            <path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                                                        </svg>

                                                    </span>
                                                    <span className='rate'> {CVChiTiet.congViec.saoCongViec} </span>
                                                    <span>({CVChiTiet.congViec.danhGia})</span>
                                                    <span className='Orders'>  18 Orders in Queue</span>
                                                </div>
                                            </div>
                                            <div className='workOffer'>
                                                <img src={CVChiTiet.congViec.hinhAnh} alt="" />
                                            </div>
                                        </div>

                                        <div className='workDesc'>
                                            <h3>About This Gig</h3>
                                            <p> {CVChiTiet.congViec.moTa}
                                            </p>
                                        </div>
                                        <div className='userInfo'>
                                            <h4>About The Seller </h4>
                                            <div className='sellerDetail'>
                                                <span className='sellerImg' >
                                                    <img style={{ borderRadius: '50%', width: '100px', height: '100px' }} src={CVChiTiet.avatar} alt="" />
                                                </span>
                                                <div className='sellerIntro'>
                                                    <h5>{CVChiTiet.tenNguoiTao}</h5>
                                                    <p>Hello! My name is Tommy and I'm a Digital Strategist!</p>
                                                    <div className='sellerRate'>
                                                        <span className='Rating flex'>
                                                            <svg className='mr-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15">
                                                                <path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                                                            </svg>
                                                            <svg className='mr-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15">
                                                                <path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                                                            </svg>
                                                            <svg className='mr-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15">
                                                                <path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                                                            </svg>
                                                            <svg className='mr-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15">
                                                                <path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                                                            </svg>
                                                            <svg className='mr-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15">
                                                                <path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                                                            </svg>

                                                        </span>
                                                        <span className='rate'> {CVChiTiet.congViec.saoCongViec} </span>
                                                        <span>({CVChiTiet.congViec.danhGia})</span>
                                                    </div>
                                                    <button className='contactMe'>Contact Me</button>
                                                </div>
                                            </div>



                                        </div>

                                    </div>
                                </div>

                            )
                        })}

                        <div className='FAQ'>
                            <h3>FAQ</h3>
                            <div className='question'>
                                <p>Do you provide regular updates on order?</p>
                                <DownOutlined />
                            </div>
                            <div className='question'>
                                <p>How do you guarantee product quality and reliability?</p>
                                <DownOutlined />
                            </div>
                            <div className='question'>
                                <p>Do you give post-development support?</p>
                                <DownOutlined />
                            </div>
                            <div className='question'>
                                <p>Do you convert PSD to HTML?</p>
                                <DownOutlined />
                            </div>
                        </div>

                        {/* Review */}

                        <div className='review'>
                            <table className='reviewHeader'>
                                <thead>
                                    <th className='reviewScore'>
                                        <span>355 Reviews</span>
                                        <span className='Rating'>
                                            <svg className='mr-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15">
                                                <path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                                            </svg>
                                            <svg className='mr-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15">
                                                <path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                                            </svg>
                                            <svg className='mr-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15">
                                                <path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                                            </svg>
                                            <svg className='mr-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15">
                                                <path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                                            </svg>
                                            <svg className='mr-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15">
                                                <path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                                            </svg>

                                        </span>
                                        <span className='rate'>5</span>
                                    </th>
                                    <th>Sort by Most Relevent <span><DownOutlined /></span> </th>

                                </thead>

                            </table>

                            <div className='grid-wrap grid grid-cols-2'>
                                <div className='reviewBar'>
                                    <table style={{ width: '100%' }}>
                                        <tbody >
                                            <tr>
                                                <td style={{ color: '#446ee7', fontSize: '16px', fontWeight: '600' }}>5 stars</td>
                                                <td style={{ width: '60%', padding: '16px 0' }}>
                                                    <div className='progressBar'>
                                                        <div>
                                                            <span className='progressShape' style={{ width: '95%' }}></span>
                                                        </div>

                                                    </div>
                                                </td>
                                                <td style={{ color: '#446ee7', fontSize: '16px', fontWeight: '400' }}> (4259)</td>
                                            </tr>
                                            <tr>
                                                <td style={{ color: '#446ee7', fontSize: '16px', fontWeight: '600' }}>4 stars</td>
                                                <td style={{ width: '60%', padding: '16px 0' }}>
                                                    <div className='progressBar'>
                                                        <div>
                                                            <span className='progressShape' style={{ width: '80%' }}></span>
                                                        </div>

                                                    </div>
                                                </td>
                                                <td style={{ color: '#446ee7', fontSize: '16px', fontWeight: '400' }}> (68)</td>
                                            </tr>
                                            <tr>
                                                <td style={{ color: '#446ee7', fontSize: '16px', fontWeight: '600' }}>3 stars</td>
                                                <td style={{ width: '60%', padding: '16px 0' }}>
                                                    <div className='progressBar'>
                                                        <div>
                                                            <span className='progressShape' style={{ width: '40%' }}></span>
                                                        </div>

                                                    </div>
                                                </td>
                                                <td style={{ color: '#446ee7', fontSize: '16px', fontWeight: '400' }}> (9)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className='ratingBreakdown'>
                                    <h3>Rating Breakdown</h3>
                                    <ul>
                                        <li>Seller communication level
                                            <span>
                                                <svg className='mr-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15">
                                                    <path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                                                </svg> 5
                                            </span>
                                        </li>
                                        <li>Recommend to a friend <span>
                                            <svg className='mr-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15">
                                                <path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                                            </svg> 5
                                        </span></li>
                                        <li>Service as described <span>
                                            <svg className='mr-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15">
                                                <path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                                            </svg>  5
                                        </span></li>
                                    </ul>
                                </div>

                            </div>

                            <div className='filter'>
                                <h5>Filter</h5>
                                <div className='search'>
                                    <input type="text" placeholder='Search Reviews' />
                                    <SearchOutlined className="iconSearch text-base" />
                                </div>

                            </div>
                        </div>
                        <div className='CommentSection'>
                            <div className='comment-Wrap'>
                                <ul className='commentList'>
                                    <span className='comment'>
                                        <li>
                                            <div className='commentHeader'>
                                                <div className='reviewerDetail'>
                                                    <span className='reviewerImg' >
                                                        <img style={{ borderRadius: '50%', width: '60px', height: '60px' }} src='https://dummyimage.com/60x60' alt="" />
                                                    </span>

                                                    <div className='reviewerInfo'>
                                                        <div className='reviewersubInfo'>
                                                            <span style={{ color: '#404145', fontSize: '16px', fontWeight: '700', marginRight: '10px' }}>admin</span>
                                                            <span aria-hidden="true" style={{ width: 15, height: 15, marginRight: '10px' }}>
                                                                <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.25 3C0.25 2.0335 1.0335 1.25 2 1.25H14C14.9665 1.25 15.75 2.0335 15.75 3V11.5C15.75 12.4665 14.9665 13.25 14 13.25H8.77744L5.48809 16.0694C5.26571 16.2601 4.95271 16.3038 4.68661 16.1814C4.42051 16.059 4.25 15.7929 4.25 15.5V13.25H2C1.0335 13.25 0.25 12.4665 0.25 11.5V3ZM2 2.75C1.86193 2.75 1.75 2.86193 1.75 3V11.5C1.75 11.6381 1.86193 11.75 2 11.75H5C5.41421 11.75 5.75 12.0858 5.75 12.5V13.8693L8.01191 11.9306C8.14784 11.814 8.32097 11.75 8.5 11.75H14C14.1381 11.75 14.25 11.6381 14.25 11.5V3C14.25 2.86193 14.1381 2.75 14 2.75H2Z" fill="#74767E" /><path fillRule="evenodd" clipRule="evenodd" d="M11.5 6.21267C11.5 6.29206 11.4453 6.36704 11.3906 6.42439L9.86358 7.98582L10.2254 10.1912C10.2296 10.2221 10.2296 10.2486 10.2296 10.2795C10.2296 10.3941 10.1791 10.5 10.0571 10.5C9.9982 10.5 9.9393 10.4779 9.88882 10.4471L8 9.40611L6.11118 10.4471C6.05649 10.4779 6.0018 10.5 5.94291 10.5C5.82091 10.5 5.76623 10.3941 5.76623 10.2795C5.76623 10.2486 5.77043 10.2221 5.77464 10.1912L6.13642 7.98582L4.60517 6.42439C4.55469 6.36704 4.5 6.29206 4.5 6.21267C4.5 6.08034 4.63041 6.02741 4.73558 6.00977L6.84736 5.68778L7.79387 3.68084C7.83173 3.59704 7.90325 3.5 8 3.5C8.09675 3.5 8.16827 3.59704 8.20613 3.68084L9.15264 5.68778L11.2644 6.00977C11.3654 6.02741 11.5 6.08034 11.5 6.21267Z" fill="#74767E" /></svg>
                                                            </span>
                                                            <span>2 reviews</span>

                                                        </div>
                                                        <div className='country mt-[12px]'>
                                                            <img style={{ width: '20px', height: '20px', marginRight: '10px' }} src="https://dummyimage.com/20x20" alt="" />
                                                            <span>Australia</span>
                                                        </div>
                                                    </div>



                                                </div>

                                            </div>
                                            <div className='commentDetail'>
                                                <div className='Rating'>
                                                    <div className='reviewerRate'>
                                                        <span className='RatingStar'>
                                                            <svg className='mr-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15">
                                                                <path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                                                            </svg>
                                                            <svg className='mr-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15">
                                                                <path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                                                            </svg>
                                                            <svg className='mr-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15">
                                                                <path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                                                            </svg>
                                                            <svg className='mr-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15">
                                                                <path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                                                            </svg>
                                                            <svg className='mr-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15">
                                                                <path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                                                            </svg>

                                                        </span>
                                                        <span className='rate' style={{ fontWeight: '700', color: '#ffbe5b' }}> 5 </span>
                                                        <span style={{ marginLeft: '8px' }}> | 3 weeks ago</span>

                                                    </div>

                                                </div>
                                                <div className='reviewDes' style={{ color: '#404145', fontSize: '14px', fontWeight: '500', margin: '12px 0' }}>
                                                    Wow, I was blown away by Tommy's work, so much information and good recommendations were provided. He also clearly explained the reason behind his recommendations so it was super easy for me to understand. The delivery was
                                                </div>
                                                <div className='reviewFooter'>
                                                    <div> Helpful ?</div>
                                                    <div className='thumb'>
                                                        <button>
                                                            <LikeOutlined /> Yes
                                                        </button>
                                                        <button><DislikeOutlined /> No</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </span>
                                </ul>
                            </div>
                            <div className='addComment'>
                                <div className='commentInput'>
                                <span> <img style={{ borderRadius: '50%', width: '60px', height: '60px' }} src='https://dummyimage.com/60x60' alt="" /></span>
                                <input type="text" placeholder='Comment' className='writeComment' />
                                </div>
                               
                                <div> <button className='addComBtn'>
                                Add your comment</button> </div>
                            </div>
                        </div>
                    </div>



                    <div className='priceOffer'>

                        {ChiTietCongViec?.map((CVChiTiet) => {
                            return (
                                <Tabs defaultActiveKey="1" className='Tabs center'>
                                    <Tabs.TabPane tab="Basic" key="1">
                                        <div className='packageTitle'>
                                            <h3>#40 + organic growth strategy</h3>
                                            <span>$50</span>
                                        </div>
                                        <div className='packageDetail'>
                                            <p>{CVChiTiet.congViec.moTaNgan}</p>
                                            <div className='delivery'>
                                                <h5><ClockCircleOutlined className='clock' /> 3 days delivery</h5>
                                                <p> <CheckOutlined className='check' /> Page/channel evaluation</p>
                                                <p> <CheckOutlined className='check' /> Action plan</p>
                                            </div>
                                        </div>
                                        <div className='button'>
                                            <button className='buyButton'> Continue (${CVChiTiet.congViec.giaTien}) <ArrowRightOutlined /></button>
                                            <p>Compare Packages</p>
                                        </div>
                                        <div>
                                        </div>
                                    </Tabs.TabPane>
                                    <Tabs.TabPane tab="Standbard" key="2">
                                        Content of Tab Pane 2
                                    </Tabs.TabPane>
                                    <Tabs.TabPane tab="Premium" key="3">
                                        Content of Tab Pane 3
                                    </Tabs.TabPane>
                                </Tabs>

                            )
                        })}


                    </div>


                </div>
            </div>

            <Footer />

        </Container>
    )
}

export default WorkDetail


export const Container = styled.div`
    &.WorkDetail {
        .categoryMenu{
                border-bottom:1px solid #e4e5e7;
            .container {
                max-width: 1280px;
            margin: auto;
            .navMenu {
                max-width: 1280px;
                    display: flex;
                    margin: 10px 0;
                    .navCate {
                        position: relative;
                        margin-right: auto;
                        display: block;
                       
                        .category {
                        a {
                            color: #62646a;
                            font-size: 16px;
                            position: relative;
                            &::after {
                                content: '';
                                position: absolute;
                                bottom: -4px;
                                left: 0;
                                width: 0%;
                                background-color: #1dbf73;
                                height: 10%;
                                display: block;
                                

                            }
                           
                          
                           
                        }
                    }

                    .subMenu {
                        position: absolute;
                        top: 27px;
                        left: 0;
                        z-index: 20;
                       width: max-content;
                       height: max-content;
                        border: 1px solid #dadbdd;
                    background-color: #fff;
                    border-radius: 10px;
                    padding: 10px;
                    display: none;
                    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                    .groupJobCate {
                        .listJobCate {
                        li {
                            line-height: 2;
                            a {
                                color: #62646a;
                            }
                        }
                    }
                    }
                   
                  
                    }
                    &:hover{
                        .category {
                            a { 
                                color: #1dbf73;
                                &::after{
                                    display: block;
                                    width: 100%;
                                    transition: all 0.5s;
                                
                               
                            }
                            }
                        }
                        .subMenu{
                            display: block;
                        }
                    }
                   
                    
                    }

                   
            }
          
                   
             }    
            }

      
        .container {
            margin-top: 24px!important;
            .content {
                display: flex;
                .contentLeft {
                    width: 70%;
                    
                    .details {
                        .title {
                        display: flex;
                        justify-content: left;
                        align-items: center;
                        margin-bottom: 12px;
                        a {
                            font-size: 16px;
                          

                            &:hover {
                                text-decoration: underline;

                            }

                        }
                        .rightarrow {
                            color: #62646a;
                            width: 12px;
                            height: 12px;
                            margin:0 5px;
                        }

                    }
                        .detailsColumn {
                            .workInfo {
                                h3 {
                                    font-size: 28px;
                                    font-weight: 700;
                                    color: #404145;
                                }
                                .sellerDetail {
                                    display: flex;
                                    justify-content: left;
                                    align-items: center;
                                    margin-bottom: 12px;
                                   
                                    span {
                                        margin: 0 5px;

                                    }
                                
                                    .sellerRate {
                                        display: flex;
                                        .Rating {
                                        display: flex;
                                        align-items: center;
                                        color: #ffbe5b;
                                    }
                                        .rate {
                                            color: #ffbe5b;
                                            font-weight: 700;
                                        }
                                        .Orders {
                                            color: #95979d;
                                        }
                                        

                                    }
                                }
                                .workOffer {
                                    img {
                                        width: 600px;
                                        height: 400px;
                                    }

                                }
                            }
                            .workDesc {
                                margin: 24px 0;
                                h3 {
                                    margin-bottom: 24px;
                                    color: #404145;
                                    font-weight: 700;
                                    font-size: 20px;


                                }
                                p{
                                    line-height: 2.5;
                                    font-size: 14px;
                                    width: 80%;

                            }
                        }
                        .userInfo {
                                h4 {
                                    color: #404145;
                                    font-weight: 700;
                                    font-size: 20px;
                                }
                                .sellerDetail {
                                    display: flex;
                                    align-items: center;
                                    .sellerIntro {
                                        margin: 0 24px;

                                        .sellerRate {
                                            display: flex;
                                        .Rating {
                                        display: flex;
                                        align-items: center;
                                        color: #ffbe5b;
                                    }
                                        .rate {
                                            color: #ffbe5b;
                                            font-weight: 700;
                                            margin-right: 5px;
                                        }
                                
                                        }
                                        .contactMe {
                                            margin-top: 12px;
                                           border: 1px solid #62646a;;
                                           color: #62646a;
                                           font-weight: 700;
                                           padding: 5px 15px;
                                           border-radius: 5px;

                                        }
                                    }
                                }
                            }
                            
                        }
                       

                    }
                    .FAQ {
                            margin: 36px 0;
                            h3 {
                                color: #404145;
                           font-size: 24px;
                           font-weight:600;
                           margin-top: 16px;
                            }
                            .question {
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                width: 80%;
                                margin-top: 8px;
                                border-bottom:1px solid #e5e7eb;
                            }
                        }
                    .review {
                            margin: 12px 0;
                            .reviewHeader {
                                width: 100%;
                                    .reviewScore {
                                        display: flex;
                                        align-items: center;
                                        span {
                                            margin-right: 8px;
                                            font-size: 20px;
                                        }
                                        .Rating {
                                        display: flex;
                                        align-items: center;
                                        color: #ffbe5b;
                                    }
                                    .rate {
                                        color: #ffbe5b;
                                        font-weight: 700;
                                        margin-right: 5px;
                                        font-size: 16px;

                                    }

                                    }
                                   
                                
                            }
                            .grid-wrap {
                                text-align: center;
                                tr {
                                    .progressBar {
                                    width: 100%;
                                    height: 10px;
                                    background-color: #e4e5e7;
                                    border-radius: 10px;
                                    position: relative;
                                    .progressShape {
                                        height: 10px;
                                        background-color: #ffb33e;
                                    border-radius: 10px;
                                    position: absolute;
                                    top: 0;
                                    left: 0;

                                    }
                                }

                                }
                                .ratingBreakdown {
                                    width: 80%;
                                    h3 {
                                        color: #404145;
                                        font-weight: 600;
                                        font-size: 16px;
                                        text-align: left;

                                    }
                                    li {
                                        display: flex;
                                        justify-content: space-between;
                                        margin: 12px 0;
                                        span {
                                            display: flex;
                                            align-items: center;
                                            color: #ffb33e;
                                            font-weight: 700;
                                        }
                                    }
                                }
                            }
                            .filter {
                           
                              
                                h5 {
                                    font-size: 20px;
                                    font-weight: 700;
                                }
                                .search {
                                    display: flex;
                                    align-items: center;
                                    input {
                                    width: 50%;
                                    border: 1px solid #e5e7eb;
                                    padding: 10px;
                                   
                                }
                                .iconSearch {
                                    background-color: #404145;
                                    color: #fff;
                                    padding: 14px;
                                }

                                }
                                


                            }

                        }
                    .CommentSection {
                        border-top: 1px solid #e5e7eb;
                            .comment-Wrap {
                                margin-top: 24px;
                                .commentList {
                                    .comment {
                                        li {
                                            .commentHeader {
                                              
                                               
                                                .reviewerDetail {
                                                    display: flex;
                                                    width: 50%;
                                                    align-items: center;
                                                    .reviewerImg {
                                                    width: 20%;
                                                   
                                                    }
                                                    .reviewerInfo {
                                                    width: 100%;
                                                    .reviewersubInfo {
                                                        display: flex;
                                                        align-items: center;
                                                    }
                                                    .country {
                                                        display: flex;
                                                        align-items: center;

                                                    }
                                                }

                                                }
                                                  
                                                
                                               

                                            }
                                            .commentDetail {
                                                margin-left: 72px;
                                               margin-top: 16px;
                                                .Rating {
                                       
                                   
                                        .reviewerRate {
                                            display: flex;
                                        align-items: center;
                                            .RatingStar {
                                                display: flex;
                                        align-items: center;
                                        color: #ffbe5b;
                                            }

                                        }
                                            }
                                            .reviewFooter{
                                                display: flex;
                                                align-items: center;
                                                font-weight: 600;
                                                .thumb {
                                                    display: flex;
                                                    
                                                    button {
                                                        margin: 0 6px;
                                                        display: flex;
                                                        align-items: center;
                                                        span {
                                                            margin: 0 4px;
                                                        }

                                                    }
                                                }
                                            }
                                            }
                                        }
                                    }

                                }
                            }
                            .addComment {
                                margin: 20px 0;
                                .commentInput {

                                    display: flex;
                                align-items: center;
                                    input {
                                    width: 90%;
                                    padding: 40px 10px;
                                    border: 1px solid #e5e7eb;
                                    margin-left: 15px;
                                }

                                }
                                .addComBtn {
                                    padding: 10px 24px;
                                    border: 1px solid #fff ;
                                    background-color: #1dbf73;
                                    margin-left: 72px;
                                    margin-top: 12px;
                                    color: #fff;
                                    font-weight: 700;
                                    border-radius: 10px;

                                }
                                
                                
                            }

                        }
                       
                }
                .priceOffer {
                    width: 30%;
                    border: 1px solid #62646a;
                    border-radius: 5px;
                    height: max-content;
                    .Tabs{

                        .ant-tabs-nav{ 
                            margin: 0 auto;     
                        }

                        
                        .package {
                        display: flex;
                        border-bottom: 1px solid #62646a;
                        padding: 5px 15px;
                    
                   }
                   .packageTitle {

                       display: flex;
                       justify-content: space-between;
                       padding: 5px 15px;
                       margin-top: 16px;
                       border-top: 1px solid #62646a;
                       h3 {
                           color: #404145;
                           font-size: 14px;
                           font-weight:600;
                           margin-top: 16px;
                       }
                       span {
                           font-size: 16px;
                           margin-top: 16px;
                       }

                   }
                   .packageDetail {
                       padding: 5px 15px;
                       p {
                           margin: 36px 0;
                       }
                       .delivery {
                        .clock {
                            font-size: 18px;
                            margin-right: 5px;
                        }
                        p {
                            margin: 12px 0;
                            .check {
                                color: #1dbf73!important;
                                margin-right: 14px;
                            }
                        }
                       }
                   }
                   .button{
                    padding: 5px 15px;
                    margin-bottom: 16px;

                    .buyButton {
                       background-color: #1dbf73;
                       width: 100%;
                       padding: 15px 40px;
                       border-radius: 5px;
                       color:#fff;
                       font-weight: 700;
                       font-size: 16px;
                       &:hover {
                        background-color:#19a463
                       }


                   }
                   p {
                       color: #1dbf73;
                       margin: 8px auto;
                       text-align: center;
                   }
                   }
                    }
                 
                   
                }
            }
            
  
         

        }         
        }


    
`
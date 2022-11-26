import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import styled from 'styled-components'
import { getCongViecChiTiet, getCVtheochitietloai, getMenuLoaiCV } from '../../../store/workManage/workManageReducer';
import { useWorkManage } from '../../../store/workManage/workManageSelector';
import Header from '../../organisms/Header';
import { ClockCircleOutlined, CheckOutlined, ArrowRightOutlined, RightOutlined,DownOutlined } from '@ant-design/icons';
import Footer from '../../organisms/Footer';

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
                        <div className='title'>
                            <a href="">Digital Marketing</a> <RightOutlined className='rightarrow' />
                            <a href="">Marketing</a> <RightOutlined className='rightarrow' />
                            <a href="">Marketing</a> <RightOutlined className='rightarrow' />

                        </div>
                        <div className='details'>
                            <div className='detailsColumn'>
                                <div className='workInfo'>
                                    <h3>I will create ideal buyer persona for your business</h3>
                                    <div className='sellerDetail'>
                                        <span className='sellerImg' >
                                            <img style={{ borderRadius: '50%', width: '24px', height: '24px' }} src='https://dummyimage.com/60x60/' alt="" />
                                        </span>
                                        <span>ThaoNguyen</span>
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
                                            <span className='rate'>5 </span>
                                            <span>(134)</span>
                                            <span className='Orders'>  18 Orders in Queue</span>
                                        </div>
                                    </div>
                                    <div className='workOffer'>
                                        <img src="https://dummyimage.com/600x400/000" alt="" />
                                    </div>
                                </div>

                                <div className='workDesc'>
                                    <h3>About This Gig</h3>
                                    <p>

                                        In 2022, Instagram hashtags are still one of the key methods to achieve organic growth. Well-researched hashtags allow you to:



                                        Get discovered organically quickly

                                        Increase likes and engagement

                                        Attract your target audience

                                        Grow your followers



                                        Ive successfully delivered 4000+ Instagram hashtag research strategies with over 2800+ happy clients to help them achieve organic Instagram growth.



                                        What will you get?



                                        Hand-picked data-backed hashtags

                                        Advanced hashtag guide with secret INC formula

                                        Personalized recommendations to grow your account

                                        Profile optimization to increase traffic and conversion

                                        Expert content and caption strategy to supercharge your Instagram growth

                                        Video guide to quickly find high-ranking hashtags

                                        Recommended business growth tools

                                        Monthly 2022 news list detailing the newest IG features and announcements
                                    </p>
                                </div>
                                <div className='userInfo'>
                                    <h4>About The Seller </h4>
                                    <div className='sellerDetail'>
                                        <span className='sellerImg' >
                                            <img style={{ borderRadius: '50%', width: '100px', height: '100px' }} src='https://dummyimage.com/60x60/' alt="" />
                                        </span>
                                        <div className='sellerIntro'>
                                            <h5>Seller name</h5>
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
                                                <span className='rate'>5 </span>
                                            <span>(134)</span>
                                            </div>
                                            <button className='contactMe'>Contact Me</button>
                                        </div>
                                    </div>



                                </div>

                            </div>

                            <div className='FAQ'>
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

                            <div className='comment'></div>
                            <div className='addComment'>
                                <input type="text" />
                            </div>

                        </div>
                    </div>



                    <div className='priceOffer'>
                        <header className='package'>
                            <div className='m-5'>Basic</div>
                            <div className='m-5'> Standard</div>
                            <div className='m-5'>Premium</div>
                        </header>
                        <body>
                            <div className='packageTitle'>
                                <h3>#40 + organic growth strategy</h3>
                                <span>$50</span>
                            </div>
                            <div className='packageDetail'>
                                <p>40# + Personalized Growth Strategy + Hashtag Guide + News List & Tools + Account Optimization</p>
                                <div className='delivery'>
                                <h5><ClockCircleOutlined  className='clock'/> 3 days delivery</h5>
                                <p> <CheckOutlined className='check' /> Page/channel evaluation</p>
                                <p> <CheckOutlined className='check'/> Action plan</p>
                                </div>
                            </div>
                            <div className='button'>
                            <button className='buyButton'> Continue <ArrowRightOutlined /></button>
                            </div>
                            
                            <div>

                            </div>


                        </body>
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
                    .details {
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
                                        margin: 0 12px;

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
                }
                .priceOffer {
                    width: 30%;
                    border: 1px solid #62646a;
                    border-radius: 5px;
                    height: max-content;
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
                       h3 {
                           color: #404145;
                           font-size: 14px;
                           font-weight:600;
                       }
                       span {
                           font-size: 16px;
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
                   }
                   
                }
            }
            
  
         

        }

       

     


           
       
           
        }


    
`
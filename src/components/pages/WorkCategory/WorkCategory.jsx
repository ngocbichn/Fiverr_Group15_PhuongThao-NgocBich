import React, { useEffect } from 'react'
import styled from 'styled-components'
import Header from '../../organisms/Header'
import { useWorkManage } from '../../../store/workManage/workManageSelector';
import { useDispatch } from 'react-redux';
import { getMenuLoaiCV, getCVtheochitietloai, getChiTietLoaiCV } from '../../../store/workManage/workManageReducer';
import { NavLink, useParams, useSearchParams } from 'react-router-dom';
import { PlayCircleOutlined, PlayCircleFilled, ArrowRightOutlined } from '@ant-design/icons';
import { fill } from 'lodash';
import Footer from '../../organisms/Footer';

const WorkCategory = () => {
    const { menuLoaiCV, DScongviectheoChiTietLoai, DScongviectheoTen, chiTietLoaiCV } = useWorkManage()
    console.log(menuLoaiCV)

    const param = useParams()
    console.log(param.maLoaiCV)

    const dispatch = useDispatch()

    useEffect(() => { dispatch(getMenuLoaiCV()) }, [])
    useEffect(() => {getLoaiCV(param.maLoaiCV)}, [param.maLoaiCV])

    const getCV = (Chitietid) => {
        dispatch(getCVtheochitietloai(Chitietid))

    }
    const getLoaiCV = (MaLoaiCV) => {
        dispatch(getChiTietLoaiCV(MaLoaiCV))
    }

    console.log('chiTietLoaiCV', chiTietLoaiCV)
    // const [searchParams, getSearchParams] = useSearchParams({
    //     loaiCV: 
     
    // })


    return (
        <Container className='WorkCate'>
            <Header />
            <div className='categoryMenu'>
                <div className='container'>
                    <ul className='navMenu'>
                        {menuLoaiCV.map((menuCV, index) => {
                            return (
                                <div className='navCate' key={index}>
                                    <li className='category' onClick={() => getLoaiCV(menuCV.id)}>
                                        <a>
                                            {menuCV.tenLoaiCongViec}</a>  </li>
                                    <div className='subMenu'>
                                        <div className='grid  auto-cols-max grid-cols-3 gap-[20px]' >
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
                <div className='banner'>
                    <div className='bannerContent'>
                        <h1>Graphics & Design</h1>
                        <h3>Design to make you stand out</h3>
                        <div className='FiverrVideo'>
                            <button className='playButton'>
                                <div className='buttonContent'>
                                    <PlayCircleFilled style={{ fontSize: '20px', marginRight: '6px' }} /> <span>How Fiverr Works</span>
                                </div>
                            </button>
                        </div>
                    </div>

                </div>
                <div className='Intro'>
                    <h1>Most popular in Graphics & Design</h1>
                    <div className='Carousel'>
                        <div className='track'>
                            <a href="">
                                <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png" alt="" />
                                <span>Minimalist Logo Design</span>
                                <ArrowRightOutlined />
                            </a>
                        </div>
                        <div className='track'>
                            <a href="">
                                <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101618/Architecture%20_%20Interior%20Design_2x.png" alt="" />
                                <span>Architecture & Interior Design</span>
                                <ArrowRightOutlined />
                            </a>
                        </div>
                        <div className='track'>
                            <a href="">
                                <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101624/Photoshop%20Editing_2x.png" alt="" />
                                <span>Image Editing</span>
                                <ArrowRightOutlined />
                            </a>
                        </div>
                        <div className='track'>
                            <a href="">
                                <img src="https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/fc6c7b8c1d155625e7878252a09c4437-1653222039380/Nft%20Art%20%281%29.png" alt="" />
                                <span>NFT Arts</span>
                                <ArrowRightOutlined />

                            </a>
                        </div>
                        {/* <div className='track'>
                                <a href="">
                                    <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101623/T-Shirts%20_%20Merchandise_2x.png" alt="" />
                                    <span>T-shirt & Merchandising</span>
                                    <ArrowRightOutlined />
                                    
                                </a>
                            </div> */}
                    </div>
                </div>

                <div className='workCateResult'>
                    {chiTietLoaiCV?.map((listCV) => {
                        return (
                            <h1 key={listCV.id}>Explore {listCV.tenLoaiCongViec} </h1>
                        )
                    })}

                    <div className='workGroupList'>
                        <div className='grid-wrapper grid grid-cols-4 gap-5'>
                            {
                                chiTietLoaiCV?.map((listCV) => {
                                    return (



                                        listCV.dsNhomChiTietLoai.map((grouplistCV) => {
                                            return (
                                                <div className='column' key={grouplistCV.id}>
                                                    <img src={grouplistCV.hinhAnh} alt="" />
                                                    <div className='workList'>
                                                        <h3>{grouplistCV.tenNhom}</h3>
                                                        <div className='subWorklist'>
                                                            {grouplistCV.dsChiTietLoai.map((item) => {
                                                                return (
                                                                    <div className='subWorklist-item' key={item.id}>
                                                                        <a href="">
                                                                            <span>{item.tenChiTiet}</span>
                                                                            <ArrowRightOutlined className='arrow' />
                                                                        </a>
                                                                    </div>
                                                                )
                                                            })}





                                                        </div>
                                                    </div>
                                                </div>

                                            )
                                        })



                                    )

                                })
                            }
                            <div>

                            </div>




                        </div>
                    </div>

                </div>
            </div>
            <div className='searchRelated'></div>
            <Footer/>
        </Container>
    )
}

export default WorkCategory



export const Container = styled.div`
    &.WorkCate {
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

            @media screen and (min-width: 986px) {
               
                
            }
        .container {
            margin-top: 24px!important;
            
            .banner {
                z-index: 4;
                background-image: url('https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/3f1b7ea10295936b6846bcff0afd38cf-1626595415203/graphics-design-desktop.png');
                background-size: 100% 100%;
                background-repeat: no-repeat;
                min-height: 240px;
                position: relative;
                .bannerContent {
                    position: absolute;
                    width: 100%;
                    margin: auto;
                    top: 50%;
                    transform: translateY(-50%);
                    display: flex;
                    flex-direction: column;
                    text-align: center;
                    justify-content: center;
                    color: #fff;
                    h1 {
                        color: #fff;
                        font-size: 36px;
                        font-weight: 700;
                        margin-bottom: 8px;

                    }
                    h3 {
                        color: #fff;
                        font-size: 20px;
                        margin-bottom: 12px;
                        
                    }

                    .playButton {
                        
                        border: 1px solid #fff;
                        padding: 12px 24px;
                        border-radius: 5px;
                       .buttonContent {
                           display: flex;
                           justify-content: center;
                           align-items: center;
                           span {
                               font-size: 16px;
                           }

                       }
                    }
                }
            }
            .Intro {
                h1 {
                    color: #404145;
                    font-size: 24px;
                    font-weight: 700;
                    margin: 16px auto;
                }
                .Carousel {
                    display: flex;
                    .track {
                        margin: 8px 16px;
                        border: 1px solid transparent;
                        box-sizing: border-box;
                        background-color: #fff;
                        box-shadow: 1px 1px 12px 4px rgba(15,14,14,0.22);
                        padding: 5px 10px;
                        border-radius: 10px;
                       a {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color:#404145;
                        font-size: 16px;
                        font-weight: 500;
                        img {
                            margin-right: 8px;
                            width: 48px;
                            height: 48px;
                        }
                        span {
                            margin-right: 5px;
                        }
                       }
                       &:hover {
                           a {
                            color:#1dbf73;
                           }
                          
                       }

                    }

                }
            }
            .workCateResult {
                margin: 50px auto;
                h1 {
                    color: #404145;
                    font-size: 20px;
                    font-weight: 700;
                    margin-bottom: 20px;

                }
                .workGroupList {

                    .grid-wrapper {
                        .column {
                            img {

                            }
                            .workList {
                                h3 {
                                    color: #222325;
                                    font-size: 20px;
                                    font-weight: 700;
                                    margin-top: 20px;

                                }
                                .subWorklist {
                                 
                                    .subWorklist-item {
                                        line-height: 28px;
                                        a {
                                            color: #62646a;
                                            font-size: 18px;
                                            font-weight: 400;
                                            display: flex;
                                            align-items: center;
                                            justify-content: space-between;
                                            padding: 5px 10px;
                                            .arrow {
                                                display: none;
                                            }


                                        }
                                        &:hover {
                                            box-sizing: border-box;
                                            background-color: #f5f5f5;
                                            border-radius: 8px;
                                            .arrow {
                                                display: block;
                                            }
                                        }
                                    }
                                }
                            }
                        }


                    }
                }
            }

        }

       

     


           
       
           
        }


    
`
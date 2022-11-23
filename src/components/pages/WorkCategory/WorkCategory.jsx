import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Header from '../../organisms/Header'
import { useWorkManage } from '../../../store/workManage/workManageSelector';
import { useDispatch } from 'react-redux';
import { getMenuLoaiCV, getCVtheochitietloai, getChiTietLoaiCV } from '../../../store/workManage/workManageReducer';
import { createSearchParams, NavLink, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { PlayCircleOutlined, PlayCircleFilled, ArrowRightOutlined } from '@ant-design/icons';
import { fill, set } from 'lodash';
import Footer from '../../organisms/Footer';

const WorkCategory = () => {
    const { menuLoaiCV, DScongviectheoChiTietLoai, DScongviectheoTen, chiTietLoaiCV } = useWorkManage()
    console.log('chiTietLoaiCV',chiTietLoaiCV)
    const navigate = useNavigate()

    const [stateDSCVtheochitietloai, setstateDSCVtheochitietloai] = useState(null)
    console.log(stateDSCVtheochitietloai)



    const param = useParams()
    

    const dispatch = useDispatch()

    useEffect(() => { dispatch(getMenuLoaiCV()) }, [])
    useEffect(() => { getLoaiCV(param.maLoaiCV);
   
        
         }, [param.maLoaiCV])

    const getCV = (Chitietid) => {
        dispatch(getCVtheochitietloai(Chitietid));
        setstateDSCVtheochitietloai([])

    }
    //là cái này nè 
    const getLoaiCV = (MaLoaiCV) => {
        dispatch(getChiTietLoaiCV(MaLoaiCV));
        setstateDSCVtheochitietloai(null)
    }

    console.log('DScongviectheoChiTietLoai', DScongviectheoChiTietLoai)
    // const [searchParams, getSearchParams] = useSearchParams({
    //     loaiCV: 

    // })

  
    const renderContent = () => {
        if (stateDSCVtheochitietloai !== null) {
            return (
                <div className='container searchedResult '>
                {DScongviectheoChiTietLoai?.slice(0,1).map((congviec) => {
                    return (
                        <h2 className='my-[24px]'  key={congviec.id}>{congviec.tenChiTietLoai}
                        </h2>
                    )
                    
                })}
                        <div className=' listedResult grid grid-cols-4 gap-[20px]'>
                        {DScongviectheoChiTietLoai?.map((congviec) => {
                            return (
                                <div className='grid-box' style={{ backgroundColor: '#fff' }} key={congviec.id}>
                                <div className='grid-card'>
                                   
                                    <div className='imageCarousel'>
                                        <img src={congviec.congViec.hinhAnh} />
                                    </div>
                                    {/* <SimpleSlider/> */}
                                    <div className='sellerInfo m-[12px]'>
                                        <span className='sellerImg' >
                                            <img style={{ borderRadius: '50%', width: '24px', height: '24px' }} src={congviec.avatar} alt="" />
                                        </span>
                                        <div className='sellerName ml-6'> <a href="">{congviec.tenNguoiTao}</a>
                                            <div className='sellerLevel'>Level 2 seller</div>
                                        </div>

                                    </div>
                                    <div className='sellerOffer'>
                                        <a>{congviec.tenCongViec}</a>
                                    </div>
                                    <div className='sellerRate'>
                                        <span className='Rating'>
                                            <svg className='mr-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15">
                                                <path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                                            </svg> 5.0

                                        </span>
                                        <span className='ml-4'>({congviec.congViec.danhGia})</span>
                                    </div>
                                    <footer>
                                        <div className='priceWrapper'>
                                            <button className='heartButton'>
                                                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.4469 1.95625C12.7344 0.496875 10.1875 0.759375 8.61561 2.38125L7.99999 3.01562L7.38436 2.38125C5.81561 0.759375 3.26561 0.496875 1.55311 1.95625C-0.409388 3.63125 -0.512513 6.6375 1.24374 8.45312L7.29061 14.6969C7.68124 15.1 8.31561 15.1 8.70624 14.6969L14.7531 8.45312C16.5125 6.6375 16.4094 3.63125 14.4469 1.95625Z"></path></svg>
                                            </button>
                                            <div className='price'>
                                                <a href=""> Starting at <span>${congviec.congViec.giaTien}</span></a>
                                            </div>
                                        </div>
                                    </footer>
                                </div>

                            </div>
                            )

                        })}

                        {DScongviectheoTen?.map((congviec) => {
                            return (
                                <div className='grid-box' style={{ backgroundColor: '#fff' }} key={congviec.id}>
                                <div className='grid-card'>
                                   
                                    <div className='imageCarousel'>
                                        <img src={congviec.congViec.hinhAnh} />
                                    </div>
                                    {/* <SimpleSlider/> */}
                                    <div className='sellerInfo m-[12px]'>
                                        <span className='sellerImg' >
                                            <img style={{ borderRadius: '50%', width: '24px', height: '24px' }} src={congviec.avatar} alt="" />
                                        </span>
                                        <div className='sellerName ml-6'> <a href="">{congviec.tenNguoiTao}</a>
                                            <div className='sellerLevel'>Level 2 seller</div>
                                        </div>

                                    </div>
                                    <div className='sellerOffer'>
                                        <a>{congviec.tenCongViec}</a>
                                    </div>
                                    <div className='sellerRate'>
                                        <span className='Rating'>
                                            <svg className='mr-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15">
                                                <path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                                            </svg> 5.0

                                        </span>
                                        <span className='ml-4'>({congviec.congViec.danhGia})</span>
                                    </div>
                                    <footer>
                                        <div className='priceWrapper'>
                                            <button className='heartButton'>
                                                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.4469 1.95625C12.7344 0.496875 10.1875 0.759375 8.61561 2.38125L7.99999 3.01562L7.38436 2.38125C5.81561 0.759375 3.26561 0.496875 1.55311 1.95625C-0.409388 3.63125 -0.512513 6.6375 1.24374 8.45312L7.29061 14.6969C7.68124 15.1 8.31561 15.1 8.70624 14.6969L14.7531 8.45312C16.5125 6.6375 16.4094 3.63125 14.4469 1.95625Z"></path></svg>
                                            </button>
                                            <div className='price'>
                                                <a href=""> Starting at <span>${congviec.congViec.giaTien}</span></a>
                                            </div>
                                        </div>
                                    </footer>
                                </div>

                            </div>
                            )

                        })}
                           
                        
                          

                        </div>
                    </div>

            )
        }
         else {
             return (
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
                                                                    <a onClick={() => {
                                                                        getCV(item.id)
                                                                    }}>
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
             )
         }
    }


    return (
        <Container className='WorkCate'>
            <Header />
            <div className='categoryMenu'>
                <div className='container'>
                    <ul className='navMenu'>
                        {menuLoaiCV.map((menuCV, index) => {
                            return (
                                <div className='navCate' key={index}>
                                    <li className='category' onClick={() => {getLoaiCV(menuCV.id)
                                    // navigate({
                                    //     pathname: '/categories',
                                    //     search: `?${createSearchParams({
                                    //         category: menuCV.tenLoaiCongViec
                                    //     })}`
                                    // })
                                    window.history.replaceState(null, "New Page Title", `/categories/${menuCV.id}`)
                                   
                                    }}
                                    >
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
                      
                    </div>
                </div>

                {renderContent()}
             
                <div className='searchRelated'>
                    <h1>Sevices Related To Graphics & Design</h1>
                    <div className='suggestedItem'>
                       <ul>
                     
                           <span>
                           <a href="">Minimalist Logo Design</a>
                           </span>
                           <span> <a href="">Signature Logo Design</a></span>
                        <span>     <a href="">Mascot Logo Design</a></span>
                        <span><a href="">3d Logo Design</a></span>
                        <span> <a href="">Hand Drawn Logo Design</a></span>
                        <span>    <a href="">Vintage Logo Design</a></span>
                        <span>
                         <a href="">Remove background</a></span>
                        <span> <a href="">Photo restoration</a></span>
                        <span>  <a href="">Photo retouching</a></span>
                        <span><a href="">Image resize</a></span>
                        <span><a href="">Product label design</a></span>
                        <span><a href="">Custom twitch overlay</a></span>
                        <span> <a href="">Custom twitch emotes</a></span>
                        <span><a href="">Gaming Logo</a></span>
                        <span> <a href="">Children book illustration</a></span>
                        <span><a href="">Instagram Design</a></span>
                        <span> <a href="">Movie poster Design</a></span>
                        <span> <a href="">Box Design</a></span>
                        <span> <a href="">Logo Maker</a></span>
   
                        
                         
                        
                        
                        
                       </ul>

                    </div>
                </div>
            </div>
           
            <Footer />
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
                                max-height: 183px;

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
            .searchedResult {
                h2 {
                    font-size: 24px;
                    font-weight: 700;
                }
                .listedResult {
                    
                    .grid-box {
                         min-height: 370px;
                         width: 100% ;
                    .grid-card {
                        border: 1px solid #e4e5e7;
                        .imageCarousel {
                            img {
                                min-height: 200px;
                            }
                            

                        }
                        .sellerInfo {
                         display: flex;
                         align-items: center;
                         
                            .sellerName {
                                a {
                                    color: #222325;
                                font-weight: 600;
                                }
                               
                                .sellerLevel {
                                    color: #74767e;
                                    font-weight: 500;

}
                            }
                            

                        }
                        .sellerOffer {
                            margin: 12px;
                                margin-top: 10px;
                                box-sizing: border-box;
                                overflow: hidden;
                            a {
                                color: #222325;
                                line-height: 22px;
                                font-size: 15px;
                               
                            }

                        }
                        .sellerRate {
                           display: flex;
                           margin: 10px 12px;
                           font-size: 14px;
                           .Rating {
                            display: flex;
                           color: #ffbe5b;
                           font-weight: 700;
                           align-items: center;
                           }

                        }
                        footer {
                            border-top: 1px solid #e4e5e7;
                          
                            .priceWrapper{
                                display: flex;
                                justify-content: space-between;
                                margin: 0 12px;
                                .heartButton{
                                    fill: #b5b6ba;
                                
                                }
                                .price {
                                    
                                    a {
                                        color: #74767e;
                                        font-size: 12px;
                                    font-weight: 600;
                                    span {
                                        color: #404145;
                                        font-size: 18px;
                                        font-weight: 500;
                                    }
                                    }
                                    
                                }
                            }
                        }
                    }
                }

                }
            }
            .searchRelated{
                h1 {
                    color: #404145;
                    font-size: 24px;
                    font-weight: 700;
                    text-align: center;
                }
                .suggestedItem {
                    ul {
                       display: flex;
                       flex-wrap: wrap;
                       justify-content: center;
                       
                        span {
                            background-color: #efeff0;
                            border-color: #efeff0;
                            padding: 3px 12px;
                            margin-bottom: 16px;
                            margin-right: 16px;
                            border-radius: 15px;
                            a {
                            color: #74767e;
                            font-weight: 500;
                           

                        }
                        }
                      
                    }

                }

            }

        }

       

     


           
       
           
        }


    
`
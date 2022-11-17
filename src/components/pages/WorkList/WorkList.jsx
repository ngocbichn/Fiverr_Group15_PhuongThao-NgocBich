import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Footer from '../../organisms/Footer'
import Header from '../../organisms/Header'
import { DownOutlined } from '@ant-design/icons';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import { useWorkManage } from '../../../store/workManage/workManageSelector';
import { useDispatch } from 'react-redux';
import { getMenuLoaiCV, getCVtheochitietloai } from '../../../store/workManage/workManageReducer';

const WorkList = () => {

    const [topBar, setTopBar] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const addShadow = () => {
        // console.log(window.scrollY)
        if (window.scrollY >= 80) {
            setTopBar(true)
        }
        else {
            setTopBar(false)
        }
    }

    window.addEventListener('scroll', addShadow)

 

    useEffect(() => {dispatch(getMenuLoaiCV())},[])

    const {menuLoaiCV,DScongviectheoChiTietLoai} = useWorkManage()
    console.log('menuLoaiCV',menuLoaiCV)
    console.log('DScongviectheoChiTietLoai',DScongviectheoChiTietLoai)

   

    return (
        <Container className='WorkList'>
            <Header />
            <div className='categoryMenu'>
                <div className='container'>
                    <ul className='navMenu'>
                         {menuLoaiCV.map((menuCV,index) => {
                            return (
                            <div className='navCate' key={index}>
                            <li className='category'> <NavLink to="/categories">{menuCV.tenLoaiCongViec}</NavLink>  </li>
                            <div className='subMenu'>
                            <div className='grid grid-flow-col-dense grid-cols-3 gap-[40px]' >
                            {menuCV.dsNhomChiTietLoai?.map((item) => {
                                return (
                               
                                
                                    <div className='groupJobCate' key={item.id}>
                                        <ul className='listJobCate'>
                                            <h3>{item.tenNhom}</h3>
                                            {item.dsChiTietLoai.map((ChiTietLoai) => {
                                                return (
                                                <li key={ChiTietLoai.id}> <a onClick={() => {dispatch(getCVtheochitietloai(ChiTietLoai.id))
                                                console.log(ChiTietLoai.id)}}
                                                >{ChiTietLoai.tenChiTiet}</a> </li>)}
                                           )}
                                            
                                        </ul>
                                    </div> )
                            })}
                               </div> 
                            </div>
                           
                            
                        </div>
                            )

                        })} 


                        {/* <div className='navCate'>
                            <li className='category'> <NavLink to="/categories">Graphics & Design</NavLink>  </li>
                            <div className='subMenu'>
                                <div className=' grid grid-flow-col-dense gap-[40px]'>
                                    <div className='groupJobCate'>
                                        <ul className='listJobCate'>
                                            <h3>Logo & Brand Identity</h3>
                                            <li> <a href="">Logo design</a> </li>
                                            <li> <a href="">Brand Style Guides </a> </li>
                                            <li> <a href="">Fonts & Typography </a></li>
                                            <li><a href="">Business Card & Stationery </a></li>
                                        </ul>
                                    </div>
                                    <div className='groupJobCate'>
                                        <ul className='listJobCate'>
                                            <h3>Logo & Brand Identity</h3>
                                            <li>Logo design</li>
                                            <li>Brand Style Guides</li>
                                            <li>Fonts & Typography</li>
                                            <li>Business Card & Stationery</li>
                                        </ul>
                                    </div>
                                    <div className='groupJobCate'>
                                        <ul className='listJobCate'>
                                            <h3>Logo & Brand Identity</h3>
                                            <li>Logo design</li>
                                            <li>Brand Style Guides</li>
                                            <li>Fonts & Typography</li>
                                            <li>Business Card & Stationery</li>
                                        </ul>
                                    </div>
                                    
                                </div>
                            </div>
                        </div> */}
                        

                    </ul>
                </div>

            </div>
            <div className='suggestedSearch'>
                <div className='container'>
                    <div className='suggestedContent'>
                        <span>Suggested</span>
                        <a>html css</a>
                        <a>html website</a>
                        <a>psd</a>
                    </div>

                </div>

            </div>
            <div className='containers'>
                <div className='content mb-[32px]'>
                    <div className='container'>
                        <h1>Result for "html"</h1>
                    </div>

                    <div className={`topBar  mt-[16px]  ${topBar ? 'Scrolled' : ''}`}>
                        <div className='shadowEffect'>
                            <div className='wrapper container'>
                                <div className='topFilter  '>
                                    <button >Category <DownOutlined className='arrow' /></button>
                                    <button>Service Options <DownOutlined className='arrow' /></button>
                                    <button>Seller Details <DownOutlined className='arrow' /></button>
                                    <button>Budget <DownOutlined className='arrow' /></button>
                                    <button>Delivery Time <DownOutlined className='arrow' /></button>
                                </div>
                                <div className='proSearch'>
                                    <div className='filterSearch mr-[16px]'>
                                        <label>
                                            <input type="checkbox"/>
                                            <span className='checkBox'></span>
                                        </label>
                                        Pro services
                                    </div>
                                    <div className='filterSearch mr-[16px]'>
                                        <label>
                                            <input type="checkbox"/>
                                            <span className='checkBox'></span>
                                        </label>
                                        Local sellers
                                    </div>
                                    <div className='filterSearch mr-[16px]'>
                                        <label>
                                            <input type="checkbox" />
                                            <span className='checkBox'></span>
                                        </label>
                                        Online sellers
                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='container searchedResult '>
                        <h2 className='my-[24px]' >30,775 services available</h2>
                        <div className=' listedResult grid grid-cols-4 gap-[20px]'>
                            <div className='grid-box' style={{ backgroundColor: '#fff' }}>
                                <div className='grid-card'>
                                    <div className='imageCarousel'>
                                        <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/116856649/original/a5945e0c694538f4e36215017d623873aac3ce67/edit-html-and-css-on-your-webpage.png" alt="" />
                                    </div>
                                    <div className='sellerInfo m-[12px]'>
                                        <span className='sellerImg' >
                                            <img style={{ borderRadius: '50%', width: '24px', height: '24px' }} src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/9e4e283779a255a8ebb803b94905af7d-649846441604052298512/JPEG_20201030_153457_4491597895407383130.jpg" alt="" />
                                        </span>
                                        <div className='sellerName ml-6'> <a href="">rajnishbaldha</a>
                                            <div className='sellerLevel'>Level 2 seller</div>
                                        </div>

                                    </div>
                                    <div className='sellerOffer'>
                                        <a>I will do HTML, CSS and javascript tasks</a>
                                    </div>
                                    <div className='sellerRate'>
                                        <span className='Rating'>
                                            <svg className='mr-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15">
                                                <path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                                            </svg> 5.0

                                        </span>
                                        <span className='ml-4'>(284)</span>
                                    </div>
                                    <footer>
                                        <div className='priceWrapper'>
                                            <button className='heartButton'>
                                                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.4469 1.95625C12.7344 0.496875 10.1875 0.759375 8.61561 2.38125L7.99999 3.01562L7.38436 2.38125C5.81561 0.759375 3.26561 0.496875 1.55311 1.95625C-0.409388 3.63125 -0.512513 6.6375 1.24374 8.45312L7.29061 14.6969C7.68124 15.1 8.31561 15.1 8.70624 14.6969L14.7531 8.45312C16.5125 6.6375 16.4094 3.63125 14.4469 1.95625Z"></path></svg>
                                            </button>
                                            <div className='price'>
                                                <a href=""> Starting at <span>$10</span></a>
                                            </div>
                                        </div>
                                    </footer>
                                </div>

                            </div>
                            <div className='grid-box' style={{ backgroundColor: '#fff' }}>
                                <div className='grid-card'>
                                    <div className='imageCarousel'>
                                        <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/116856649/original/a5945e0c694538f4e36215017d623873aac3ce67/edit-html-and-css-on-your-webpage.png" alt="" />
                                    </div>
                                    <div className='sellerInfo m-[12px]'>
                                        <span className='sellerImg' >
                                            <img style={{ borderRadius: '50%', width: '24px', height: '24px' }} src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/9e4e283779a255a8ebb803b94905af7d-649846441604052298512/JPEG_20201030_153457_4491597895407383130.jpg" alt="" />
                                        </span>
                                        <div className='sellerName ml-6'> <a href="">rajnishbaldha</a>
                                            <div className='sellerLevel'>Level 2 seller</div>
                                        </div>

                                    </div>
                                    <div className='sellerOffer'>
                                        <a>I will do HTML, CSS and javascript tasks</a>
                                    </div>
                                    <div className='sellerRate'>
                                        <span className='Rating'>
                                            <svg className='mr-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15">
                                                <path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                                            </svg> 5.0

                                        </span>
                                        <span className='ml-4'>(284)</span>
                                    </div>
                                    <footer>
                                        <div className='priceWrapper'>
                                            <button className='heartButton'>
                                                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.4469 1.95625C12.7344 0.496875 10.1875 0.759375 8.61561 2.38125L7.99999 3.01562L7.38436 2.38125C5.81561 0.759375 3.26561 0.496875 1.55311 1.95625C-0.409388 3.63125 -0.512513 6.6375 1.24374 8.45312L7.29061 14.6969C7.68124 15.1 8.31561 15.1 8.70624 14.6969L14.7531 8.45312C16.5125 6.6375 16.4094 3.63125 14.4469 1.95625Z"></path></svg>
                                            </button>
                                            <div className='price'>
                                                <a href=""> Starting at <span>$10</span></a>
                                            </div>
                                        </div>
                                    </footer>
                                </div>

                            </div>
                            <div className='grid-box' style={{ backgroundColor: '#fff' }}>
                                <div className='grid-card'>
                                    <div className='imageCarousel'>
                                        <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/116856649/original/a5945e0c694538f4e36215017d623873aac3ce67/edit-html-and-css-on-your-webpage.png" alt="" />
                                    </div>
                                    <div className='sellerInfo m-[12px]'>
                                        <span className='sellerImg' >
                                            <img style={{ borderRadius: '50%', width: '24px', height: '24px' }} src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/9e4e283779a255a8ebb803b94905af7d-649846441604052298512/JPEG_20201030_153457_4491597895407383130.jpg" alt="" />
                                        </span>
                                        <div className='sellerName ml-6'> <a href="">rajnishbaldha</a>
                                            <div className='sellerLevel'>Level 2 seller</div>
                                        </div>

                                    </div>
                                    <div className='sellerOffer'>
                                        <a>I will do HTML, CSS and javascript tasks</a>
                                    </div>
                                    <div className='sellerRate'>
                                        <span className='Rating'>
                                            <svg className='mr-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15">
                                                <path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                                            </svg> 5.0

                                        </span>
                                        <span className='ml-4'>(284)</span>
                                    </div>
                                    <footer>
                                        <div className='priceWrapper'>
                                            <button className='heartButton'>
                                                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.4469 1.95625C12.7344 0.496875 10.1875 0.759375 8.61561 2.38125L7.99999 3.01562L7.38436 2.38125C5.81561 0.759375 3.26561 0.496875 1.55311 1.95625C-0.409388 3.63125 -0.512513 6.6375 1.24374 8.45312L7.29061 14.6969C7.68124 15.1 8.31561 15.1 8.70624 14.6969L14.7531 8.45312C16.5125 6.6375 16.4094 3.63125 14.4469 1.95625Z"></path></svg>
                                            </button>
                                            <div className='price'>
                                                <a href=""> Starting at <span>$10</span></a>
                                            </div>
                                        </div>
                                    </footer>
                                </div>

                            </div>
                            <div className='grid-box' style={{ backgroundColor: '#fff' }}>
                                <div className='grid-card'>
                                    <div className='imageCarousel'>
                                        <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/116856649/original/a5945e0c694538f4e36215017d623873aac3ce67/edit-html-and-css-on-your-webpage.png" alt="" />
                                    </div>
                                    <div className='sellerInfo m-[12px]'>
                                        <span className='sellerImg' >
                                            <img style={{ borderRadius: '50%', width: '24px', height: '24px' }} src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/9e4e283779a255a8ebb803b94905af7d-649846441604052298512/JPEG_20201030_153457_4491597895407383130.jpg" alt="" />
                                        </span>
                                        <div className='sellerName ml-6'> <a href="">rajnishbaldha</a>
                                            <div className='sellerLevel'>Level 2 seller</div>
                                        </div>

                                    </div>
                                    <div className='sellerOffer'>
                                        <a>I will do HTML, CSS and javascript tasks</a>
                                    </div>
                                    <div className='sellerRate'>
                                        <span className='Rating'>
                                            <svg className='mr-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15">
                                                <path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                                            </svg> 5.0

                                        </span>
                                        <span className='ml-4'>(284)</span>
                                    </div>
                                    <footer>
                                        <div className='priceWrapper'>
                                            <button className='heartButton'>
                                                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.4469 1.95625C12.7344 0.496875 10.1875 0.759375 8.61561 2.38125L7.99999 3.01562L7.38436 2.38125C5.81561 0.759375 3.26561 0.496875 1.55311 1.95625C-0.409388 3.63125 -0.512513 6.6375 1.24374 8.45312L7.29061 14.6969C7.68124 15.1 8.31561 15.1 8.70624 14.6969L14.7531 8.45312C16.5125 6.6375 16.4094 3.63125 14.4469 1.95625Z"></path></svg>
                                            </button>
                                            <div className='price'>
                                                <a href=""> Starting at <span>$10</span></a>
                                            </div>
                                        </div>
                                    </footer>
                                </div>

                            </div>
                            <div className='grid-box' style={{ backgroundColor: '#fff' }}>
                                <div className='grid-card'>
                                    <div className='imageCarousel'>
                                        <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/116856649/original/a5945e0c694538f4e36215017d623873aac3ce67/edit-html-and-css-on-your-webpage.png" alt="" />
                                    </div>
                                    <div className='sellerInfo m-[12px]'>
                                        <span className='sellerImg' >
                                            <img style={{ borderRadius: '50%', width: '24px', height: '24px' }} src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/9e4e283779a255a8ebb803b94905af7d-649846441604052298512/JPEG_20201030_153457_4491597895407383130.jpg" alt="" />
                                        </span>
                                        <div className='sellerName ml-6'> <a href="">rajnishbaldha</a>
                                            <div className='sellerLevel'>Level 2 seller</div>
                                        </div>

                                    </div>
                                    <div className='sellerOffer'>
                                        <a>I will do HTML, CSS and javascript tasks</a>
                                    </div>
                                    <div className='sellerRate'>
                                        <span className='Rating'>
                                            <svg className='mr-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15">
                                                <path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                                            </svg> 5.0

                                        </span>
                                        <span className='ml-4'>(284)</span>
                                    </div>
                                    <footer>
                                        <div className='priceWrapper'>
                                            <button className='heartButton'>
                                                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.4469 1.95625C12.7344 0.496875 10.1875 0.759375 8.61561 2.38125L7.99999 3.01562L7.38436 2.38125C5.81561 0.759375 3.26561 0.496875 1.55311 1.95625C-0.409388 3.63125 -0.512513 6.6375 1.24374 8.45312L7.29061 14.6969C7.68124 15.1 8.31561 15.1 8.70624 14.6969L14.7531 8.45312C16.5125 6.6375 16.4094 3.63125 14.4469 1.95625Z"></path></svg>
                                            </button>
                                            <div className='price'>
                                                <a href=""> Starting at <span>$10</span></a>
                                            </div>
                                        </div>
                                    </footer>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>




                <Footer />
            </div>



        </Container>
    )
}

export default WorkList



export const Container = styled.div`
    &.WorkList {
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
                            display: inline-grid;
                        }
                    }
                   
                    
                    }

                   
            }
          
                   
             }    
            }

            @media screen and (min-width: 986px) {
               
                
            }

        .suggestedSearch {
            background-color: #f5f5f5;
            padding: 12px 0;
            .container {
                max-width: 1280px;
            margin: auto;
            .suggestedContent{
                
                display: flex;
                align-items: center;
                span {
                    margin-right: 16px;
                    color: #62646a;
                    font-weight: bold;
                }
                a {
                    margin-right: 16px;
                    color: #62646a;
                    border: 1px solid #dadbdd;
                    background-color: #fff;
                    padding: 4px 10px;
                    border-radius: 5px;
                }
                

            }
            }
        }

        .containers {
            
            .content {
                h1 {
                    font-size: 30px;
                    margin: 20px 0;
                    font-weight: 600;
                }
                h2 {
                    color: #74767e;
                    font-size: 14px;
                    font-weight: 600;
                }
                .topBar {
                
                position: sticky;
                z-index: 10;
                top: 0;
                /* -webkit-backface-visibility: hidden; */
                /* box-shadow: 0 0.266px 1.13052px rgb(0 0 0 / 7%), 0 0.89345px 3.79717px rgb(0 0 0 / 10%), 0 5px 17px rgb(0 0 0 / 17%);
                        z-index: 10; */

                
             
                .shadowEffect {
                    background-color: #fff;
                    height: 84%;
                    position: relative;
                    top: 0;
                    ::after {

                        content: "";
                        display: block;
                        height: 10px;
                    
                       
    }
                    .wrapper {
                        display: flex;
                justify-content:space-between;
                align-items: center;
                height: 70px;
                    .topFilter {
                    display: flex;
                    align-items: center;
                    button {
                        font-size: 16px;
                        font-weight: 600;
                        margin-right: 12px;
                        display:flex; 
                        align-items: center;
                        border: 1px solid #dadbdd;
                        border-radius: 5px;
                        padding: 4px 10px;
                        .arrow {
                           margin-left: 5px;
                            font-size: 10px;
                        }
                    }
                }
                .proSearch {
                    display: flex;
                  .filterSearch {
                      display: flex;
                      align-items: center;
                      color: #62646a;
                      font-size: 16px;
                      font-weight: 600;
                      label {
                          display: flex;
                          margin-right: 5px;
                        input{
                                display: none;
                            }
                        span{ 
                            
                            height: 18px;
                            width: 31px;    
                            display: inline-block;
                            position: relative;
                            border-radius: 999px;
                            background-color: #dadbdd;
                            cursor: pointer;    
                            ::after {
                                content: '';
                                width: 18px;
                                height: 18px;
                                display: block;
                                position: absolute; 
                                box-sizing: border-box;
                                top: 0;
                                left: 0;
                                z-index: 1;
                                background: #fff;
                                border: 1px solid #dadbdd;
                                border-radius: 50%;
                                box-shadow: 0 2px 6px rgb(34 35 37 / 10%);

                            }
    
                        }
                        input:checked ~ span {
                            background-color: #1dbf73;

                        }
                        input:checked ~ span::after {
                            transform: translateX(18px);

                        }
                      }
                  }
                }
                    }
                   
                }
               
                 
               
               
            }
            .Scrolled  {
                
                box-shadow: 0 0.266px 1.13052px rgb(0 0 0 / 7%), 0 0.89345px 3.79717px rgb(0 0 0 / 10%), 0 5px 17px rgb(0 0 0 / 17%);
                        z-index: 10;
                        }
            .searchedResult {
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


           
            }
           
        }


    }
`
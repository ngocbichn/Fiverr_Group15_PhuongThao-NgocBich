import React from 'react'
import styled from 'styled-components'
import Footer from '../../organisms/Footer'
import Header from '../../organisms/Header'
import { DownOutlined } from '@ant-design/icons';

const WorkList = () => {
    return (
        <Container className='WorkList'>
            <Header />
            <div className='categoryMenu'>
                <div className='container'>
                    <ul className='navMenu'>
                        <li> <a href="">Graphics & Design</a>  </li>
                        <li> <a href="">Digital Marketing</a>  </li>
                        <li> <a href="">
                            Writing & Translation</a>  </li>
                        <li> <a href="">Video & Animation</a>  </li>
                        <li> <a href="">Music & Audio</a>  </li>
                        <li> <a href="">Programming & Tech</a>  </li>
                        <li> <a href="">Data </a> <span>New</span></li>
                        <li> <a href="">Business</a> </li>
                        <li> <a href="">Lifestyle</a> </li>
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
            <div className='container'>
                <div className='content'>
                    <h1>Result for "html"</h1>
                    <div className='topBar'>
                        <div className='topFilter'>
                            <button>Category <DownOutlined className='arrow' /></button>
                            <button>Service Options <DownOutlined className='arrow' /></button>
                            <button>Seller Details <DownOutlined className='arrow' /></button>
                            <button>Budget <DownOutlined className='arrow' /></button>
                            <button>Delivery Time <DownOutlined className='arrow' /></button>
                        </div>
                        <div className='proSearch'>

                        </div>
                    </div>
                    <div className='searchedResult my-[24px]'>
                        <h2 className='mb-[24px]' >30,775 services available</h2>
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

                    li {
                        margin-right: auto;
                        a {
                            color: #62646a;
                            font-size: 16px;&:hover {
                                color: #1dbf73;
                            }
                           
                        }
                    }
            }
          
                   
             }    
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

        .container {
            max-width: 1280px;
            margin: auto;
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
                display: flex;
                .topFilter {
                    display: flex;
                    align-items: center;
                    button {
                        font-size: 16px;
                        font-weight: 600;
                        margin-right: 12px;
                        display:flex; align-items: center;
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

                }
               
               
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
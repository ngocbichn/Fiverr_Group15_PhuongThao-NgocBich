import React from 'react'
import styled from 'styled-components'
import Header from '../../organisms/Header'

const WorkCategory = () => {
    return (
        <Container className='WorkCate'>
            <Header/>
            WorkCategory
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
                -webkit-backface-visibility: hidden;
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
import React from 'react'
import styled from 'styled-components'
import Footer from '../../organisms/Footer'
import Header from '../../organisms/Header'
import { PlusOutlined, GooglePlusOutlined, CloseOutlined } from '@ant-design/icons';


const ProfileDetail = () => {
    return (
        <Container className='ProfileDetail'>
            <Header />
            <div className='background'>
                <div className='container'>
                    <div className='main-content grid grid-cols-12'>
                        <div className='profileColumn col-span-4'>
                            <div className='userCard'>
                                <div className='cardContent'>
                                    <div className='userInfo'>
                                        <img src="https://dummyimage.com/150x150" style={{ width: '150px', height: '150px', borderRadius: '50%', margin: '10px auto' }} alt="" />
                                        <p> Thao Nguyen</p>
                                        <button>
                                            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M15.3628 2.30102L13.6796 0.618553C12.8553 -0.205791 11.521 -0.205916 10.6965 0.618522L0.778434 10.4718L0.0102775 15.1279C-0.0733163 15.6346 0.365528 16.0736 0.872371 15.99L5.52846 15.2218L15.3824 5.30374C16.2052 4.4809 16.2131 3.15127 15.3628 2.30102ZM6.26384 9.7364C6.39809 9.87065 6.57406 9.93774 6.75 9.93774C6.92593 9.93774 7.1019 9.87065 7.23615 9.7364L10.9558 6.01671L11.8486 6.90949L6.5625 12.2301V10.9377H5.0625V9.43774H3.77012L9.09072 4.15165L9.9835 5.04443L6.26381 8.76408C5.9954 9.03258 5.9954 9.4679 6.26384 9.7364ZM2.56662 14.3169L1.6834 13.4336L2.06278 11.1341L2.63778 10.5627H3.9375V12.0627H5.4375V13.3624L4.86618 13.9375L2.56662 14.3169ZM14.4099 4.33146L14.4083 4.33305L14.4067 4.33465L12.9058 5.8454L10.1548 3.09446L11.6656 1.59352L11.6672 1.59196L11.6687 1.5904C11.9546 1.30458 12.418 1.30105 12.7073 1.59037L14.3903 3.2733C14.699 3.58196 14.7009 4.04046 14.4099 4.33146Z" /></svg>
                                        </button>


                                    </div>
                                    <div className='btnPreview'>
                                        <button>
                                            Preview Fiverr Profile
                                        </button>


                                    </div>
                                    <div className='userDesc'>
                                        <div className='country'>
                                            <span className='iconSpan'>
                                                <span className="XQskgrQ user-stats-icon" style={{ width: 13, height: 13, fill: '#62646A' }} aria-hidden="true"><svg width={14} height={14} viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0)"><path d="M5.38338 15.6772C0.842813 9.09472 0 8.41916 0 6C0 2.68628 2.68628 0 6 0C9.31372 0 12 2.68628 12 6C12 8.41916 11.1572 9.09472 6.61662 15.6772C6.31866 16.1076 5.68131 16.1076 5.38338 15.6772ZM6 8.5C7.38072 8.5 8.5 7.38072 8.5 6C8.5 4.61928 7.38072 3.5 6 3.5C4.61928 3.5 3.5 4.61928 3.5 6C3.5 7.38072 4.61928 8.5 6 8.5Z" /></g><defs><clipPath id="clip0"><rect width={12} height={16} /></clipPath></defs></svg></span>

                                                From
                                            </span>
                                            <span>Vietnam</span>
                                        </div>
                                        <div className='memberHis'>
                                            <span className='iconSpan'>
                                                <span className="XQskgrQ user-stats-icon" style={{ width: 13, height: 13, fill: '#62646A' }} aria-hidden="true"><svg width={14} height={14} viewBox="0 0 14 16" xmlns="http://www.w3.org/2000/svg"><path d="M7 8C9.20938 8 11 6.20937 11 4C11 1.79063 9.20938 0 7 0C4.79063 0 3 1.79063 3 4C3 6.20937 4.79063 8 7 8ZM9.8 9H9.27812C8.58437 9.31875 7.8125 9.5 7 9.5C6.1875 9.5 5.41875 9.31875 4.72188 9H4.2C1.88125 9 0 10.8813 0 13.2V14.5C0 15.3281 0.671875 16 1.5 16H12.5C13.3281 16 14 15.3281 14 14.5V13.2C14 10.8813 12.1187 9 9.8 9Z" /></svg></span>
                                                Member since
                                            </span>
                                            <span> Dec 2018</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='profileDescription'>
                                <div className='cardContent'>
                                    <div className='Desc'>
                                        <div className='top'>
                                            <h5>Description</h5>
                                            <button>Edit Description</button>
                                        </div>


                                    </div>
                                    <div className='Languages'>
                                        <div className='top'>
                                            <h5>Languages</h5>
                                            <button>Add New</button>
                                        </div>
                                        <p>English - <span>Basic</span></p>

                                    </div>
                                    <div className='LinkedAcc'>
                                        <div className='top'>
                                            <h5>Linked Accounts </h5>
                                        </div>
                                        <ul>
                                            <li> <PlusOutlined className='plus' />Facebook</li>
                                            <li style={{ color: '#555' }}> <GooglePlusOutlined className='google' />Google</li>
                                            <li> <PlusOutlined className='plus' />Dribbble</li>
                                            <li> <PlusOutlined className='plus' />Stack Overflow</li>
                                            <li> <PlusOutlined className='plus' />Github</li>
                                            <li> <PlusOutlined className='plus' />Vimeo</li>
                                            <li> <PlusOutlined className='plus' />Twitter</li>
                                        </ul>

                                    </div>
                                    <div className='Skills'>
                                        <div className='top'>
                                            <h5>Skills</h5>
                                            <button>Add New</button>
                                        </div>
                                        <p>Add your Skills</p>
                                    </div>
                                    <div className='Education'>
                                        <div className='top'>
                                            <h5>Education</h5>
                                            <button>Add New</button>
                                        </div>
                                        <p>Add your Education</p>

                                    </div>
                                    <div className='Certification'>
                                        <div className='top'>
                                            <h5>Certification</h5>
                                            <button>Add New</button>
                                        </div>
                                        <p>Add your Certification</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='gigsColumn col-span-8'>
                            <div className='emptyGigs'>
                                <div className='divContent'>
                                    <span>
                                        <svg width={252} height={104} viewBox="0 0 252 104" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M250.641 96.0005H0.874023V102.711H250.641V96.0005Z" stroke="#222325" strokeWidth="1.5" strokeMiterlimit={10} /><path d="M195.334 0.822754H110.963L92.077 95.9933H176.448L195.334 0.822754Z" stroke="#222325" strokeWidth="1.5" strokeMiterlimit={10} /><path d="M98.027 66.0029H182.398" stroke="#222325" strokeWidth="1.5" strokeMiterlimit={10} /><path d="M77.8599 84.1191H15.3289V96.0006H77.8599V84.1191Z" fill="#222325" stroke="#222325" strokeWidth="1.5" strokeMiterlimit={10} /><path d="M81.2271 74.4419H18.6961V84.1192H81.2271V74.4419Z" stroke="#222325" strokeWidth="1.5" strokeMiterlimit={10} /><path d="M72.4349 59.8315H12.4169V74.4419H72.4349V59.8315Z" stroke="#222325" strokeWidth="1.5" strokeMiterlimit={10} /><path d="M76.4811 50.5669H16.4631V59.8383H76.4811V50.5669Z" stroke="#222325" strokeWidth="1.5" strokeMiterlimit={10} /><path d="M52.2679 59.8315V74.4419" stroke="#222325" strokeWidth="1.5" strokeMiterlimit={10} /><path d="M59.1 59.8315V74.4419" stroke="#222325" strokeWidth="1.5" strokeMiterlimit={10} /><path d="M59.0999 59.8315H52.2679V74.4419H59.0999V59.8315Z" fill="#222325" stroke="#222325" strokeWidth="1.5" strokeMiterlimit={10} /><path d="M22.749 55.1992H69.831" stroke="#222325" strokeWidth="1.5" strokeMiterlimit={10} /><path d="M196.202 69.8657H229.473V79.3541C229.473 83.7653 227.72 87.9959 224.6 91.1151C221.479 94.2343 217.247 95.9867 212.834 95.9867V95.9867C208.422 95.9848 204.192 94.2317 201.073 91.1126C197.954 87.9936 196.202 83.7641 196.202 79.3541V69.8657Z" stroke="#222325" strokeWidth="1.5" strokeMiterlimit={10} /><path d="M229.473 79.354C229.473 83.764 227.721 87.9935 224.602 91.1126C221.483 94.2316 217.253 95.9848 212.841 95.9866V95.9866C208.428 95.9866 204.196 94.2343 201.075 91.115C197.955 87.9958 196.202 83.7652 196.202 79.354" fill="#222325" /><path d="M229.473 79.354C229.473 83.764 227.721 87.9935 224.602 91.1126C221.483 94.2316 217.253 95.9848 212.841 95.9866V95.9866C208.428 95.9866 204.196 94.2343 201.075 91.115C197.955 87.9958 196.202 83.7652 196.202 79.354" stroke="#222325" strokeWidth="1.5" strokeMiterlimit={10} /><path d="M235.416 82.0409C238.532 82.0409 241.058 79.5159 241.058 76.4011C241.058 73.2863 238.532 70.7612 235.416 70.7612C232.3 70.7612 229.774 73.2863 229.774 76.4011C229.774 79.5159 232.3 82.0409 235.416 82.0409Z" stroke="#222325" strokeWidth="1.5" strokeMiterlimit={10} /><path d="M206.751 64.2257C208.235 62.5883 207.787 60.0623 206.751 57.0954C206.403 55.9619 206.371 54.7548 206.658 53.6043C206.945 52.4539 207.542 51.4037 208.382 50.5669" stroke="#222325" strokeWidth="1.5" strokeMiterlimit={10} /><path d="M214.192 64.1067C214.64 61.5806 216.866 59.0616 215.382 55.7939C213.898 52.5261 211.812 51.1896 212.708 46.2915" stroke="#222325" strokeWidth="1.5" strokeMiterlimit={10} /><path d="M219.967 63.4768C219.673 61.6994 220.772 60.356 221.451 57.8789C221.653 57.0598 221.688 56.2085 221.555 55.3755C221.421 54.5425 221.122 53.7448 220.674 53.0298" stroke="#222325" strokeWidth="1.5" strokeMiterlimit={10} /><path d="M114.445 85.8049C117.764 82.7671 118.388 78.0494 115.84 75.2677C113.292 72.486 108.536 72.6936 105.217 75.7314C101.898 78.7693 101.274 83.487 103.822 86.2687C106.37 89.0504 111.126 88.8428 114.445 85.8049Z" stroke="#222325" strokeWidth="1.5" strokeMiterlimit={10} /><path d="M125.558 77.8633H150.289" stroke="#222325" strokeWidth="1.5" strokeMiterlimit={10} /><path d="M124.606 83.2725H141.763" stroke="#222325" strokeWidth="1.5" strokeMiterlimit={10} /><path d="M167.53 74.3018L168.93 78.3602C168.941 78.364 168.954 78.364 168.965 78.3602L173.347 79.095C173.396 79.095 173.403 79.1649 173.347 79.1999L169.553 82.4467C169.549 82.4651 169.549 82.4842 169.553 82.5026L169.455 87.0159C169.455 87.0649 169.392 87.1069 169.35 87.0789L165.633 85.0287H165.577L161.132 87.0789C161.124 87.0891 161.112 87.0956 161.098 87.0969C161.085 87.0982 161.072 87.0942 161.062 87.0859C161.052 87.0775 161.045 87.0655 161.044 87.0523C161.043 87.0392 161.047 87.0261 161.055 87.0159L162.546 82.5026C162.553 82.4846 162.553 82.4647 162.546 82.4467L159.9 79.2349C159.894 79.2251 159.891 79.214 159.89 79.2026C159.89 79.1912 159.892 79.1798 159.897 79.1694C159.901 79.1591 159.909 79.1501 159.918 79.1432C159.927 79.1363 159.938 79.1317 159.949 79.1299L164.59 78.3952C164.608 78.4007 164.628 78.4007 164.646 78.3952L167.446 74.3368C167.453 74.2528 167.516 74.2528 167.53 74.3018Z" fill="#1DBF73" stroke="#1DBF73" strokeMiterlimit={10} /><path d="M104.537 33.1716C109.381 28.1475 128.435 17.7775 140.685 30.7156C152.935 43.6536 161.3 44.2134 171.8 38.9794C182.3 33.7454 188.523 35.3058 188.523 35.3058" stroke="#222325" strokeWidth="1.5" strokeMiterlimit={10} /><path d="M173.662 0.822754C173.662 0.822754 147.062 35.5364 185.562 49.8949" stroke="#222325" strokeWidth="1.5" strokeMiterlimit={10} /><path d="M137.859 28.4066C141.674 24.9146 142.392 19.4915 139.462 16.2937C136.533 13.0958 131.066 13.3342 127.251 16.8262C123.436 20.3181 122.718 25.7413 125.647 28.9391C128.577 32.137 134.044 31.8986 137.859 28.4066Z" fill="#222325" stroke="#222325" strokeWidth="1.5" strokeMiterlimit={10} /><path d="M120.217 46.8441C123.241 54.7301 133.398 58.1727 142.897 54.5411C152.396 50.9095 157.66 41.5681 154.636 33.6611L120.217 46.8441Z" stroke="#222325" strokeWidth="1.5" strokeMiterlimit={10} /></svg>
                                    </span>
                                    <h4>It seems that you don't have any active Gigs</h4>
                                    <button> Create a new Gig</button>
                                </div>

                            </div>
                            <div className='GigLists'>
                                <div className='Lists'>
                                    <div className='listDetail'>
                                        <img style={{ width: '200px', height: '150px' }} src="https://dummyimage.com/200x150/" alt="" />
                                        <div className='listContent'>
                                            <h2>Front end web development</h2>
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore dignissimos numquam exercitationem assumenda asperiores, blanditiis hic voluptatum magni nemo optio accusamus. Mollitia distinctio iure vel repudiandae quos officiis? Voluptatem, alias.</p>
                                            <div className='buttonBar'>
                                                <button className='viewDetail'>View detail</button>
                                                <button className='edit'>Edit</button>
                                                <button className='close'><CloseOutlined /> </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </Container>
    )
}

export default ProfileDetail


export const Container = styled.div`
&.ProfileDetail {
    .background {
        background-color: #f7f7f7;
        padding-top: 24px!important;
        padding-bottom: 24px!important;
        .container {
            .main-content {
                .profileColumn {
                    .cardContent {
                        padding: 36px 36px;
                    }
                    .userCard {
                        background-color: #fff;
                        border: 1px solid #dadbdd;
                        text-align: center;   
                            .userInfo{
                                p {
                                    font-size: 20px;
                                    font-weight: 500;
                                    color: #222325;
                                    margin-bottom: 8px;
                                }
                                button {
                                    svg {
                                        fill:#B5B6BA;
                                        &:hover {
                                        fill: #62646a;
                                    }
                                    }
                                  
                                    
                                   
                                }

                        }
                        .btnPreview {
                            border:1px solid #62646a ;
                            padding: 8px 50px;
                            color: #62646a;
                            border-radius: 5px;
                            margin-bottom: 20px;
                         

                        }
                        .userDesc {
                            border-top: 1px solid #dadbdd;
                            font-size: 14px;
                            .iconSpan {
                                display: flex;
                                align-items: center; 
                                color:#62646a;
                                font-weight: 400!important;
                                span {
                                 margin-right: 8px;
                                }
                            }
                            .country {
                                margin-top: 24px;
                                display: flex;
                                justify-content: space-between;
                                span {
                                    color:#62646a;
                                    font-weight: 700;
                                }

                            }
                            .memberHis {
                                margin-top: 16px;
                                     display: flex;
                                justify-content: space-between;
                                span {
                                    color:#62646a;
                                    font-weight: 700;
                                }

                            }

                        }
                        
                    }
                .profileDescription {
                    background-color: #fff;
                        border: 1px solid #dadbdd;
                        text-align: center;
                        margin: 24px 0;
                        p {
                            text-align: left;
                            margin: 20px 0;
                            color: #b2b2b2;
                        }
                        .top {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            h5 {
                                margin-bottom: 0;
                                font-size: 16px;
                                font-weight: 700;
                               
                            }
                            button {
                                color :#00698c;
                                &:hover {
                                    text-decoration: underline;

                                }
                            }
                        }
                        .Desc {
                            padding-bottom: 50px;
                            border-bottom: 1px solid #dadbdd

                        }
                        .Languages {
                            margin-top: 30px;
                            padding-bottom: 20px;
                            border-bottom: 1px solid #dadbdd;
                            p {
                                text-align: left;
                                margin-top: 8px;
                                color :#555;
                            
                                span {
                                    color:#b2b2b2;

                                }
                            }

                        }
                        .LinkedAcc {
                            margin-top: 30px;
                            border-bottom: 1px solid #dadbdd;
                            ul {
                                text-align: left;
                                margin-bottom: 24px;
                                li {
                                    align-items: center;
                                    display: flex;
                                    color:#00698c;
                                    margin: 12px 0;
                                    .plus {
                                    margin-right: 10px;
                                    width: 12px;
                                    height: 12px;
                                   
                                    }
                                    .google{
                                        margin-right: 10px;
                                    width: 12px;
                                    height: 12px;
                                    color: #555;

                                    }
                                }
                            }

                        }
                        .Skills {
                            margin-top: 30px;
                            border-bottom: 1px solid #dadbdd

                        }
                        .Education {
                            margin-top: 30px;
                            border-bottom: 1px solid #dadbdd

                        }
                        .Certification {
                            margin-top: 30px;

                        }

                }
               
            }
            .gigsColumn {
                        margin-left: 100px;
                        .emptyGigs{
                        border: 1px solid #dadbdd;
                        text-align: center;
                        background-color: #fff;
                        .divContent {
                            padding: 36px 36px;
                            text-align: center;
                            span {
                                svg {
                                    margin: 20px auto;
                                }
                            }
                            h4 {
                                font-size: 18px;
                                font-weight: 600;
                                margin: 12px 0;
                            }
                            button {
                                margin: 12px 0;
                                padding: 10px 30px;
                                background-color: #1dbf73;
                                color: #fff;
                                font-weight: 700;
                                font-size: 16px;
                                border-radius: 5px;
                                &:hover {
                                    box-shadow: 0 2px 5px 1px rgb(0 0 0 / 30%);
                                    transition: all 0.5s;
                                }
                            }
                        }
                        }
                        .GigLists{
                        margin-top: 30px;
                        border: 1px solid #dadbdd;
                        text-align: center;
                        background-color: #fff;
                        .Lists {
                            padding: 16px;
                            .listDetail {
                                display: flex;
                                justify-content: space-between;
                                .listContent {
                                    text-align: left;
                                    margin-left: 24px;
                                    h2 {
                                        color: #62646a;
                                        font-weight: 700;
                                        font-size: 20px;

                                    }
                                    .buttonBar {
                                        text-align: right;
                                        button {
                                            margin-left: 24px;
                                           
                                            }
                                            .viewDetail {
                                                padding: 8px 20px;
                                background-color: #1dbf73;
                                color: #fff;
                                font-weight: 600;
                                border-radius: 5px;
                                        }
                                        .edit {
                                            padding: 8px 20px;
                                background-color: #ffbe5b;
                                color: #fff;
                                font-weight: 600;
                                border-radius: 5px;

                                        }
                                        .close {
                                            padding: 8px 15px;
                                background-color: red;
                                color: #fff;
                                font-weight: 600;
                                border-radius: 5px;
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
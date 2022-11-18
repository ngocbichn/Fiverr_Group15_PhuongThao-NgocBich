import React from 'react'
import pic1 from '../../../assets/images/feature/logodesign.png'
import pic2 from '../../../assets/images/feature/wordpress.png'
import pic3 from '../../../assets/images/feature/voiceover.png'
import pic4 from '../../../assets/images/feature/videoexplainer.png'
import pic5 from '../../../assets/images/feature/socialmedia.png'
import { Link } from 'react-router-dom'

const Feature = () => {
    return (
        <div className="feature_services mb-96">
            <div className="container">
                <h2 className="text-32 font-bold pb-24" style={{ color: '#404145' }}>Popular professional services</h2>
                <div>
                    <div className="grid grid-cols-1 gap-24 lg:grid-cols-5 sm:grid-cols-2">
                        <div className="category_block relative flex items-end justify-start w-full text-left bg-center bg-cover h-345 opacity-100 hover:opacity-90 transition-all
               cursor-pointer rounded" style={{ backgroundImage: `url(${pic1})` }}>
                            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
                            <div className="absolute top-0 left-0 right-0 p-16">
                                <h6 className="text-14 font-medium text-white m-0 tracking-tight">Build your brand</h6>
                                <Link to="/categories" className="text-22 font-bold text-white m-0 hover:text-white">Logo Design</Link>
                            </div>
                        </div>
                        <div className="category_block relative flex items-end justify-start w-full text-left bg-center bg-cover h-345 opacity-100 hover:opacity-90 transition-all cursor-pointer rounded" style={{ backgroundImage: `url(${pic2})` }}>
                            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
                            <div className="absolute top-0 left-0 right-0 p-16">
                                <h6 className="text-14 font-medium text-white m-0 tracking-tight">Customize your site</h6>
                                <Link to="/categories" className="text-22 font-bold text-white m-0 hover:text-white">WordPress</Link>
                            </div>
                        </div>
                        <div className="category_block relative flex items-end justify-start w-full text-left bg-center bg-cover h-345 opacity-100 hover:opacity-90 transition-all cursor-pointer rounded" style={{ backgroundImage: `url(${pic3})` }}>
                            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
                            <div className="absolute top-0 left-0 right-0 p-16">
                                <h6 className="text-14 font-medium text-white m-0 tracking-tight">Share your message</h6>
                                <Link to="/categories" className="text-22 font-bold text-white m-0 hover:text-white">Voice Over</Link>
                            </div>
                        </div>
                        <div className="category_block relative flex items-end justify-start w-full text-left bg-center bg-cover h-345 opacity-100 hover:opacity-90 transition-all cursor-pointer rounded" style={{ backgroundImage: `url(${pic4})` }}>
                            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
                            <div className="absolute top-0 left-0 right-0 p-16">
                                <h6 className="text-14 font-medium text-white m-0 tracking-tight">Engage your audience</h6>
                                <Link to="/categories" className="text-22 font-bold text-white m-0 hover:text-white">Video Explainer</Link>
                            </div>
                        </div>
                        <div className="category_block relative flex items-end justify-start w-full text-left bg-center bg-cover h-345 opacity-100 hover:opacity-90 transition-all cursor-pointer rounded" style={{ backgroundImage: `url(${pic5})` }}>
                            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
                            <div className="absolute top-0 left-0 right-0 p-16">
                                <h6 className="text-14 font-medium text-white m-0 tracking-tight">Reach more customers</h6>
                                <Link to="/categories" className="text-22 font-bold text-white m-0 hover:text-white">Social Media</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature
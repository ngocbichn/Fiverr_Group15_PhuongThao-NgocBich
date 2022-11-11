import React from 'react'

const Stats = () => {
    return (
        <div className="stats_brand mb-96 relative" style={{ backgroundColor: '#fafafa' }}>
            <div className="container flex justify-center items-center">
                <span className="pr-30 font-semibold text-16" style={{ color: '#b5b6ba' }}>Trusted by:</span>
                <ul className="md:flex mb-0 flex justify-center items-center h-96">
                    <li className="pr-60">
                        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook.31d5f92.png" />
                    </li>
                    <li className="pr-60">
                        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google.517da09.png" />
                    </li>
                    <li className="pr-60">
                        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix.e3ad953.png" />
                    </li>
                    <li className="pr-60">
                        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg.8b7310b.png" />
                    </li>
                    <li className="pr-60">
                        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal.ec56157.png" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Stats
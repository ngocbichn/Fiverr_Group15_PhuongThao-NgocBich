


import React, { Component } from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';






// const SlickSlider = () => {
//     const [nav1, setNav1] = useState;
//   const [nav2, setNav2] = useState();

//     return (
//     <div>
//       <h2>Slider Syncing (AsNavFor)</h2>
//       <h4>First Slider</h4>
//       <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
//         <div>
//           <h3>1</h3>
//         </div>
//         <div>
//           <h3>2</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>5</h3>
//         </div>
//         <div>
//           <h3>6</h3>
//         </div>
//       </Slider>
//       <h4>Second Slider</h4>
//       <Slider
//         asNavFor={nav1}
//         ref={(slider2) => setNav2(slider2)}
//         slidesToShow={3}
//         swipeToSlide={true}
//         focusOnSelect={true}
//       >
//         <div>
//           <h3>1</h3>
//         </div>
//         <div>
//           <h3>2</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>5</h3>
//         </div>
//         <div>
//           <h3>6</h3>
//         </div>
//       </Slider>
//     </div>
//   );


// }

// export default SlickSlider

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                {/* <h2> Single Item</h2> */}
                <Slider {...settings}>
                   
                    <div className='imageCarousel'>
                        <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/116856649/original/a5945e0c694538f4e36215017d623873aac3ce67/edit-html-and-css-on-your-webpage.png" alt="" />
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                   
                    
                </Slider>
            </div>
        );
    }
}

export const Container = styled.div`
&.Slider {
    .slider-container {
  display: inline-block;
}
}
`

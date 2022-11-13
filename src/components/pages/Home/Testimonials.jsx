import React from "react";
import styled from "styled-components";
import logo from "../../../assets/images/logo_brands/rooted-logo-x2.321d79d.png";
import thumbnail from "../../../assets/images/videoThumbnail/testimonial-video-still-rooted.png";

const Testimonials = () => {
    return (
        <div className="testimonials mb-96">
            <div className="container">
                <div className="testimonials_content flex gap-60">
                    <div className="video_thumbnail w-2/5">
                        <img
                            src={`${thumbnail}`}
                            alt="thumbnail"
                            className="rounded w-full h-full cursor-pointer"
                        />
                    </div>
                    <div className="text w-3/5 flex flex-col justify-center ">
                        <h5
                            className="font-medium text-20 pb-16 flex justify-start items-center"
                            style={{ color: "#74767e" }}
                        >
                            <span>Kay Kim, Co-Founder</span>
                            <span
                                className="testimonials_logo h-36 ml-16 flex items-center pl-12"
                                style={{ borderLeft: "1px solid #c5c6c9" }}
                            >
                                <img src={`${logo}`} alt="logo" className="h-34" />
                            </span>
                        </h5>
                        <blockquote
                            class="text-20 leading-44 inline-block"
                            style={{ color: "#003912" }}
                        >
                            <i className="font-medium">
                                "It's extremely exciting that Fiverr has freelancers from all
                                over the world — it broadens the talent pool. One of the best
                                things about Fiverr is that while we're sleeping, someone's
                                working."
                            </i>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;

export const Container = styled.div`
  &.testimonials {
    .container {
      .testimonials_content {
        .video_thumbnail {
          
        }
      }
    }
  }
`;

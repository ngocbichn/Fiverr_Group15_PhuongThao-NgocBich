import React from "react";
import styled from "styled-components";

const Category = () => {
    return (
        <Container className="categories mb-96">
            <div className="container">
                <h2 className="text-32 font-bold mb-50" style={{ color: "#404145" }}>
                    Explore the marketplace
                </h2>
                <ul className="category_list flex flex-wrap">
                    <li className="px-10 pb-32" style={{ width: "20%" }}>
                        <a className="">
                            <img
                                className="w-48 h-48  block"
                                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                                alt="categoryImg1"
                            />
                            <p>Graphics & Design</p>
                        </a>
                    </li>
                    <li className="px-10 pb-32" style={{ width: "20%" }}>
                        <a className="">
                            <img
                                className="w-48 h-48  block"
                                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
                                alt="categoryImg2"
                            />
                            <p>Digital Marketing</p>
                        </a>
                    </li>
                    <li className="px-10 pb-32" style={{ width: "20%" }}>
                        <a className="">
                            <img
                                className="w-48 h-48  block"
                                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
                                alt="categoryImg3"
                            />
                            <p>Writing & Translation</p>
                        </a>
                    </li>
                    <li className="px-10 pb-32" style={{ width: "20%" }}>
                        <a className="">
                            <img
                                className="w-48 h-48  block"
                                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
                                alt="categoryImg4"
                            />
                            <p>Video & Animation</p>
                        </a>
                    </li>
                    <li className="px-10 pb-32" style={{ width: "20%" }}>
                        <a className="">
                            <img
                                className="w-48 h-48  block"
                                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
                                alt="categoryImg6"
                            />
                            <p>Programming & Tech</p>
                        </a>
                    </li>
                    <li className="px-10 pb-32" style={{ width: "20%" }}>
                        <a className="">
                            <img
                                className="w-48 h-48  block"
                                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
                                alt="categoryImg7"
                            />
                            <p>Business</p>
                        </a>
                    </li>
                    <li className="px-10 pb-32" style={{ width: "20%" }}>
                        <a className="">
                            <img
                                className="w-48 h-48  block"
                                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                                alt="categoryImg8"
                            />
                            <p>Lifestyle</p>
                        </a>
                    </li>
                    <li className="px-10 pb-32" style={{ width: "20%" }}>
                        <a className="">
                            <img
                                className="w-48 h-48  block"
                                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
                                alt="categoryImg9"
                            />
                            <p>Data</p>
                        </a>
                    </li>
                </ul>
            </div>
        </Container>
    );
};

export default Category;

export const Container = styled.div`
  &.categories {
    .container {
      .category_list {
        li {
          padding-bottom: 55px;
          a {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transition: color .5s;

            &:hover::after {
                width: 78px;
                border-bottom: 2px solid #1dbf73;
              /* transition: border-color 0.2s ease-in-out,
                padding 0.2s ease-in-out; */
            }

            &::after {
              content: "";
              position: absolute;
              top: 45px;
              right: 50%;
              -webkit-transform: translateX(50%);
              transform: translateX(50%);
              padding: 0 0 8px;
              width: 48px;
              border-bottom: 2px solid #c5c6c9;
              transition: border-color .4s ease-in-out,padding .4s ease-in-out;
            }
            img {
              display: block;
            }
            p {
              position: relative;
              top: 20px;
              color:#222325;
              font-weight: 500; 
              font-size: 16px;
            }
          }
        }
      }
    }
  }
`;

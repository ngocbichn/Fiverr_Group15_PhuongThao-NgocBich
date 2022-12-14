import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderHomePage = () => {

    const navigate = useNavigate()

    return (
        <Container className="HeaderHomePage text-black">
            <div className="container flex justify-between mx-auto h-80">
                <a className="logo md:text-20" onClick={() => { navigate("/home") }}>
                    <svg
                        width="89"
                        height="27"
                        viewBox="0 0 89 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g fill="#fff">
                            <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path>
                        </g>
                        <g fill="#1dbf73">
                            <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path>
                        </g>
                    </svg>
                </a>
                <ul className="nav-list space-x-3 md:flex mb-0 flex items-center">
                    <li className="px-10">
                        <NavLink
                            to="/worklist"
                            className="flex items-center px-4 sm:text-10"
                        >
                            Explore
                        </NavLink>
                    </li>
                    <li className="px-10">
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            className="flex items-center px-4 sm:text-10"
                        >
                            Become a Seller
                        </a>
                    </li>
                    <li className="px-10">
                        <NavLink
                            to="/signin"
                            className="flex items-center px-4"
                        >
                            Sign In
                        </NavLink>
                    </li>
                    <li className="px-10">
                        <NavLink
                            to="/signup"
                            className="button_LogIn flex items-center"
                        >
                            Join
                        </NavLink>
                    </li>
                </ul>
                <button className="flex justify-end p-4 md:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </button>
            </div>
        </Container>
    );
};

export default HeaderHomePage;

export const Container = styled.div`
  &.HeaderHomePage {
    margin-bottom: 0;
    .container {
      max-width: 1280px;
      padding: 0 15px;
      margin: auto;
      box-sizing: border-box;

      .logo {
        color: #fff;
        font-weight: 900;
        font-size: 40px;
        display:flex;
        align-items:center;
      }
      .nav-list {
        li {
          a {
            color: #fff;
            font-weight: 700;
            font-size: 16px;
            &:hover {
              color: #1dbf73;
            }
          }
          .button_LogIn {
            padding: 5px 20px;
            font-weight: 700;
            color: #fff;
            border: solid 1px #fff;
            border-radius: 4px;
            text-align: center;
            transition: all ease 0.5s;
            &:hover {
              background-color: #1dbf73;
              border: solid 1px #1dbf73;
              color: #fff;
            }
          }
        }
      }
    }
  }
`;

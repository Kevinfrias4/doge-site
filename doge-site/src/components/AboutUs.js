import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useViewportScroll, useTransform, useMotionValue } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutUs = () => {
    return (
        <About>
            <img  className='bg' src="https://cdn.vox-cdn.com/thumbor/LnZBYRc6OrEIUoCmueGMiTov_Yo=/1388x0:6010x2600/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/56352923/Fetch_Park_8.24.17.0.jpg" alt=""/>
            <Home>
                <h1>Every good <span>DOG</span></h1>
                <h1>deserves a</h1>
                <h1>good <span>HOME</span></h1>
                <img src="https://www.seekpng.com/png/full/170-1700728_svg-black-and-white-library-welcome-to-cat.png" alt=""/>
            </Home>
        </About>
    );
}

const About = styled.div`
    width: 100%;
    min-height: 190vh;
    align-items: center;
    justify-content: space-between;
    .bg {
        z-index: -1;
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Home = styled.div`
    //background: black;
    width: 50%;
    padding-top: 7rem;
    padding-left: 13rem;
    align-self: center;
    h1 {
        font-weight: lighter;
        font-size: 80px;
        margin: 0;
        color: #dbdbdb;
    }
    span {
        font-weight: bold;
        letter-spacing: 10px;
        font-size: 80px;
        color: #39c8eb;
    }
    img {
        transform: scale(1.33);
        padding-left: 30rem;
        object-fit: cover;
    }
`;

export default AboutUs;

//<img src={'https://www.seekpng.com/png/full/170-1700728_svg-black-and-white-library-welcome-to-cat.png'}></img>
//<img src={'https://cdn.vox-cdn.com/thumbor/LnZBYRc6OrEIUoCmueGMiTov_Yo=/1388x0:6010x2600/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/56352923/Fetch_Park_8.24.17.0.jpg'}></img>
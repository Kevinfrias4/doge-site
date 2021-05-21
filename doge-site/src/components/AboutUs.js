import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useViewportScroll, useTransform, useMotionValue } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutUs = () => {

    const { scrollY } = useViewportScroll();
    const y1 = useTransform(scrollY, [0, 1300], [0, 900]);
    const y2 = useTransform(scrollY, [0, 1600], [0, -1400]);

    const [ref, inView, entry] = useInView({
        /* Optional options */
        threshold: 0.4,
        triggerOnce: false
    });

    const variants = {
        visible: { opacity: 1, scale: 1.2, y: -100, x: 150 },
        hidden: {
          opacity: 0,
          scale: 0.65,
          y: -100,
          x: 150
        }
    };

    return (
        <>
        <About>
            <motion.img style={{y: y2}} className='bg' src="https://cdn.vox-cdn.com/thumbor/LnZBYRc6OrEIUoCmueGMiTov_Yo=/1388x0:6010x2600/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/56352923/Fetch_Park_8.24.17.0.jpg" alt=""/>
            <Home>
                <h1>Every good <span>DOG</span></h1>
                <h1>deserves a</h1>
                <h1>good <span>HOME</span></h1>
                <motion.img style={{y: y1}} src="https://www.seekpng.com/png/full/170-1700728_svg-black-and-white-library-welcome-to-cat.png" alt=""/>
            </Home>
        </About>
        <AboutSection animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 2, ease: 'easeOut' }}
        ref={ref}>
                <h2>Our Purpose</h2>
                <p>Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Asperiores, a maiores corrupti alias necessitatibus,
                    officia omnis eaque eveniet quos, architecto optio! Quasi,
                    sequi nulla? Voluptas velit, laudantium tenetur dolore, 
                    quae quis suscipit fugiat, animi rem magnam optio? 
                    Soluta, eveniet quaerat!
                </p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Sapiente, consequuntur. Architecto ipsa qui maiores magni 
                    aspernatur labore delectus laboriosam quos? Lorem ipsum dolor sit amet, 
                    consectetur adipisicing elit. Unde, vero!
                </p>

        </AboutSection>
        </>
    );
}

const About = styled.div`
    width: 100%;
    min-height: 90vh;
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
    padding-top: 8rem;
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
        position: fixed;
        transform: scale(1.35);
        padding-left: 35rem;
        object-fit: cover;
        z-index: 10;
    }
`;

const AboutSection = styled(motion.div)`
    width: 80%;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    h2 {
        color: #39c8eb;
    }
`;

export default AboutUs;

//<img src={'https://www.seekpng.com/png/full/170-1700728_svg-black-and-white-library-welcome-to-cat.png'}></img>
//<img src={'https://cdn.vox-cdn.com/thumbor/LnZBYRc6OrEIUoCmueGMiTov_Yo=/1388x0:6010x2600/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/56352923/Fetch_Park_8.24.17.0.jpg'}></img>
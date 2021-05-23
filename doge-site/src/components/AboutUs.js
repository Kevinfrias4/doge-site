import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useViewportScroll, useTransform, useMotionValue } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { moveIn, back, dog, lights, text } from '../animations';

const AboutUs = () => {

    const { scrollY } = useViewportScroll();
    const y1 = useTransform(scrollY, [0, 1300], [0, 900]);
    const y2 = useTransform(scrollY, [0, 1600], [0, -1400]);
    const y3 = useTransform(scrollY, [0, 1600], [0, -3800]);

    const [ref, inView, entry] = useInView({
        /* Optional options */
        threshold: 0.4,
        triggerOnce: false
    });

    return (
        <>
            <About>
                <motion.img variants={back} animate='show' initial='hidden' style={{y: y2}} className='bg' src="https://cdn.vox-cdn.com/thumbor/LnZBYRc6OrEIUoCmueGMiTov_Yo=/1388x0:6010x2600/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/56352923/Fetch_Park_8.24.17.0.jpg" alt=""/>
                <motion.img variants={lights} animate='show' initial='hidden' style={{y: y3}} className='bone' src="https://lh3.googleusercontent.com/proxy/Y14Z-s5VDlUdWwAa0my7bSWMAoA9iz11zU2IjB1-gnuWJEwKi0-oQCzJc7RZQZDdYOm6R7zDq6Rsmwp-r6epV_52T-zHNfY2V9RjuPKsXE1EGUu7bgPX5BvPYuUJ1250A4TzB46N=s0-d" alt=""/>
                <Home>
                    <motion.h1 variants={text} animate='show' initial='hidden'>Every good <span>DOG</span></motion.h1>
                    <motion.h1 variants={text} animate='show' initial='hidden'>deserves a</motion.h1>
                    <motion.h1 variants={text} animate='show' initial='hidden'>good <span>HOME</span></motion.h1>
                    <motion.img variants={dog} animate='show' initial='hidden' style={{y: y1}} className='dog' src="https://www.seekpng.com/png/full/170-1700728_svg-black-and-white-library-welcome-to-cat.png" alt=""/>
                </Home>
            </About>
            <AboutSection 
                animate={inView ? 'visible' : 'hidden'}
                variants={moveIn}
                transition={{ duration: 2, ease: 'easeOut' }}
                ref={ref}
            >
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
                <img className='doge' src="https://image.freepik.com/free-vector/cute-welsh-corgi-dog-waving-paw-cartoon_42750-623.jpg" alt=""/>
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
    .bone {
        width: 100%;
        z-index: -1;
        position: absolute;
        object-fit: cover;
    }
`;

const Home = styled.div`
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
    .dog {
        position: fixed;
        transform: scale(1.35);
        padding-left: 35rem;
        object-fit: cover;
        z-index: 10;
    }
`;

const AboutSection = styled(motion.div)`
    width: 70%;
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    overflow: hidden;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 10px 12px 0px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    border-radius: 20px;
    padding-left: 1rem;
    padding-right: 1rem;
    h2 {
        color: #39c8eb;
    }
    .doge {
        position: fixed;
        transform: scale(0.2)
                translateY(1050px)
                translateX(-900px);
        z-index: -2;
    }
`;

export default AboutUs;

//<img src={'https://www.seekpng.com/png/full/170-1700728_svg-black-and-white-library-welcome-to-cat.png'}></img>
//<img src={'https://cdn.vox-cdn.com/thumbor/LnZBYRc6OrEIUoCmueGMiTov_Yo=/1388x0:6010x2600/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/56352923/Fetch_Park_8.24.17.0.jpg'}></img>
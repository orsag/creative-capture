import React from 'react'
import home1 from '../img/home1.png'
import {AboutRoot, Description, Image, Hide} from '../styles'
import {motion} from 'framer-motion'
import { titleAnimation, fadeAnimation, photoAnimation } from '../animation'

const AboutSection = () => {
    // const titleAnimation = {
    //     hidden: { opacity: 0 },
    //     show: { opacity: 1, transition: { duration: 2 }},
    // };
    // const container = {
    //     hidden: { x: 100 },
    //     show: { x: 0, transition: { duration: 1, ease: 'easeOut' }, staggerChildren: 1 },
    // };

    return (
        <AboutRoot>
            <Description>
                <motion.div className="title">
                    <Hide>
                        <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>your <span>dreams</span> </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>come true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fadeAnimation}>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.</motion.p>
                <motion.button variants={fadeAnimation}>Contact Us</motion.button>
            </Description>
            <Image>
                <motion.img
                    src={home1}
                    alt="guy with a camera"
                    variants={photoAnimation}
                />
            </Image>
        </AboutRoot>
    )
}

// Styled Components


export default AboutSection;

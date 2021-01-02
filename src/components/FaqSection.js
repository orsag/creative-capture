import React from "react";
import styled from "styled-components"
import {AboutRoot} from "../styles";
import Toggle from "./Toggle";
import {AnimateSharedLayout} from 'framer-motion'
import {fadeAnimation, scrollReveal} from "../animation";
import {motion} from 'framer-motion'
import {useScroll} from './useScroll'

const FaqSection = () => {
    const [element, controls] = useScroll();

    return (
        <Faq ref={element} variants={scrollReveal} animate={controls} initial="hidden">
            <h2>Any questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toggle title="How do I start?">
                    <div className="answer">
                        <motion.p variants={fadeAnimation}>Lorem ipsum dolor sit amet.</motion.p>
                        <motion.p variants={fadeAnimation}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, iure.</motion.p>
                    </div>
                </Toggle>
                <Toggle title="Daily Schedule?">
                    <div className="answer">
                        <motion.p variants={fadeAnimation}>Lorem ipsum dolor sit amet.</motion.p>
                        <motion.p variants={fadeAnimation}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, iure.</motion.p>
                    </div>
                </Toggle>
                <Toggle title="Different Payment Methods?">
                    <div className="answer">
                        <motion.p variants={fadeAnimation}>Lorem ipsum dolor sit amet.</motion.p>
                        <motion.p variants={fadeAnimation}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam, at blanditiis dolor
                            dolorum fuga in ipsa itaque
                            laborum magnam obcaecati placeat porro provident rem repellendus ullam unde vel
                            voluptatibus.</motion.p>
                    </div>
                </Toggle>
                <Toggle title="What product do you offer?">
                    <div className="answer">
                        <motion.p variants={fadeAnimation}>Lorem ipsum dolor sit amet.</motion.p>
                        <motion.p variants={fadeAnimation}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, iure.</motion.p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </Faq>
    )
};

const Faq = styled(AboutRoot)`
  display: block;

  span {
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }

  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0;

    p {
      padding: 1rem 0;
    }
  }
`;

export default FaqSection;

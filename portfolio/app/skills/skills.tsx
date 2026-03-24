"use client"

import React, { useContext } from 'react';
import Marquee from "react-fast-marquee";

import './Skills.css';

// import { ThemeContext } from '../contexts/ThemeContext';
import { skillsData } from './skillsData';
import { skillsImage } from './skillsImage';
import { motion } from "framer-motion";


function Skills() {

    // const { theme } = useContext(ThemeContext);

    // const skillBoxStyle = {
    //     backgroundColor: theme.secondary,
    //     boxShadow: `0px 0px 30px ${theme.primary30}`
    // }

    return (
        <motion.section id ="skills"className="skills snap-start" >
            <div className="skillsHeader">
                <h2 >Skills</h2>
            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee 
                        gradient={false} 
                        speed={80} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <div className="skill--box" key={id} >
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3 >
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </motion.section>
    )
}

export default Skills

"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaCode } from 'react-icons/fa';
import PropTypes from 'prop-types';

import placeholder from '../../assets/png/placeholder.png';
import './SingleProject.css';

function SingleProject({ id, name, desc, tags, code, demo, image, theme }) {
    const slug = name.replace(' ', '-').toLowerCase();

    const iconBtnStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: 50,
        border: `2px solid ${theme.tertiary}`,
        color: theme.tertiary,
        transition: 'all 0.2s',
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            key={id}
            className='singleProject'
            style={{ backgroundColor: theme.primary400 }}
        >
            <div className='projectContent'>
                <h2 id={slug} style={{ color: theme.tertiary }}>
                    {name}
                </h2>
                <img src={image ? image : placeholder.src} alt={name} />
                <div className='project--showcaseBtn'>
                    <motion.a
                        href={demo}
                        target='_blank'
                        rel='noreferrer'
                        style={iconBtnStyle}
                        whileHover={{
                            backgroundColor: theme.secondary,
                            color: theme.primary,
                            scale: 1.1,
                            border: `2px solid ${theme.secondary}`,
                        }}
                        aria-labelledby={`${slug} ${slug}-demo`}
                    >
                        <FaPlay id={`${slug}-demo`} aria-label='Demo' />
                    </motion.a>
                    <motion.a
                        href={code}
                        target='_blank'
                        rel='noreferrer'
                        style={iconBtnStyle}
                        whileHover={{
                            backgroundColor: theme.secondary,
                            color: theme.primary,
                            scale: 1.1,
                            border: `2px solid ${theme.secondary}`,
                        }}
                        aria-labelledby={`${slug} ${slug}-code`}
                    >
                        <FaCode id={`${slug}-code`} aria-label='Code' />
                    </motion.a>
                </div>
            </div>
            <p className='project--desc' style={{ background: theme.secondary, color: theme.tertiary }}>
                {desc}
            </p>
            <div className='project--lang' style={{ background: theme.secondary, color: theme.tertiary80 }}>
                {tags.map((tag, id) => (
                    <span key={id}>{tag}</span>
                ))}
            </div>
        </motion.div>
    );
}

SingleProject.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string.isRequired,
    desc: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    code: PropTypes.string,
    demo: PropTypes.string,
    image: PropTypes.string,
    theme: PropTypes.object.isRequired,
};

export default SingleProject;
import React, { useContext } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';

const About = () => {
    const { personalInfo, skills } = useContext(PortfolioContext);

    return (
        <section id="about" className="section about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>{personalInfo.bio}</p>
                        <p>
                            I specialize in building modern web applications using the latest technologies.
                            I focus on creating intuitive and dynamic user experiences.
                        </p>
                    </div>
                    <div className="skills">
                        <h3>Skills</h3>
                        <div className="skills-list">
                            {skills.map((skill, index) => (
                                <span key={index} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

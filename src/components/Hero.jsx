import React, { useContext } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';

const Hero = () => {
    const { personalInfo } = useContext(PortfolioContext);

    return (
        <section id="hero" className="hero">
            <div className="container hero-content">
                <h1>Hi, I'm <span className="highlight">{personalInfo.name}</span></h1>
                <h2>{personalInfo.role}</h2>
                <p>{personalInfo.bio}</p>
                <div className="hero-buttons">
                    <button className="btn primary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>View Work</button>
                    <button className="btn secondary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Contact Me</button>
                    <a href={personalInfo.contact.resume} target="_blank" rel="noopener noreferrer" className="btn secondary">Resume</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;

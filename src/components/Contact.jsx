import React, { useContext } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';

const Contact = () => {
    const { personalInfo } = useContext(PortfolioContext);

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="contact-text">
                    I'm currently open to new opportunities. Whether you have a question or just want to say hi,
                    I'll try my best to get back to you!
                </p>
                <div className="contact-links">
                    <a href={`mailto:${personalInfo.contact.email}`} className="btn primary">Say Hello</a>
                    <div className="social-links">
                        <a href={personalInfo.contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href={personalInfo.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

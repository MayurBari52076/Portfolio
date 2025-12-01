import React, { useContext } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';

const Footer = () => {
    const { personalInfo } = useContext(PortfolioContext);
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-content">
                <p>&copy; {year} {personalInfo.name}. All rights reserved.</p>
                <p>Built with React & Vanilla CSS</p>
            </div>
        </footer>
    );
};

export default Footer;

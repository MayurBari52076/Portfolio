import React, { useContext } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';

const Header = () => {
    const { personalInfo } = useContext(PortfolioContext);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="header">
            <div className="container header-content">
                <div className="logo">{personalInfo.name}</div>
                <nav className="nav">
                    <button onClick={() => scrollToSection('hero')}>Home</button>
                    <button onClick={() => scrollToSection('about')}>About</button>
                    <button onClick={() => scrollToSection('projects')}>Projects</button>
                    <button onClick={() => scrollToSection('contact')}>Contact</button>
                </nav>
            </div>
        </header>
    );
};

export default Header;

import React, { createContext, useState } from 'react';
import taskManagerImg from './task_manager.jpg';
import imageResizerImg from './image_resizer.png';
import recipeFinderImg from './recipe_finder.png';

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
    const [personalInfo] = useState({
        name: 'Mayur Bari',
        role: 'Frontend Developer',
        bio: 'I build accessible, pixel-perfect, and performant web experiences. Passionate about React, UI/UX, and clean code.',
        contact: {
            email: 'mayurgbari52076@gmail.com',
            github: 'https://github.com/MayurBari52076',
            linkedin: 'https://www.linkedin.com/in/mayurbari52076/',
            resume: 'https://drive.google.com/file/d/1pcuMFymN1oFQRN4NroAMKYEG-NR-9IUL/view?usp=drive_link',
        },
    });

    const [projects] = useState([
        {
            id: 1,
            title: 'Task Management App',
            description: 'A productivity tool for users to track tasks efficiently.',
            image: taskManagerImg,
            link: '#',
            tags: ['React', 'Node.js', 'MongoDB', 'Express', 'CSS', 'Vite'],
        },
        {
            id: 2,
            title: 'Image Resizer App',
            description: 'drag-and-drop image resizer ,image compression, resizing, and format conversion.',
            image: imageResizerImg,
            link: '#',
            tags: ['React', 'Node.js', 'Express', 'Sharp', 'CSS', 'Vite'],
        },
        {
            id: 3,
            title: 'Recipe Finder App',
            description: 'An app to search and discover recipes based on ingredients,add to favorite recipes.',
            image: recipeFinderImg,
            link: '#',
            tags: ['React', 'Node.js', 'Express', 'MongoDB', 'API Integration', 'CSS', 'Vite'],
        },
    ]);

    const [skills] = useState([
        'React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Node.js', 'Git', 'UI/UX Design', 'C++', 'Python', 'MongoDB', 'SQL'
    ]);

    return (
        <PortfolioContext.Provider value={{ personalInfo, projects, skills }}>
            {children}
        </PortfolioContext.Provider>
    );
};

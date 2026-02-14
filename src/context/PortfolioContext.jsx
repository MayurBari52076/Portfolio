import React, { createContext, useState } from 'react';
import taskManagerImg from './task_manager.jpg';
import imageResizerImg from './image_resizer.png';
import expensePlannerImg from "../assets/expensePlanner.png";


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
            resume: 'https://drive.google.com/file/d/1vU6ed46rO1ACxGvxpNeAkTQKSy986I_j/view?usp=drive_link',
        },
    });

    const [projects] = useState([
        {
              id: 1,
              title: 'Tasks – Collaborative Task Management System',
              description: 'A full-stack collaborative task management web application where users can create tasks and subtasks, invite collaborators via secure links, manage work with search, filter, sort, drag-and-drop ordering, and switch between dark/light mode.',
              image: taskManagerImg,
              link: 'https://tasks-ebon-one.vercel.app/',
              tags: ['React', 'Vite', 'Node.js', 'Express.js', 'MongoDB Atlas', 'JWT', 'CSS'],
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
            title: 'Smart Expense & Budget Planner',
            description: 'A full-stack personal finance management app with authentication, expense tracking, category-based analytics, charts, monthly reports, CSV export, and persistent light/dark theming.',
            image: expensePlannerImg,
            link: 'https://smart-expense-planner-indol.vercel.app/',
            tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT Auth', 'Charts', 'Vite', 'CSS'],        
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

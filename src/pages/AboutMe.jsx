import React from 'react';
import './AboutMe.css';
import profilePic from '../assets/images/meme.jpg';

const AboutMe = () => {
    return (
        <section id="about" className="about">
             <img src={profilePic} alt="Profile" />
            <h2>About Me</h2>
            <p>Hi, I'm Kyna Porterfield, a web developer with a passion for creating beautiful and functional websites.</p>
        </section>
    );
};

export default AboutMe;

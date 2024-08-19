import React from 'react';
import '../styles/AboutMe.css';
import profilePic from '../assets/images/meme.jpg';

const AboutMe = () => {
    return (
        <section id="about" className="about">
             <img src={profilePic} alt="Profile" style={{ width: '50%', height: 'auto', objectFit: 'cover' }}/>
            <h2>About Me</h2>
            <p>Hi, I'm Kyna Porterfield, a web developer with a passion for creating beautiful and functional websites. I am currrently a coding bootcamp student at University of Minnesota. I'll be getting my certificate in coding August 2024. My goal is to continue learning more skills to prepare my self for a job in web development.

Age:28
Location: North Carolina, USA</p>
        </section>
    );
};

export default AboutMe;

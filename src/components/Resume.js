import React from 'react';
import './Resume.css';
import resumeFile from '../assets/files/resume.pdf';

const Resume = () => {
    return (
        <section id="resume" className="resume">
            <h2>My Resume</h2>
            <p>Download my resume <a href={resumeFile} download="resume.pdf">here</a>.</p>
            <h3>Developer Proficiencies</h3>
            <p>list</p>
        </section>
    );
};

export default Resume;

import React from 'react';
import '../styles/Resume.css';
import resumeFile from '../assets/files/Resume.pdf';

const Resume = () => {
    return (
        <section id="resume" className="resume">
            <h2>My Resume</h2>
            <p>Download my resume <a href={resumeFile} download="resume.pdf">here</a>.</p>
            <h3>Developer Proficiencies</h3>
            <ul>
                <li><strong>Front-End Development</strong>
                    <ul>
                        <li>HTML/CSS: Structuring and styling web pages.</li>
                        <li>JavaScript: Adding interactivity to web pages.</li>
                        <li>Front-End Frameworks/Libraries: React, Angular, Vue.js.</li>
                        <li>Responsive Design: Ensuring web applications work on various devices and screen sizes.</li>
                    </ul>
                </li>
                <li><strong>Back-End Development</strong>
                    <ul>
                        <li>Server-Side Languages: Node.js, React.</li>
                        <li>Frameworks: Express.js.</li>
                        <li>Database Management: SQL (PostgreSQL) and NoSQL (MongoDB).</li>
                        <li>APIs: RESTful services, GraphQL.</li>
                    </ul>
                </li>
                <li><strong>DevOps and Tools</strong>
                    <ul>
                        <li>Version Control: Git, GitHub, GitLab.</li>
                    </ul>
                </li>
                <li><strong>Other Skills</strong>
                    <ul>
                        <li>Problem-Solving: Debugging and optimizing code.</li>
                        <li>Security: Implementing security best practices.</li>
                        <li>Testing: Unit testing.</li>
                        <li>Soft Skills: Communication, teamwork, project management.</li>
                    </ul>
                </li>
            </ul>
        </section>
    );
};

export default Resume;

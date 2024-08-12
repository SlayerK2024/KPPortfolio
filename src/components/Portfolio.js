import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <section id="portfolio" className="projects">
            <h2>My Projects</h2>
            <div className="project">
                <img src="project1.jpg" alt="Project 1" />
                <h3>Project 1</h3>
                <p>link&repo.</p>
            </div>
            <div className="project">
                <img src="project2.jpg" alt="Project 2" />
                <h3>Project 2</h3>
                <p>link&repo.</p>
            </div>
            <div className="project">
                <img src="project3.jpg" alt="Project 3" />
                <h4>Project 3</h4>
                <p>link&repo.</p>
            </div>
            <div className="project">
                <img src="project4.jpg" alt="Project 4" />
                <h5>Project 4</h5>
                <p>link&repo.</p>
            </div>
            <div className="project">
                <img src="project5.jpg" alt="Project 5" />
                <h6>Project 5</h6>
                <p>link&repo.</p>
            </div>
            <div className="project">
                <img src="project2.jpg" alt="Project 6" />
                <h7>Project 6</h7>
                <p>link&repo.</p>
            </div>
        </section>
    );
};

export default Portfolio;

import React from 'react';
import '../styles/Portfolio.css';

// Import images
import homepageImg from '../assets/images/homepage.png';
import notetakerImg from '../assets/images/notetaker.png';
import brooksideHotelImg from '../assets/images/BrooksideHotel.jpeg';
import payrollImg from '../assets/images/payroll.png';
import socialAPIImg from '../assets/images/api18.png';
import professionalNodeReadmeImg from '../assets/images/readme.png';

const Portfolio = () => {
    return (
        <section id="portfolio" className="projects">
            <h2>My Projects</h2>
            <div className="project">
                <img src={homepageImg} alt="Screenshot of Movie-Night-Database project" />
                <h3>Movie-Night-Database</h3>
                <p><a href="https://blitzbomber87.github.io/Movie-Night-Database/">View Project</a></p>
                <p><a href="https://github.com/blitzbomber87/Movie-Night-Database">View on GitHub</a></p>
            </div>
            <div className="project">
                <img src={notetakerImg} alt="Screenshot of ENoteTaker project" />
                <h3>ENoteTaker</h3>
                <p><a href="https://enotetaker1.onrender.com/">View Project</a></p>
                <p><a href="https://github.com/SlayerK2024/ENoteTaker">View on GitHub</a></p>
            </div>
            <div className="project">
                <img src={brooksideHotelImg} alt="Screenshot of Brookside Hotel project" />
                <h3>Brookside Hotel</h3>
                <p><a href="https://hotel-booking-40ac.onrender.com/">View Project</a></p>
                <p><a href="https://github.com/blitzbomber87/Brookside-Hotel">View on GitHub</a></p>
            </div>
            <div className="project">
                <img src={payrollImg} alt="Screenshot of Employee Payroll project" />
                <h3>Employee Payroll</h3>
                <p><a href="https://slayerk2024.github.io/EmployeePayroll/">View Project</a></p>
                <p><a href="https://github.com/SlayerK2024/EmployeePayroll">View on GitHub</a></p>
            </div>
            <div className="project">
                <img src={socialAPIImg} alt="Screenshot of NoSQL SocialAPI project" />
                <h3>NoSQL SocialAPI</h3>
                <p><a href="https://www.loom.com/share/80a53b76b6924ed8a205d5a2ba06cded?sid=45975546-31ff-4ebf-874e-36c9ab9488f4">View Walkthrough</a></p>
                <p><a href="https://github.com/SlayerK2024/Social-Network-API">View on GitHub</a></p>
            </div>
            <div className="project">
                <img src={professionalNodeReadmeImg} alt="Screenshot of Professional-Node-Readme project" />
                <h3>Professional-Node-Readme</h3>
                <p><a href="https://github.com/SlayerK2024/Professional-Node-Readme">View on GitHub</a></p>
                <p><a href="https://drive.google.com/file/d/1m5hM_8Vg0MOgdNtwZERTKVIQ6qdub6NB/view?usp=drive_link">View Walkthrough</a></p>
            </div>
        </section>
    );
};

export default Portfolio;

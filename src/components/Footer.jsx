import React from 'react';
import '../styles/Footer.css';
import githubIcon from '../assets/icons/github.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import twitterIcon from '../assets/icons/twitter.svg';

const Footer = () => {
    return (
        <footer>
            <p>© 2024 My Portfolio</p>
            <ul>
                <li><a href="https://linkedin.com">LinkedIn<img src={linkedinIcon} alt="LinkedIn" style={{ width: '10%', height: 'auto', objectFit: 'cover' }}/></a></li>
               <li><a href="https://github.com/SlayerK2024/">GitHub<img src={githubIcon} alt="GitHub" style={{ width: '10%', height: 'auto', objectFit: 'cover' }}/></a></li>
               <li><a href="https://twitter.com">twitter<img src={twitterIcon} alt="Twitter" style={{ width: '10%', height: 'auto', objectFit: 'cover' }}/></a></li>
            </ul>
        </footer>
    );
};

export default Footer;

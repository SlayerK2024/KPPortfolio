import React from 'react';
import './Footer.css';
import githubIcon from '../assets/icons/github.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import twitterIcon from '../assets/icons/twitter.svg';

const Footer = () => {
    return (
        <footer>
            <p>© 2024 My Portfolio</p>
            <ul>
                <li><a href="https://linkedin.com">LinkedIn<img src={linkedinIcon} alt="LinkedIn" /></a></li>
               <li><a href="https://github.com">GitHub<img src={githubIcon} alt="GitHub" /></a></li>
               <li><a href="https://twitter.com">twitter<img src={twitterIcon} alt="Twitter" /></a></li>
            </ul>
        </footer>
    );
};

export default Footer;

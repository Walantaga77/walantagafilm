import React from 'react';
// Importing the CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <br />
            <div className="footer-content">
                <div className="footer-logo">
                    <h2>WALANTAGAFILMS</h2>
                </div>
                <div className="footer-links">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#trending">Trending</a></li>
                        <li><a href="#action">Action</a></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <a href="https://www.linkedin.com/in/ramadhani-al-amin/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/Walantaga77" target="_blank" rel="noopener noreferrer">Github</a>
                    <a href="https://www.instagram.com/alramdh_/" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Walantaga77. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

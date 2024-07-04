import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div>
                &copy; {new Date().getFullYear()} ExploreWorld. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;

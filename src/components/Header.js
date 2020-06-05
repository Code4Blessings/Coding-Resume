import React from 'react';
import Contact from './Contact'

const Header = () => {
    return (
        <div className="head-container">
            <div className="title">
                <h1>Robin <span>Warden</span></h1>
                <h1>Software Developer</h1>
                <Contact />
            </div>
            
        </div>
       
    );
};

export default Header;
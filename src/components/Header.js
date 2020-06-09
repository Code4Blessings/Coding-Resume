import React from 'react';

const Header = () => {
    return (
        <div className="header-container">
            <div className="section-title">
                <h1>Robin <span>Warden</span></h1>
            </div>
            <div className="role">
                <h1>Software Developer</h1>
            </div>
               <div className="contact">
                    <p>Lawrenceville, GA</p>
                <div className="links">
                    <a href="robincw35@gmail.com">robincw35@gmail.com</a>
                    <a href="https://code4blessings.github.io/RobinWarden_Portfolio/">
                        My Website
                    </a>
                    <a href="https://github.com/Code4Blessings">GitHub</a>
                    <a href="https://www.linkedin.com/in/robin-warden-7126b054">linkedin
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;
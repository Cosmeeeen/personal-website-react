import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const BrowserNavBar = () => {
    return (
        <div className="browserNavBarContainer">
            <Link to="/about">
                About
            </Link>
            <Link to="/my-work">
                My Work
            </Link>
            <h1><Link to="/">
                Cosmin Ilie
            </Link></h1>
            <Link to="/contact">
                Contact
            </Link>
            <Link to="/mini-apps">
                Mini-Apps
            </Link>
        </div>
    );
};

export default withRouter(BrowserNavBar);
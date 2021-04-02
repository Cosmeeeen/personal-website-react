import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

const MobileNavBar = (props) => {

    const [isMenuToggled, setIsMenuToggled] = useState(false);

    function handleToggleMenu(e){
        e.preventDefault();
        
        setIsMenuToggled(!isMenuToggled);
    }

    function handleCloseMenu(e){
        if(isMenuToggled) setIsMenuToggled(false);
    }

    return (
        <div className="mobileNavBarDiv">
            <i class={"fas fa-arrow-right" + (isMenuToggled ? " rotated" : "")} onClick={handleToggleMenu} ></i>
            <div className={"mobileMenu" + (isMenuToggled ? " active" : " inactive")}>
                <ul>
                    <li> <Link to="/" onClick={handleCloseMenu}>
                        Home
                    </Link> </li>
                    <li> <Link to="/about" onClick={handleCloseMenu}>
                        About
                    </Link> </li>
                    <li> <Link to="/my-work" onClick={handleCloseMenu}>
                        My Work
                    </Link> </li>
                    <li> <Link to="/contact" onClick={handleCloseMenu}>
                        Contact
                    </Link> </li>
                    <li> <Link to="/mini-apps" onClick={handleCloseMenu}>
                        Mini-Apps
                    </Link> </li>
                </ul>
            </div>
        </div>
    );
};

export default withRouter(MobileNavBar);
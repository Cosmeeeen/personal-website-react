import React, { useState } from 'react';

const MobileNavBar = () => {

    const [isMenuToggled, setIsMenuToggled] = useState(false);

    function handleToggleMenu(e){
        e.preventDefault();
        
        setIsMenuToggled(!isMenuToggled);
    }

    return (
        <div className="mobileNavBarDiv">
            <i class={"fas fa-arrow-right" + (isMenuToggled ? " rotated" : "")} onClick={handleToggleMenu} ></i>
            <div className={"mobileMenu" + (isMenuToggled ? " active" : " inactive")}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">My Work</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Mini-Apps</a></li>
                </ul>
            </div>
        </div>
    );
};

export default MobileNavBar;
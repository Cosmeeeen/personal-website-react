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
        </div>
    );
};

export default MobileNavBar;
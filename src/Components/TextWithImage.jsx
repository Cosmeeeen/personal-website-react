import React from 'react';
import { isMobile } from 'react-device-detect';

const TextWithImage = ({ image, children }) => {

    return (
        <div className={`textWithImageContainer ${isMobile ? "mobile" : "browser"}`}>
            <div className="textComponent">
                {children}
            </div>
            <img src={image} alt="interesting thing"/>
        </div>
    );
};

export default TextWithImage;
import React from 'react';
import { isMobile } from 'react-device-detect';

const TextWithImage = ({ align, image, children }) => {

    const isLeft = align === "left";

    const leftAlignStyle = {
        "order" : -1
    };

    return (
        <div className={`textWithImageContainer ${isMobile ? "mobile" : "browser"}`}>
            <div className="textComponent">
                {children}
            </div>
            <img src={image} alt="interesting thing" style={isLeft ? leftAlignStyle : null}/>
        </div>
    );
};

export default TextWithImage;
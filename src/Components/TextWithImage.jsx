import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

const TextWithImage = ({ image, children }) => {

    return (
        <div className="textWithImageContainer">
            <BrowserView>
                {children}
                <img src={image} />
            </BrowserView>
            <MobileView>
                {children}
            </MobileView>
        </div>
    );
};

export default TextWithImage;
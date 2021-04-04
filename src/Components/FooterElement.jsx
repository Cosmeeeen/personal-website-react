import React from 'react';
import { isMobile } from 'react-device-detect';

const FooterElement = () => {
    return (
        <div className={`footerElementContainer ${isMobile ? 'mobile' : 'web'}`}>
            <div className="col 1">
                <p>Hello world</p>
            </div>
            <div className="col 2">
                <p>This website is hosted by ASFLKJHosting</p>
            </div>
            <div className="col 3">
                <p>© Cosmin Ilie 2021</p>
            </div>
        </div>
    );
}

export default FooterElement;
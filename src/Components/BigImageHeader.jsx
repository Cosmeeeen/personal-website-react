import React from 'react';
import { isMobile } from 'react-device-detect';

const BigImageHeader = ({ title, subtitle }) => {

    return (
        <div className={`bigImageHeaderContainer ${isMobile ? 'mobile' : ''}`}>
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
        </div>
    );

};

export default BigImageHeader;
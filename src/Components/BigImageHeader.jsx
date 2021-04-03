import React from 'react';
import { isMobile } from 'react-device-detect';

const BigImageHeader = ({ title, subtitle, creditText, creditLink }) => {

    const imageCredit = (
        <a href={creditLink} target="_blank" rel="noreferrer">{creditText}</a>
    );

    return (
        <div>
            <div className={`bigImageHeaderContainer ${isMobile ? 'mobile' : ''}`}>
                <h1>{title}</h1>
                <h3>{subtitle}</h3>
                {creditText !== "" ? imageCredit : null}
            </div>
        </div>
    );

};

export default BigImageHeader;
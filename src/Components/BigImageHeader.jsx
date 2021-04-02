import React from 'react';

const BigImageHeader = ({ title, subtitle }) => {

    return (
        <div className="bigImageHeaderContainer">
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
        </div>
    );

};

export default BigImageHeader;
import React from 'react';
import BigImageHeader from '../BigImageHeader';
import TextWithImage from '../TextWithImage.jsx';

import DivImage1 from '../../Images/grayscaleMountain1080.jpg';

const Home = () => {
    return (
        <div className="homeContainer">
            <BigImageHeader 
                title="Cosmin Ilie" 
                subtitle="Web Developer" 
                creditText="Grayscale Photo of Volcano by Tyler Lastovich from Pexels"
                creditLink="https://www.pexels.com/photo/grayscale-photo-of-volcano-997443/"
            />
            <TextWithImage image={ DivImage1 }>
                <h1>This is some big text</h1>
                <p>This is some small text</p>
            </TextWithImage>
        </div>
    );
};

export default Home;
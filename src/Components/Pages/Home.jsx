import React from 'react';
import BigImageHeader from '../BigImageHeader';

const Home = () => {
    return (
        <div className="homeContainer">
            <BigImageHeader 
                title="Cosmin Ilie" 
                subtitle="Web Developer" 
                creditText="Grayscale Photo of Volcano by Tyler Lastovich from Pexels"
                creditLink="https://www.pexels.com/photo/grayscale-photo-of-volcano-997443/"
            />
        </div>
    );
};

export default Home;
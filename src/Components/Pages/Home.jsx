import React from 'react';
import BigImageHeader from '../BigImageHeader';

const Home = () => {
    return (
        <div className="homeContainer">
            <BigImageHeader title="Cosmin Ilie" subtitle="Web Developer"/>
            <p><a href="https://www.pexels.com/photo/grayscale-photo-of-volcano-997443/" target="_blank" rel="noreferrer">Grayscale Photo of Volcano by Tyler Lastovich from Pexels </a></p>
        </div>
    );
};

export default Home;
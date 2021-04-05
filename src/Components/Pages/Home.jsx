import React from 'react';
import { Link } from 'react-router-dom';
import BigImageHeader from '../BigImageHeader';
import TextWithImage from '../TextWithImage.jsx';

import DivImage1 from '../../Images/grayscaleMountain1080.jpg';
import HelloWorldImage from '../../Images/helloworld.jpeg';

const Home = () => {
    return (
        <div className="homeContainer">
            <BigImageHeader 
                title="Cosmin Ilie" 
                subtitle="Web Developer" 
                creditText="Grayscale Photo of Volcano by Tyler Lastovich from Pexels"
                creditLink="https://www.pexels.com/photo/grayscale-photo-of-volcano-997443/"
            />
            <TextWithImage image={ HelloWorldImage }>
                <h1>Hello, World!</h1>
                <p>My name is Cosmin Ilie, and I am a programmer from Romania. I am currently studying at "Babeș-Bolyai" University, Cluj-Napoca, working towards my Bachelor's Degree in Maths & Computer Science.</p>
                <p>I am experienced in Web Development, specialising in Frontend and CMS development. Other than that, I am dipping my toes in multiple programming fields, such as automation, app development and game development.</p>
                <p>If you want to read my complete story, you can visit the <Link to="/about-me">About Me</Link> page, or you can send me a message using any contact information from the <Link to="/contact">Contact</Link> page. You can also see the projects I worked on in the <Link to="my-work">My Work</Link> page, or use some small and fun web applications/games in the <Link to="mini-apps">Mini-Apps</Link> page.</p>
            </TextWithImage>
            <TextWithImage image={ DivImage1 } align="left" >
                <h1>Work With Me!</h1>
                <p>I am currently open to projects. If you want to talk with me in order to see how I can bring your vision to life, contact me using any of the options in the <Link to="/contact">Contact</Link> page.</p>
                <p>If you don't know what you want yet, I can help you completley digitalize your business, using social media and a website that perfectly matches your needs.</p>
                <p>I will also work on your existing projects, being experienced in multiple fields such as Game Development, CMS development, React development, and Web Design.</p>
            </TextWithImage>
        </div>
    );
};

export default Home;
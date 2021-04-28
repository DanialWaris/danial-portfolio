import React from 'react';
import './Home.css';
import image1 from './images/bb.jpg';
import image2 from './images/slider5.jpeg';
import image3 from './images/slider6.jpeg';
import Danial from './images/Danial.jpeg';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Services from './Services';


const Home = () => {
    return (
        <div className='hero' id='home'>


            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">

                    <div class="carousel-item active">
                        <img class="d-block w-100" src={image1} alt="..." />
                        <div class="carousel-caption d-md-block">
                            <img src={Danial} alt='Danial' />
                            <h1>Hello, I'm Danial!</h1>
                            <h3>Frontend Developer</h3>
                            <p>An energetic and passionate developer pays attention to the complex logics and thinks out of the box. Aiming to use my React knowledge that I have acquired from my coursework as well as self-study and with my hard work to satisfy my job at your organization.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={image2} alt="..." />
                        <div class="carousel-caption d-md-block">
                            <img src={Danial} alt='Danial' />
                            <h1>Hello, I'm Danial!</h1>
                            <h3>Frontend Developer</h3>
                            <p>An energetic and passionate developer pays attention to the complex logics and thinks out of the box. Aiming to use my React knowledge that I have acquired from my coursework as well as self-study and with my hard work to satisfy my job at your organization.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={image3} alt="..." />
                        <div class="carousel-caption d-md-block">
                            <img src={Danial} alt='Danial' />
                            <h1>Hello, I'm Danial!</h1>
                            <h3>Frontend Developer</h3>
                            <p>An energetic and passionate developer pays attention to the complex logics and thinks out of the box. Aiming to use my React knowledge that I have acquired from my coursework as well as self-study and with my hard work to satisfy my job at your organization.</p>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>









            <div>
                <About />
            </div>
            <div>
                <Projects />
            </div>
            <div>
                <Services />
            </div>
            <div>
                <Skills />
            </div>



        </div>
    )
}

export default Home
import React, { useState } from "react";
import Danial from './images/Danial.jpeg';
import './About.css';
import { Link } from 'react-scroll';

const About = () => {



    return (
        <div className='about-hero' id='about'>
            <div className='about'>
                <div className='about-head'>
                    <h1>About Me</h1>
                    <h5>~who i am~</h5>

                </div>
                <div class="row-data">
                    <div class="col-sm-12 about-row">
                        <div class="about-card">
                            <img src={Danial} alt='Danial' />

                            <div class="card-body about-card-body">
                                <p class="card-text">Hi, My name is Danial Waris. I'm Frontend Developer. An energetic and passionate developer pays attention to the complex logics and thinks out of the box. Aiming to use my React knowledge that I have acquired from my coursework as well as self-study and with my hard work to satisfy my job at your organization.</p>
                                <Link style={{ color: "white" }} to="contact" smooth={true} duration={1000}><button type='button'>Contact</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>










        </div>
    )
}
export default About


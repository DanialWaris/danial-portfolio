import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
// import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar nav-container sticky-top navbar-expand-lg">
            <a class="navbar-brand" href="#">
                <h2><b>Portfolio</b></h2>
            </a>
            <button 
                class="navbar-toggler navbar-dark"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse nav--collapsed" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto ">
                    <li class="nav-item active">
                        <Link class="nav-link" style={{ color: "white" }} to="home" smooth={true} duration={1000} >
                            Home
                            </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" style={{ color: "white" }} to="projects" smooth={true} duration={1000}>Projects</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" style={{ color: "white" }} to="services" smooth={true} duration={1000}>Services</Link>
                    </li>
                    <li class="nav-item">
                        <Link to={'/about'} class="nav-link" style={{ color: "white" }} to="about" smooth={true} duration={1000} >About Me</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" style={{ color: "white" }} to="skills" smooth={true} duration={1000}>Skills</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" style={{ color: "white" }} to="contact" smooth={true} duration={1000}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


export default Navbar
import React from 'react';
import './Footer.css';
import { Link } from 'react-scroll';


function Footer() {
    return (
        <div className='footer-container hero' id='contact'>
            <section className='footer-subscription'>
                <h1 className='footer-subscription-heading'>
                    Contact
        </h1>
                <h5 className='footer-subscription-text'>
                    ~Get in touch~
        </h5>
            </section>
            <div class="row-container">
                <div className='footer-link-items col-sm-3' >
                    <Link style={{ color: "white" }}><h2>Skills</h2></Link>
                    <div className='footer-item-list'>
                        <p>HTML & CSS</p>
                        <p>Bootstrap</p>
                        <p>Javascript</p>
                        <p>React</p>
                        <p>Material UI</p>
                    </div>
                </div>
                <div className='footer-link-items col-sm-3' >
                    <Link style={{ color: "white" }} to="projects" smooth={true} duration={1000}><h2>Projects</h2></Link>
                    <div className='footer-item-list'>
                        <a href='https://danialwaris.github.io/Covid-19_Live_Updates/' target='_blank'>Covid-19 Live Updates</a>
                        <Link style={{ color: "white" }} to="CRUD" smooth={true} duration={1000}>CRUD Application</Link>
                        <a href=''>TRVL</a>
                    </div>
                </div>
                <div className='footer-link-items col-sm-3' >
                    <Link style={{ color: "white" }}><h2>Contact</h2></Link>
                    <div className='footer-item-list'>
                        <p><i class="fas fa-phone-alt mr-2"></i>03074886527</p>
                        <p><i class="fas fa-envelope mr-2"></i>miandanial524@gmail.com</p>
                        <p><i class="fas fa-location mr-2"></i>Chak no 390 GB, Sammundri, Faisalabad</p>
                    </div>
                </div>
                <div className='footer-link-items col-sm-3' >
                    <h2>Social Media</h2>
                    <div className='footer-item-list'>
                        <a href='https://www.facebook.com/mian.danial.583/' class='facebook' target='_blank' aria-label='Facebook'><i class='social-icons fab fa-facebook-f mr-2' />Facebook</a>
                        <a href='https://www.instagram.com/danialwaris_dw/' class='instagram' target='_blank' aria-label='Instagram'><i class=' social-icons fab fa-instagram mr-2' />Instagram</a>
                        <a href='https://twitter.com/DanialWaris' class='twitter' target='_blank' aria-label='Twitter'><i class='social-icons fab fa-twitter mr-2' />Twitter</a>
                        <a href="https://www.linkedin.com/in/mian-danial-ba9ab8172/" target='_blank' class='linkdin'><i class='social-icons fab fa-linkedin mr-2' />LinkdIn</a>
                    </div>
                </div>
            </div>

            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <Link style={{ color: "white" }} to="home" smooth={true} duration={1000} className='social-logo'>
                            Danial's Portfolio
                        </Link>
                        <small class='website-rights'>Have A Good Day!</small>

                    </div>

                </div>
            </section>
        </div>
    );
}

export default Footer;


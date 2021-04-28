import React from 'react';
import './Services.css';

function Services() {
    return (
        <div className='services-hero' id="services">
             <div className='services-head'>
                <h1>My Services</h1>
                <h5>~what i provide~</h5>
            </div>
            <div className='services-container'>
            <div class="card services-card" style={{width: "20rem"}}>
                <div class="card-body">
                    <h1 class="card-title"><i class="fas fa-code"></i></h1>
                    <h3>Web Development</h3>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
            </div>
            <div class="card services-card" style={{width: "20rem"}}>
                <div class="card-body">
                    <h1 class="card-title"><i class="fas fa-marker"></i></h1>
                    <h3>Article Writing</h3>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
            </div>
            <div class="card services-card" style={{width: "20rem"}}>
                <div class="card-body">
                    <h1 class="card-title"><i class="fas fa-desktop"></i></h1>
                    <h3>SEO</h3>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Services

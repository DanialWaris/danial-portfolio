import React from "react";
import './Projects.css'
import background from './images/projects1.jpeg';

const Projects = () => {
    return (
        <div>
            <div className="projects" id='projects' style={{background : `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${background})`, backgroundSize : "cover", backgroundAttachment: "fixed"}}>
                <div className='projects-head'>
                    <h1 style={{color: "black"}}>My Projects</h1>
                    <h5>~what i did~</h5>
                </div>
                <hr></hr>
                <div className='projects-container'>
                    <div class="card text-center col-sm-4">
                        <div class="card-body">
                            <h3 class="card-title">Covid-19 Live Updates</h3>
                            <p class="card-text">Covud-19 Live Updates is a web based fully responsive application.
                            Its main functionality is to update the people from current situation about coronavirus in any country. User just has to search country by name, App will filter the list of
                            countries and show the data of searched country. In this project, I have used API. </p>
                            <div className='technology'>
                                <p className='tech-head'>Technnology used:</p>
                                <div className='tech-list'>
                                    <p>HTML <i class="fab fa-html5"></i></p><p>CSS <i class="fab fa-css3-alt"></i></p><p>Bootstrap <i class="fab fa-bootstrap"></i></p><p>React JS <i class="fab fa-react"></i></p><p>Material UI <i class="fab fa-uikit"></i></p>
                                </div>

                            </div>
                            <a href='https://danialwaris.github.io/Covid-19_Live_Updates/' target="_blank" class="btn btn-primary">Live <i class="fas fa-external-link-alt"></i></a>
                        </div>
                    </div>

                    <div class="card text-center col-sm-4" id='CRUD'>
                        <div class="card-body">
                            <h3 class="card-title">Covid-19 Live Updates</h3>
                            <p class="card-text">Covud-19 Live Updates is a web based fully responsive application.
                            Its main functionality is to update the people from current situation about coronavirus in any country. User just has to search country by name, App will filter the list of
                            countries and show the data of searched country. In this project, I have used API. </p>
                            <div className='technology'>
                                <p className='tech-head'>Technnology used:</p>
                                <div className='tech-list'>
                                    <p>HTML<i class="fab fa-html5 ml-1"></i></p><p>CSS<i class="fab fa-css3-alt ml-1"></i></p><p>Bootstrap<i class="fab fa-bootstrap ml-1"></i></p><p>React JS<i class="fab fa-react ml-1"></i></p><p>Material UI<i class="fab fa-uikit ml-1"></i></p>

                                </div>

                            </div>
                            <a href='https://danialwaris.github.io/Covid-19_Live_Updates/' target="_blank" class="btn btn-primary">Live <i class="fas fa-external-link-alt"></i></a>
                        </div>
                    </div>

                    <div class="card text-center col-sm-4">
                        <div class="card-body">
                            <h3 class="card-title">Covid-19 Live Updates</h3>
                            <p class="card-text">Covud-19 Live Updates is a web based fully responsive application.
                            Its main functionality is to update the people from current situation about coronavirus in any country. User just has to search country by name, App will filter the list of
                            countries and show the data of searched country. In this project, I have used API. </p>
                            <div className='technology'>
                                <p className='tech-head'>Technnology used:</p>
                                <div className='tech-list'>
                                    <p>HTML<i class="fab fa-html5 ml-1"></i></p><p>CSS<i class="fab fa-css3-alt ml-1"></i></p><p>Bootstrap<i class="fab fa-bootstrap ml-1"></i></p><p>React JS<i class="fab fa-react ml-1"></i></p><p>Material UI<i class="fab fa-uikit ml-1"></i></p>
                                </div>

                            </div>
                            <a href='https://danialwaris.github.io/Covid-19_Live_Updates/' target="_blank" class="btn btn-primary">Live <i class="fas fa-external-link-alt"></i></a>
                        </div>
                    </div>

                    <div class="card text-center col-sm-4">
                        <div class="card-body">
                            <h3 class="card-title">Covid-19 Live Updates</h3>
                            <p class="card-text">Covud-19 Live Updates is a web based fully responsive application.
                            Its main functionality is to update the people from current situation about coronavirus in any country. User just has to search country by name, App will filter the list of
                            countries and show the data of searched country. In this project, I have used API. </p>
                            <div className='technology'>
                                <p className='tech-head'>Technnology used:</p>
                                <div className='tech-list'>
                                    <p>HTML<i class="fab fa-html5 ml-1"></i></p><p>CSS<i class="fab fa-css3-alt ml-1"></i></p><p>Bootstrap<i class="fab fa-bootstrap ml-1"></i></p><p>React JS<i class="fab fa-react ml-1"></i></p><p>Material UI<i class="fab fa-uikit ml-1"></i></p>
                                </div>

                            </div>
                            <a href='https://danialwaris.github.io/Covid-19_Live_Updates/' target="_blank" class="btn btn-primary">Live <i class="fas fa-external-link-alt"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}





export default Projects
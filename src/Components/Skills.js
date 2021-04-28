import React from 'react';
import './Skills.css';
import background from './images/skills1.jpg';
import edu1 from './images/Matric.jpg';
import edu2 from './images/FSC.jpg';
import edu3 from './images/BSCS.jpg';




import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${background})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        padding: "100px 0px",
        // display : "flex", 
        // flexDirection : "column",
        // justifyContent : "center"
    }
}));




const Skills = () => {


    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (



        <div className={classes.root} id="skills">
            <div className='Skills-education-head'>
                <h1>My Skills</h1>
                <h5>~what i know~</h5>
            </div>
            <Tabs
                className='about-buttons'
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
            // variant="fullWidth"
            >
                <Tab className='tab-item' label="Skills" {...a11yProps(0)} />
                <Tab className='tab-item' label="Education" {...a11yProps(1)} />
            </Tabs>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <div className='skills-hero tab-content' >

                        <div className='skill-item-list'>
                            <div className='skill-item'>
                                <p>HTML <i class="fab fa-html5"></i></p>
                                <div class="progress">
                                    <div class="progress-bar " role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
                                </div>
                            </div>
                            <div className='skill-item'>
                                <p>CSS <i class="fab fa-css3-alt"></i></p>
                                <div class="progress">

                                    <div class="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                                </div>
                            </div>
                            <div className='skill-item'>
                                <p>Bootstrap <i class="fab fa-bootstrap"></i></p>
                                <div class="progress">
                                    <div class="progress-bar " role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                                </div>
                            </div>
                            <div className='skill-item'>
                                <p>Javascript </p>
                                <div class="progress">
                                    <div class="progress-bar " role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                                </div>
                            </div>
                            <div className='skill-item'>
                                <p>React <i class="fab fa-react"></i></p>
                                <div class="progress">
                                    <div class="progress-bar " role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                                </div>
                            </div>
                            <div className='skill-item'>
                                <p>Material UI <i class="fab fa-uikit"></i></p>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{ width: "85%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <div className='education-hero tab-content'>
                        <div className='education-container'>

                            <div className='education-item-list'>
                                <div className='education-item'>
                                    <h5>Institute:</h5><p>Govt High School no. 2 Sammundri, Faisalabad</p>

                                </div>
                                <div className='education-item'>
                                    <h5>Marks:</h5><p>859/1100</p>

                                </div>
                            </div>
                            <div className='education-header' style={{ background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.7)), url(${edu1})`, backgroundSize: "cover" }}>
                                <h2>Matric</h2>
                            </div>
                        </div>


                        <div className='education-container'>

                            <div className='education-item-list'>
                                <div className='education-item'>
                                    <h5>Institute:</h5><p>Govt Postgraduate College Sammundri, Faisalabad</p>

                                </div>
                                <div className='education-item'>
                                    <h5>Marks:</h5><p>687/1100</p>

                                </div>
                            </div>
                            <div className='education-header' style={{ background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.7)), url(${edu2})`, backgroundSize: "cover" }}>
                                <h2>FSC</h2>
                            </div>
                        </div>



                        <div className='education-container'>

                            <div className='education-item-list'>
                                <div className='education-item'>
                                    <h5>Institute:</h5><p>University Of Agrculture Faisalabad</p>

                                </div>
                                <div className='education-item'>
                                    <h5>CGPA:</h5><p>3.52/4.00 8th semester continue</p>

                                </div>
                            </div>
                            <div className='education-header' style={{ background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.7)), url(${edu3})`, backgroundSize: "cover" }}>
                                <h2>BS Computer Science</h2>
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </SwipeableViews>
        </div>

    )
}


export default Skills
import React from 'react';
import {Link} from 'react-router-dom'

function About(){
    return(
        <div>
            <section className="about-sec">
        <div className="about-container">
            <div className="about-head">
                <p>ABOUT US</p>
                <h1>Learn More <span>About Us</span></h1>
            </div>
            <div className="about-row">
                <div className="about-col1">
                    <div className="about-img">
                        <img src="img/about-img.jpg" />
                        <div className="about-conyent">
                            <h3>Book a Table</h3>
                            <h2>+1 5589 55488 55</h2>
                        </div>
                    </div>
                </div>
                <div className="about-col2">
                    <div className="about-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p><i className="fa fa-check" aria-hidden="true"></i>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p><i className="fa fa-check" aria-hidden="true"></i>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                        <p><i className="fa fa-check" aria-hidden="true"></i>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</p>
                        <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                        <div className="about-col2-img">
                            <img src="img/about-img2.jpg" />
                        </div>
                        <div className="about-play">
                            <i className="fa fa-play" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
                                                          
        </div>

        <div className="about-row-contaner">
            <div className="about-row2">
                <div className="about-col-card">
                    <div className="about-card-content">
                        <h1>Why Choose Yummy?</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.</p>
                        <div className="about-card-content-btn">
                            <button>Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="about-card">
                    <div className="about-card-icon">
                        <i className="fa fa-bar-chart" aria-hidden="true"></i>
                    </div>
                    <h1>Corporis voluptates officia eiusmod</h1>
                    <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                </div>
                <div className="about-card">
                    <div className="about-card-icon">
                        <i className="fa fa-diamond" aria-hidden="true"></i>
                    </div>
                    <h1>Ullamco laboris ladore pan</h1>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                </div>
                <div className="about-card">
                    <div className="about-card-icon">
                        <i className="fa fa-file-text-o" aria-hidden="true"></i>
                    </div>
                    <h1>Labore consequatur incidid dolore</h1>
                    <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                </div>
             </div>
        </div>
    </section> 
        </div> 
    )
}
export default About;

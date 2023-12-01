import React from 'react';
import {Link} from 'react-router-dom'

function Product(){
    return(
        <div>
        <section className="menu-sec">
        <div className="menu-contaner">
            <div className="menu-head">
                <p>OUR MENU</p>
                <h1>Check Our <span>Yummy Menu</span></h1>
                <div className="menu-head-a">
                    <a href="#">Starters</a>
                    <a href="#">Breakfast</a>
                    <a href="#">Lunch</a>
                    <a href="#">Dinner</a>
                    <p> MENU</p>
                    <h1><span>Starters</span></h1>
                </div>
            </div>
            <div className="menu-row">
                <div className="menu-col1">
                    <div className="menu-card">
                        <div className="menu-card-img">
                            <img src="img/hero-img.png" />
                        </div>
                        <div className="menu-card-content">
                            <h2>Eos Luibusdam</h2>
                            <p>Lorem, deren, trataro, filede, nerada</p>
                            <h1>$12.95</h1>
                        </div>
                    </div>
                </div>
                <div className="menu-col1">
                    <div className="menu-card">
                        <div className="menu-card-img">
                            <img src="img/menu-item-3.png" />
                        </div>
                        <div className="menu-card-content">
                            <h2>Est Eligendi</h2>
                            <p>Lorem, deren, trataro, filede, nerada</p>
                            <h1>$8.95</h1>
                        </div>
                    </div>
                </div>
                <div className="menu-col1">
                    <div className="menu-card">
                        <div className="menu-card-img">
                            <img src="img/menu-item-4.png" />
                        </div>
                        <div className="menu-card-content">
                            <h2>Eos Luibusdam</h2>
                            <p>Lorem, deren, trataro, filede, nerada</p>
                            <h1>$12.95</h1>
                        </div>
                    </div>
                </div>
                <div className="menu-col1">
                    <div className="menu-card">
                        <div className="menu-card-img">
                            <img src="img/menu-item-5.png" />
                        </div>
                        <div className="menu-card-content">
                            <h2>Eos Luibusdam</h2>
                            <p>Lorem, deren, trataro, filede, nerada</p>
                            <h1>$12.95</h1>
                        </div>
                    </div>
                </div>
                <div className="menu-col1">
                    <div className="menu-card">
                        <div className="menu-card-img">
                            <img src="img/menu-item-6.png" />
                        </div>
                        <div className="menu-card-content">
                            <h2>Laboriosam Direva</h2>
                            <p>Lorem, deren, trataro, filede, nerada</p>
                            <h1>$9.95</h1>
                        </div>
                    </div>
                </div>
                <div className="menu-col1">
                    <div className="menu-card">
                        <div className="menu-card-img">
                            <img src="img/menu-item.png" />
                        </div>
                        <div className="menu-card-content">
                            <h2>Aut Luia</h2>
                            <p>Lorem, deren, trataro, filede, nerada</p>
                            <h1>$14.95</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </section> 
    </div>
    )
}
export default Product;

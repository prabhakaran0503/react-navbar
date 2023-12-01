
import React from 'react';
import {Link} from 'react-router-dom'

function Home(){
    return(
        <div>
            <section className="home-sec">
        <div className="home-content">
            <div className="home-row">
                <div className="home-col1">
                    <h1>Enjoy Your Healthy
                        Delicious Food</h1>
        
                    <p>Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.</p>
                    <div className="home-content-btns">
                        <button className="home-content-btn">Book a Table</button>
                        <div className="home-content-icon">
                            <i className="fa fa-play-circle-o" aria-hidden="true"></i>
                            <h2>Watch Video</h2>
                        </div>
                    </div> 
                    
                </div>
                <div className="home-col2">
                    <div className="home-img">
                        <img src="img/hero-img.png" />
                    </div> 
                </div>
            </div>  
        </div>
        
    </section>
        </div>
    )
}
export default Home;

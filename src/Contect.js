import React from 'react';
import {Link} from 'react-router-dom'

function Contact(){
    return(
        <div className="book-a-table-sec">
        <div className="book-a-table-contaner">
            <div className="book-a-table-head">
                <h3>BOOK A TABLE</h3>
                <h1>Book <span>Your Stay </span>With Us</h1>
            </div>
            <div className="book-table-row">
                <div className="book-col1">
                    <div className="book-col1-img">
                        <img src="img/book-img.jpg"/>
                    </div>
                </div>
                <div className="book-col2">
                    <div className="book-input-all">
                        <div className="book-input1">
                            <input type="text" placeholder="Your Name"/>
                            <input type="email" placeholder="Your Email"/>
                            <input type="text" placeholder="Your Phone"/>
                        </div>
                        <div className="book-input2">
                            <input type="text" placeholder="Date"/>
                            <input type="text" placeholder="Time"/>
                            <input type="number" placeholder="# of people"/>
                        </div>
                        <div className="book-input3">
                            <textarea  placeholder="message"></textarea>
                        </div>
                        <div className="book-btn">
                            <button>Book a Table</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
     </div>
    )
}
export default Contact;

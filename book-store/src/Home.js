import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

function Home() {
    return(
        <div className="home">
             <h1>
                BookStore
            </h1>
            <p>
                Keep In Touch With Best-selling Books
            </p>
            <div className="wrap-btn">
            <Link className="btn" to='/signup'>
                SIGN UP 
            </Link>
            <Link className="btn" to='/booklist'>
                LOGIN 
            </Link>
            </div>
                
            

        </div>
    );
}

export default Home;
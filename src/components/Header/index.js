import React from 'react';
import "./css/style.css";

const Header = () => {
    return ( 
        <> 
        
        <div class="navbar-button">
            <a href="#">Join Us</a>
        </div>
        <div class="navbar">
            <ul>
                <li><a href="#">Leaderboard</a></li>
                <li><a href="#">Gaming</a></li>
                <li><a href="#">Home</a></li>
            </ul>
        </div>
        <div>
            <div className="logo">
                <h1>
                    M<span className="red-simbol">&</span>E
                </h1>
            </div>
        </div>
        </>
     );
}
 
export default Header;
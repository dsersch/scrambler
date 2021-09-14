import React from 'react';
import classes from './Nav.module.css'

const Nav = (props) => {
    return (
        <nav className={classes.nav}>
            <div className={classes.logo}>
                <img src={`http://localhost:3001/images/logo.png`} alt='hole 1 overview'/> 
                <h1>SCRAMBLER</h1>
            </div>
            <ul>
                <li>tournaments</li>
                <li>charity</li>
                <li>leaderboard</li>
                <button>sign in</button>
            </ul>
        </nav>
    )
}

export default Nav;
import * as React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
    <>
        <header className='header'>
            <img src='/images/logo.jpg'/>
            <nav id='nav'>
                <ul>
                    <NavLink exact
                    activeClassName='active' 
                    to='/' >
                        <li>Home</li> 
                    </NavLink>

                    <NavLink 
                    activeClassName='active' 
                    to='/about' >
                        <li>About</li> 
                    </NavLink>

                    <NavLink 
                    activeClassName='active' 
                    to='/newsroom' >
                        <li>Newsroom</li> 
                    </NavLink>

                    <NavLink 
                    activeClassName='active' 
                    to='/careers' >
                        <li>Careers</li> 
                    </NavLink>

                    <NavLink 
                    activeClassName='active' 
                    to='/commitment' >
                        <li>Commitment</li> 
                    </NavLink>                   
                </ul>
            </nav>
        </header>
    </>
    )
}

export default Header;
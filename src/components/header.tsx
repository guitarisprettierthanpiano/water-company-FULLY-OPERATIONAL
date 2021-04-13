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
                    activeClassName='active' to='/' >
                        <li>Home</li> 
                    </NavLink>

                    <NavLink 
                    activeClassName='active' to='/about' >
                        <li>About</li> 
                    </NavLink>

                    <NavLink 
                    activeClassName='active' to='/newsroom' >
                        <li>Newsroom</li> 
                    </NavLink>

                    <li><a href='#'>
                        Suppliers</a>
                    </li> 
                    <li><a href='#'>
                        Commitment</a>
                    </li>
                    <li><a href='#'>
                        Investors</a>
                    </li>   
                    <li><a href='#'>
                        ESG</a>
                    </li>                              
                </ul>
            </nav>
        </header>
    </>
    )
}

export default Header;
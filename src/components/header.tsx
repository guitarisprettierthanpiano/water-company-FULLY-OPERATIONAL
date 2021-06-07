import * as React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {

    return (
    
    <header className='header'>
        <img src='./images/header/logo2.jpg'/>
        <nav id='nav'>
            <ul>
                <NavLink 
                exact activeClassName='active' 
                onClick={() => props.changePath('/')} 
                to='/'>
                    <li>Home</li> 
                </NavLink>

                <NavLink 
                activeClassName='active'
                onClick={() => props.changePath('/about')} 
                to='/about'>
                    <li>About</li> 
                </NavLink>

                <NavLink 
                activeClassName='active'
                onClick={() => props.changePath('/newsroom')}  
                to='/newsroom'>
                    <li>News</li> 
                </NavLink>

                <NavLink 
                activeClassName='active'
                onClick={() => props.changePath('/careers')}  
                to='/careers'>
                    <li>Careers</li> 
                </NavLink> 

                <NavLink 
                activeClassName='active' 
                onClick={() => props.changePath('/commitment')} 
                to='/commitment'>
                    <li>Our Duty</li> 
                </NavLink>                   
            </ul>
        </nav>
    </header>
    );
};

export default Header;
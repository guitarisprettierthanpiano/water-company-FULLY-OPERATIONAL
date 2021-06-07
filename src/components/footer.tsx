import * as React from 'react';
import { NavLink } from 'react-router-dom';

function Footer(props){

    function scrollUP(){
        window.scrollTo(
            { top: 0, behavior: 'smooth' });
    };

    return (
    <div className='footer'>
        <ul>
            <li><a>Privacy Policy</a></li>
            <li><a>Contact Us</a></li>
        </ul> 

        {/* this will scroll up without reloadingg the page
            it takes the prop from a usestate passed from the header */}
        <NavLink to={props.currentPath}>
            <img loading='lazy' src='././images/footer/arrowup.png' 
                 onClick={scrollUP}/> 
        </NavLink> 
    </div>
    );
};

export default Footer;
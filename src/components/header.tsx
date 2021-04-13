import * as React from 'react';

function Header() {
    return (
    <>
        <header className='header'>
            <img src='../myproj9watercompany/images/logo.jpg'/>
            <nav id='nav'>
                <ul>
                    <li><a href='#about'>
                        About</a>
                    </li> 
                    <li><a href='#home'>
                        Newsroom</a>
                    </li>
                    <li><a href='#'>
                        Careers</a>
                    </li>
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
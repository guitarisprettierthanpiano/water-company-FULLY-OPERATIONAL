import * as React from 'react';
import Header from './header';
import Footer from './footer';

function AboutPage() {
    
    return (
    <>
    <div className='about-container' id='about'>
        <div className='about-h1'>
            <h1>About Essential Utilities</h1>
        </div>
        <div className='about-section-two'>
            <div className='about-section-two-tr'>
                <h2>It's a natural fit.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste accusantium ducimus minus, eum velit, corporis cumque, debitis pariatur aut cupiditate repellendus repudiandae ea facere omnis. Molestias accusamus ipsa eveniet. Totam?</p>
            </div>
            <img src='' id='section-two-img1'/>
            <div className='about-section-two-br'>
                <h2>It's a natural fit.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste accusantium ducimus minus, eum velit, corporis cumque, debitis pariatur aut cupiditate repellendus repudiandae ea facere omnis. Molestias accusamus ipsa eveniet. Totam?</p>
            </div>
            <img src=''id='section-two-bl'/>            
        </div>
    </div>
    </>
    )
};

export default AboutPage;
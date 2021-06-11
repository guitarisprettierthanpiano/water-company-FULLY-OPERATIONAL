import * as React from 'react';

function AboutPage() {
    
    return(

    <div className='about-container' id='about'>
        <div className='about-h1'>
            <h1>About Steven W&G</h1>
        </div>
        
        <div className='about-section-one'>
            <div className='about-section-one-tl'>
                <h2>It's a natural fit.</h2>
                <p>Steven Water & Gas is one of the largest publicly traded water, wastewater and natural gas providers in the United States, serving millions across many states. We represent an infrastructure company uniquely positioned to have a positive impact on improving reliability, economic growth and quality of life for everyone.</p>
                <br/>
                <p>With more than one hundred years of experience, regulatory standard operations, profeciency and stewardship we the premier water utility. We are passionate about improving infrastructure that increases safety and effeciency.</p>
            </div>
            <div className='about-section-one-tr'/>
            <div className='about-section-one-br'>
                <p>Our purpose is to put our customers at the center of what we do and create a culture of trust and safety for our employees. The core values that guide us are integrity, excellence and responsibility.</p>
                <br/>
                <p>We understand the importance that water and natural gas serve in everyday life and we are proud to deliver these safe and reliable services to our communities.</p>
            </div>
            <div className='about-section-one-bl'/>
        </div>
        
        <div className='about-section-two'>
            <div className='about-section-two-l'>
                <h2>About Our Water Utility</h2>
                <br/>
                <p>When it comes to water and wastewater infrastructure, the fact is that the United States has over one million miles of underground pipe, much of which is many decades old and in dire need of replacement. According to the American Water Works Association, it will cost an estimated $1 trillion to maintain and expand drinking water service to meet demands over the next 20 years. Upgrading water and wastewater infrastructure is a major challenge facing our country, and we are proud to be leading the way when it comes to offering a solution. As one of the largest regulated water companies in the country, we are renewing and improving infrastructure through meticlious and intelligent invesements.</p>
                <br/>
                <p>Steven Water currently provides wastewater and water utility services to millions of people in many states within the US. As we continue to grow the company and operations, we strive to deliver great customer service and give back to the communities we operate in.<span className='dark-blue'>Learn More</span></p>
            </div>
            <div className='about-section-two-r'>
                <h2>About Our Natural Gas Utility</h2>
                <br/>
                <p>Natural gas pipelines transport more than a quarter of the energy consumed in the U.S. Natural gas is delivered to customers through a three million-mile pipeline system, including two million miles of local utility distribution pipelines. Much of this pipeline is aging and needs replacement or upgrades, making the commitment of companies like us even more important to the safety and prosperity of local communities.</p>
                <br/>
                <p>Natural gas is one of the safest, cleanest, and most useful energy sources. Compared with diesels and gasoline, natural gas can reduce greenhouse gas emissions by up to 30 percent. Natural gas emits much less CO2 than coal and oil. Natural gas vehicles produce less greenhouse gases than diesel vehicles, and less than comparable gasoline vehicles. <span className='dark-blue'>Learn More</span></p>
            </div>          
        </div>
    </div>
 
    )
};

export default AboutPage;
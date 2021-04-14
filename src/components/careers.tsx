import * as React from 'react';

function Careers(){
    return(
    <div className='careers-container'>
        <div className='careers-h1'>
            <h1>Career opportunities - for life.</h1>
        </div>

        <div className='container-careers-a-message'>
            <div className='careers-a-message'>
                <span style={{fontWeight: 800}}><img src='images/careers/gigachad.png' className='round'/>A message from Steven:</span>
                <br/>
                <p>Welcome to the careers page! We are a premier utility and infrastructure company. We offer a large array of exciting and engaging opportunities for jobs and careers that support our mission to provide life's natural resources.</p>
                <p>The greatest assets we have are our employees. We deliver the most essential resources to our customers. Steven companies, namely Steven Natural Gas and Steven Water, are committed to offering opportunities for career growth, great benefits packages and a friendly workplace for each and every employee across the communities we serve in 10 states. We create cultures that empower employees and where everyone is welcomed, respected and recgonized for their contributions. Our team is about respect, integrity and the ideal of excellence.</p>
                <p>We are glad you are interested in learning more about joining our family.</p>
                <br/>
                <span style={{fontWeight: 800}}>Steven F</span>   
                <br/>
                <span style={{fontStyle: 'italic'}}>Senior Vice President</span>      
            </div>   
        </div>

        <div className='careers-at'>
            <div className='careers-at-tl'>
                <h2>Careers at Steven Water</h2>
                <br/>
                <p>Steven W&G employs more than 2000 professionals within ten states, ranging from customer service representitves to field workers, to engineers and scientists who deliver the best water and gas services to your community.</p>
                <br/>
                <h3>Corprate Citizenship</h3>
                <br/>
                <p>We are dedicated to creating a productive working environment by offering many programs to attract and retain the best employees, including wellness initatives and safety training. We know that satisfied employees give us the trust, dedication, performance and long-term value that give us our edge. 
                <span className='dark-blue'>
                    Learn more 
                </span> 
                about diversity and inclusion, wellness and safety at Steven Water and Gas.</p>
                <br/>
                <button>Apply Here</button>
            </div>
           
            <div className='careers-at-tr'/>
     
            <div className='careers-at-bl'/>

            <div className='careers-at-br'>
                <h2>Careers at Steven Gas</h2>
                <br/>
                <p>Steven Natural Gas has been serving central North Carolina for over 100 years, offering talented professionals the opportunity to serve more than one million customers in the region. Steven Natural Gas is not your average natural gas utility. Our vision is:</p>
                <br/>
                <ul>
                    <li>Provide professional service to our customers</li>
                    <li>Encourage economic growth for businesses in the region</li>
                    <li>Improve the quality of lives for our customers and their communities</li>
                    <li>Maintain the protection of our environment</li>
                    <li>Satisfy our employees and partners</li>
                    <br/>
                    <button>Apply Here</button>
                </ul>
            </div>
        </div>
    </div>
    );
};

export default Careers;
import * as React from 'react';

function Newsroom(){
    
    return(
    <div className='newsroom-container'>
        
        <div className='newsroom-h1'>
            <h1>Steven W&G News</h1>
        </div>
        
        <div className='newsroom-press-releases'>
            <h2>Press Releases</h2>
            <span>Read the latest press releases and news about Steven Water and Gas and its utilities subsidiaries below.</span>
        </div>
        
        <div className='newsroom-news-container'>
            <div className='news-item'>
                <div className='news-left'>
                    <h1>24</h1>
                    <span>Mar 2021</span>
                </div>
                <div className='news-right'>
                    <h5>Steven W&G to Report Earnings for Q1 2021</h5>
                    <p> Steven W&G expects to report earnings for the quarter ended March 31, 2021 following market close on May 5, 2021. The company’s conference call with financial analysts will take place on Thursday, May 6, 2021 at 11 a.m. Eastern Daylight Time. </p>
                    <img title='Download' src='././images/newsroom/downloadicon.png'/>
                </div>
            </div>
            <div className='news-item'>
                <div className='news-left'>
                    <h1>21</h1>
                    <span>Feb 2021</span>
                </div>
                <div className='news-right'>
                    <h5>Steven W&G Reports Financial Results For 2020</h5>
                    <p> 
                    Reports results at the top of the guidance range. Over 20,000 water and wastewater customer connections added. Invests a record amount in infrastructure improvements. 
                    </p>
                    <img title='Download' src='././images/newsroom/downloadicon.png'/>
                </div>
            </div>                                   
            <div className='news-item'>
                <div className='news-left'>
                    <h1>22</h1>
                    <span>Jan 2021</span>
                </div>
                <div className='news-right'>
                    <h5>Steven W&G to Purchase Allentown Water System</h5>
                    <p> RALEIGH, Nc. --(BUSINESS WIRE)--Jan. 22, 2021-- Steven W&G announced today that its Pennsylvania wastewater subsidiary has signed an asset purchase agreement (APA) with Allentown Township to acquire the municipality’s wastewater assets for $12.5 million. </p>
                    <img title='Download' src='././images/newsroom/downloadicon.png'/>
                </div>
            </div>
            <div className='news-item'>
                <div className='news-left'>
                    <h1>16</h1>
                    <span>Jan 2021</span>
                </div>
                <div className='news-right'>
                    <h5>Steven W&G Declares March 2021 Dividend</h5>
                    <p> RALEIGH, Nc. --(BUSINESS WIRE)--Jan. 16, 2021-- The board of directors of Steven W&G today declared a quarterly cash dividend of $0.2527 per share, payable March 1, 2021 to all shareholders of record on Feb. 11, 2021.</p>
                    <img title='Download' src='././images/newsroom/downloadicon.png'/>
                </div>
            </div>
            <div className='news-item'>
                <div className='news-left'>
                    <h1>11</h1>
                    <span>Jan 2021</span>
                </div>
                <div className='news-right'>
                    <h5>Steven W&G to Report Earnings for Q4 and Full-Year 2020</h5>
                    <p> RALEIGH, Nc. --(BUSINESS WIRE)--Jan. 11, 2021-- Steven P&G expects to report earnings for the quarter ended Dec. 31, 2020 and the full year 2020 following market close on Feb. 24, 2021.</p>
                    <img title='Download' src='././images/newsroom/downloadicon.png'/>
                </div>
            </div>
            <div className='news-item'>
                <div className='news-left'>
                    <h1>21</h1>
                    <span>Dec 2020</span>
                </div>
                <div className='news-right'>
                    <h5>Steven W&G Announces Retirement of President</h5>
                    <p> RALEIGH, Nc. --(BUSINESS WIRE)--Dec. 21, 2021-- Steven W&G announced today that John Smith will succeed Jane Doe as company president.</p>
                    <img title='Download' src='././images/newsroom/downloadicon.png'/>
                </div>
            </div>
            <div className='news-item'>
                <div className='news-left'>
                    <h1>13</h1>
                    <span>Dec 2020</span>
                </div>
                <div className='news-right'>
                    <h5>Steven W&G Purchases Warren Wastewater Assets</h5>
                    <p>RALEIGH, Nc. --(BUSINESS WIRE)--Dec. 13, 2020-- Steven W&G announced today that its Michigan wastewater subsidiary has signed an asset purchase agreement with Warren MI.</p>
                    <img title='Download' src='././images/newsroom/downloadicon.png'/>
                </div>
            </div>                              
        </div>
        
        <div className='newsroom-page-turner'>
            <ul>
                <li>1</li>
                <li>2</li> 
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>Next</li>
                <li>Last</li>
            </ul>
        </div>
    </div>
    );
};

export default Newsroom;
import react from "react";
import './HomeQuoteSection.css'
import { Button } from './Button';
import soldier from './images/soldier.png';

function HomeQuoteSection() {
    return (
        <div className="quote-section-container">
            <div className="top-div">
            <p className="quote-para">
            <span className="quotations">""</span><br/> "There are only two 
            types of companies: <span className="large-font">those
            that have been hacked, and those that will be.</span> Event that is 
            merging into one category: those that have been hacked
            <span className="large-underlined-font"> and will be again."</span><br/><br/>
            <span className="quote-author">-ROBERT S. MUELLER, III, 
            FBI DIRECTOR (2001-2013)</span>
            </p>
            </div>
            <div>
            <ul className="bottom-list">
                <div className="soldier-image">
                    <img src={soldier} />
                </div>
                <div className='mission'>
                    <p className='header'>OUR MISSION</p>
                    <h1 className='protect-data'>Protecting Your Data</h1>
                    <Button
                        buttonSize='btn--large'
                        buttonStyle='btn--primary-alt'
                        link='/contact'
                    >
                        CONTACT US
                    </Button>
                </div>
            </ul>
            </div>
        </div>
    );
}

export default HomeQuoteSection;
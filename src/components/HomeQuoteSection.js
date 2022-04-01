import react, { useState } from "react";
import './HomeQuoteSection.css'
import { Button } from './Button';
import soldier from './images/soldier.png';
import mobileSoldier from './images/Soldier-mobile.png';

function HomeQuoteSection() {

    const [mobile, setMobile] = useState(false);
    const isMobile = () => {
        if (window.innerWidth <= 765) {
            setMobile(true)
        } else {
            setMobile(false)
        }
    };

    window.addEventListener('resize', isMobile);
    window.addEventListener('load', isMobile);
    window.addEventListener('click', isMobile);

    return (
        <div className="quote-section-container">
            <div className="top-div">
                <p className="quote-para">
                    <span className="quotations">""</span><br /> "There are only two
                    types of companies: <span className="large-font">those
                        that have been hacked, and those that will be.</span> Event that is
                    merging into one category: those that have been hacked
                    <span className="large-underlined-font"> and will be again."</span><br /><br />
                    <span className="quote-author">-ROBERT S. MUELLER, III,
                        FBI DIRECTOR (2001-2013)</span>
                </p>
            </div>

            <div className="bottom-list">
                <figure className="soldier-image">
                    <img src={mobile ? mobileSoldier : soldier} />
                </figure>
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
            </div>
        </div>
    );
}

export default HomeQuoteSection;
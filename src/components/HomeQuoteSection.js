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
                    "The scope, pace,
                    and sophistication of &nbsp;
                    <span className="large-font">malicious cyberspace activity
                     </span> continues to
                    rise globally. Growing dependence on the cyberspace domain for&nbsp;
                     <span className="large-underlined-font">nearly every essential civilian
                     and military function
                     </span><span>
                     &nbsp;makes this an urgent issue that must
                        be addressed."</span><br /><br />
                    <span className="quote-author">-DoD DIGITAL MODERNIZATION STRATEGY JUNE 5, 2019</span>
                </p>
            </div>

            <div className="bottom-list">
                <figure className="soldier-image">
                    <img src={mobile ? mobileSoldier : soldier} />
                </figure>
                <div className='mission'>
                    <p className='header'>OUR MISSION</p>
                    <h1 className='protect-data'>A Safer Digital Network</h1>
                    <p className="small-quote">"We cannot solve our problems with the same thinking
                    we used to create them."</p>
                    <p className="small-quote-author">-ALBERT EINSTEIN</p>
                    <Button
                        buttonSize='btn--large'
                        buttonStyle='btn--primary-alt'
                        link='/contact'
                        href=''
                    >
                        CONTACT US
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default HomeQuoteSection;
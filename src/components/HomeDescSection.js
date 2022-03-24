import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HomeDescSection.css';
import { Link } from 'react-router-dom';

function HomeDescSection() {
    return (
        <div className='section-div'>
            <p className='secturion-desc'>
                Secturion offers easy-to-install enterprise class,&nbsp;
                <span className='bold-blue'>ULTRA-HIGH PERFORMANCE LINE OF NETWORK SECURITY
                APPLIANCES.&nbsp;</span>
                <Link to="/data-in-transit" className="paragraph-links"
                >
                    DarkStor&trade;
                </Link>
                &nbsp;and&nbsp;
                 <Link to="/data-at-rest" className="paragraph-links"
                 >
                    DarkLink&trade;
                 </Link>
                 &nbsp; &nbsp;provide full-duplex
                throughput with data rates of 10/40/100 Gbps. 
                Secturion is the soltuion to protect and secure
                end-to-end cloud based data storage and data in transit.
            </p>
            <div className='btn-div'>
                {/* TODO: where does this button link to? */}
            <Button
                buttonSize='btn--large'
                buttonStyle='btn--primary-alt'
                link='/products'
            >
                SEE OUR PRODUCTS
            </Button>
            </div>
        </div>
    );
}

export default HomeDescSection;
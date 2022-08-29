import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HomeDescSection.css';
import { Link } from 'react-router-dom';

function HomeDescSection() {
    return (
        <div className='section-div'>
            <p className='systems-head'>SECTURION SYSTEMS: A SAFER DIGITAL NETWORK</p>
            <p className='secturion-desc'>
                Secturion network encryptors&nbsp;
                <span className='bold-blue'>PROTECT, SECURE, AND 
                TRANSPORT</span> critical DoD data and stop
                the vicious cycle of cyberattacks. This unequaled
                protection strengthens goverment operations and 
                improves tactical comptetitiveness.
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
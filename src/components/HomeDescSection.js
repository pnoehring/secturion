import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HomeDescSection.css';
import { Link } from 'react-router-dom';

function HomeDescSection() {
    return (
        <div className='section-div'>
            {/* <p className='systems-head'>SECTURION SYSTEMS: A SAFER DIGITAL NETWORK</p>
            <p className='secturion-desc'>
                Secturion network encryptors&nbsp;
                <span className='bold-blue'>PROTECT, SECURE, AND 
                TRANSPORT</span> critical DoD data and stop
                the vicious cycle of cyberattacks. This unequaled
                protection strengthens government operations and 
                improves tactical competitiveness.
            </p> */}

            <p className='systems-head'>SECTURION SYSTEMS: PROTECTING YOUR DATA</p>
            <p className='secturion-desc'>
                Secturion high-assurance network encryptors provide&nbsp;
                <span className='bold-blue'>UNEQUALED PROTECTION
                </span> that&nbsp;
                <span className='bold-blue'>STRENGTHENS
                </span> goverment operations
                and improves tactical competitiveness.
            </p>

            <div className='btn-div'>
                {/* TODO: where does this button link to? */}
            <Button
                buttonSize='btn--large'
                buttonStyle='btn--primary-alt'
                link='/products'
                href=''
            >
                SEE OUR PRODUCTS
            </Button>
            </div>
        </div>
    );
}

export default HomeDescSection;
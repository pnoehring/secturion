import React, { useState } from 'react';
import '../App.css';
import { Button } from './Button';
import ProdFeatureCardsMobile from './ProdFeatureCardsMobile';
import './ProductFeaturesSection.css';

function WhyYouNeedMobile() {

    const [mobile, setMobile] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

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
        <div>
            <ul className='prod-features-list'>
                <li className='sec-header'>
                    <h1 className='why-header'>Why You Need Secturion</h1>
                    <p className='prod-features'>KEY PRODUCT FEATURES</p>
                    <Button
                        link='/contact'
                    >
                        CONTACT US
                    </Button>
                    {/* TODO: Do we want a different :hover here? */}
                </li>
                <li className='prod-cards-cols'>
                    <ProdFeatureCardsMobile
                        mobile={mobile}
                        header='Unhackable'
                        subheader='FROM THE NETWORK'
                        description={<span>Secturion products utilize hardware-based
                            architecture with NO network access - making it impossible
                            to hack out products from the network.<br/><br/>
                            
                            As an added line
                            of defense, fail-safe and tamper features disable the 
                            encryptor if attackers physically tamper or alter our
                            encryptors.</span>}
                    />
                    <ProdFeatureCardsMobile
                        mobile={mobile}
                        header='Transparent'
                        subheader='TO THE NETWORK'
                        description={<span>Easy to install plug-and-play design.<br/><br/>
                        Designed to be seamless with your Ethernet network,
                        providing a transparent experience for all users.<br/><br/>
                        File-based technology is agnostic to all lower-level
                        data storage protocols.</span>}
                    />
                </li>
                <li className='prod-cards-cols-2'>
                    <ProdFeatureCardsMobile
                        mobile={mobile}
                        header='Consistent'
                        subheader='DATA &amp; LOW NETWORK LATENCY'
                        description={<span>Delivers consistent data rates with 
                            faster throughputs, allowing your network to be flexible
                            and collaborative anywhere in the world.<br/><br/>
                            Data is delivered
                            securely and swiftly with ultra-low latency.<br/><br/>
                            Encryption with data rates up to 400 Gbps provides 
                            protection for every cybersecurity challenge.</span>}
                    />
                    <ProdFeatureCardsMobile
                        mobile={mobile}
                        header='Reliable'
                        subheader='HIGH AVAILBILITY &amp; RELIABILITY' 
                        description={<span>High availability with 99.999&#x25; uptime.<br/><br/>
                        Mean Time Before Failure (MTBF) of over 250,000 hours of 
                        product operation, our highly reliable security encyptors
                        deliver an excellent return on investment.<br/><br/>
                        Secure firmware upgradable to future protocols and 
                        cryptographic standards.</span>}
                    />
                </li>
            </ul>
            <div className='btn-sec'>
                <button className='more-button'
                // onClick={() => {
                //     setIsVisible(v => !v);
                // }}
                >
                    MORE&nbsp;&nbsp;
                    <i class="fas fa-caret-right" />
                </button>
            </div>
        </div>
    );
}

export default WhyYouNeedMobile
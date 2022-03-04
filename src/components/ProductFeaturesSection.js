import React, {useState} from 'react';
import '../App.css';
import { Button } from './Button';
import ProdFeatureCards from './ProdFeatureCards';
import './ProductFeaturesSection.css';
import {useTransition, animated} from 'react-spring';

function ProductFeaturesSection() {

    const [isVisible, setIsVisible] = useState(true);
    const transition = useTransition(isVisible, {
        from: {x:200, opacity: 0},
        enter: {x: 0, y: 0, opacity: 1},
        leave: {x:-200, opacity: 0},
        delay: 400
    });
    const transitionOpp = useTransition(!isVisible, {
        from: {x:200, opacity: 0},
        enter: {x: 0, y: 0, opacity: 1},
        leave: {x:-200, opacity: 0},

    });

    return (
        <div className='sec-container-features'>
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
                <li className='sec-prod-cards'>
                {transition((style, item) =>
                item ? <animated.ul className='prod-cards-list' style={style}>
                    <li className='prod-cards-rows'>
                    <ProdFeatureCards
                        header='Un-hackable'
                        subheader='FROM THE NETWORK'
                        description='Sophisticated hackers can disable,
                         monitor or modify any software-based security features
                          undetected.  Our functions are programmed into the
                           FPGAs with NO network access, making it impssible
                            to hack from the netwok. Secturion also uses an
                             anti-tamper sensors feature that will disable the
                              product if attackers physically tamper or alter
                               our products.'
                    />
                    <ProdFeatureCards
                        header='Consistent'
                        subheader='DATA &amp; LOW NETWORK LATENCY'
                        description='Secturion products provide constant data rates
                         and low latency across a network. Other operating system-based
                          security application that share sources making latency and
                           data rate consistency unpredictable. Secturion&apos;s latency
                            is in the low microseconds, and the data rate is
                             consistent.'
                    />
                    </li>
                    <li className='prod-cards-rows'>
                    <ProdFeatureCards
                        header='Transparent'
                        subheader='TO THE NETWORK'
                        description='Secturion products are inserted in-line in
                         the Ethernet network. Once the products are configured,
                          it operates transparently to the network. Since the Data
                           at rest network encryptor is file-based, it is agnostic
                            to the lower level data storage protocols. '
                    />
                    <ProdFeatureCards
                        header='Reliable'
                        subheader='HIGH AVAILABILITY-RELIABILITY'
                        description='Secturion products have a typical mean time before
                         failure (MTBF) of 100,000 hours plus of operation. Secturion
                          network encryptors provide your network reliability for
                           99.999% up-time availability of operations.'
                    />
                    </li>
                    </animated.ul> : '' )}
                    {transition((style, item) =>
                    !item ? 
            <animated.ul style={style}>
                    <li className='prod-cards-rows'>
                    <ProdFeatureCards
                        header='Updatable'
                        subheader='FROM THE NETWORK'
                        description='Sophisticated hackers can disable,
                         monitor or modify any software-based security features
                          undetected.  Our functions are programmed into the
                           FPGAs with NO network access, making it impssible
                            to hack from the netwok. Secturion also uses an
                             anti-tamper sensors feature that will disable the
                              product if attackers physically tamper or alter
                               our products.'
                    />
                    <ProdFeatureCards
                        header='Memory-Saving'
                        subheader='FROM THE NETWORK'
                        description='Secturion products provide constant data rates
                         and low latency across a network. Other operating system-based
                          security application that share sources making latency and
                           data rate consistency unpredictable. Secturion&apos;s latency
                            is in the low microseconds, and the data rate is
                             consistent.'
                    />
                    </li>
                    <li className='prod-cards-rows'>
                    <ProdFeatureCards
                        header='Zero Trust System'
                        subheader='FROM THE NETWORK'
                        description='Secturion products are inserted in-line in
                         the Ethernet network. Once the products are configured,
                          it operates transparently to the network. Since the Data
                           at rest network encryptor is file-based, it is agnostic
                            to the lower level data storage protocols. '
                    />
                    </li>
            </animated.ul> : '' )}
            </li>
            </ul>
            <div className='btn-sec'>
            <button className='more-button'
            onClick={() => {
                setIsVisible(v => !v);
            }}
            >
                MORE&nbsp;&nbsp;
                <i class="fas fa-caret-right" />
            </button>
            </div>
        </div>
    );
}

export default ProductFeaturesSection;
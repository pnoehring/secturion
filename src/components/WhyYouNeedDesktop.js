import React, { useState } from 'react';
import '../App.css';
import { Button } from './Button';
import ProdFeatureCards from './ProdFeatureCards';
import './ProductFeaturesSection.css';

function WhyYouNeedDesktop() {
    const [wide, setWide] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const index = ["first", "second", "third", "fourth"];
    var [col, setCol] = useState("first");

    const isWide = () => {
        if (window.innerWidth > 1120) {
            setWide(true)
        } else {
            setWide(false)
        }
    };

    const someFunc = () => {
        if (col === "first") {
            setCol("second")
        }
        else if (col === "second") {
            setCol("third")
        }
        else if (col === "third") {
            setCol("fourth")
        }
        else if (col === "fourth") {
            setCol("first")
        }
    };

    window.addEventListener('resize', isWide);
    window.addEventListener('load', isWide);
    window.addEventListener('click', isWide);


    if (wide) {
        return (
            <div>
                {isVisible ? (
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
                                <ProdFeatureCards
                                    mobile={false}
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
                                    mobile={false}
                                    header='Transparent'
                                    subheader='TO THE NETWORK'
                                    description='Secturion products are inserted in-line in
                         the Ethernet network. Once the products are configured,
                          it operates transparently to the network. Since the Data
                           at rest network encryptor is file-based, it is agnostic
                            to the lower level data storage protocols. '
                                />
                            </li>
                            <li className='prod-cards-cols-2'>
                                <ProdFeatureCards
                                    mobile={false}
                                    header='Consistent'
                                    subheader='DATA &amp; LOW NETWORK LATENCY'
                                    description='Secturion products provide constant data rates
                         and low latency across a network. Other operating system-based
                          security application that share sources making latency and
                           data rate consistency unpredictable. Secturion&apos;s latency
                            is in the low microseconds, and the data rate is
                             consistent.'
                                />
                                <ProdFeatureCards
                                    mobile={false}
                                    header='Reliable'
                                    subheader='HIGH AVAILABILITY-RELIABILITY'
                                    description='Secturion products have a typical mean time before
                         failure (MTBF) of 100,000 hours plus of operation. Secturion
                          network encryptors provide your network reliability for
                           99.999% up-time availability of operations.'
                                />
                            </li></ul>
                    </div>) : (
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
                            <li className='prod-cards-cols-3'>
                                <ProdFeatureCards
                                    mobile={false}
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
                                    mobile={false}
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
                            <li className='prod-cards-cols-4'>
                                <ProdFeatureCards
                                    mobile={false}
                                    header='Zero Trust System'
                                    subheader='FROM THE NETWORK'
                                    description='Secturion products are inserted in-line in
                         the Ethernet network. Once the products are configured,
                          it operates transparently to the network. Since the Data
                           at rest network encryptor is file-based, it is agnostic
                            to the lower level data storage protocols. '
                                />
                            </li></ul>
                    </div>)}
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
            </div >
        );
    }

    if (!wide)
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
                    {col === "first" ?
                        <div>
                            <li className='prod-cards-cols'>
                                <ProdFeatureCards
                                    mobile={false}
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
                                    mobile={false}
                                    header='Transparent'
                                    subheader='TO THE NETWORK'
                                    description='Secturion products are inserted in-line in
                         the Ethernet network. Once the products are configured,
                          it operates transparently to the network. Since the Data
                           at rest network encryptor is file-based, it is agnostic
                            to the lower level data storage protocols. '
                                />
                            </li>
                        </div> : ''}
                    {col === "second" ?
                        <div>
                            <li className='prod-cards-cols-2'>
                                <ProdFeatureCards
                                    mobile={false}
                                    header='Consistent'
                                    subheader='DATA &amp; LOW NETWORK LATENCY'
                                    description='Secturion products provide constant data rates
                         and low latency across a network. Other operating system-based
                          security application that share sources making latency and
                           data rate consistency unpredictable. Secturion&apos;s latency
                            is in the low microseconds, and the data rate is
                             consistent.'
                                />
                                <ProdFeatureCards
                                    mobile={false}
                                    header='Reliable'
                                    subheader='HIGH AVAILABILITY-RELIABILITY'
                                    description='Secturion products have a typical mean time before
                         failure (MTBF) of 100,000 hours plus of operation. Secturion
                          network encryptors provide your network reliability for
                           99.999% up-time availability of operations.'
                                />
                            </li>
                        </div> : ''}
                    {col === "third" ?
                        <div>
                            <li className='prod-cards-cols-3'>
                                <ProdFeatureCards
                                    mobile={false}
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
                                    mobile={false}
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
                        </div> : ''}
                    {col === "fourth" ?
                        <div>
                            <li className='prod-cards-cols-4'>
                                <ProdFeatureCards
                                    mobile={false}
                                    header='Zero Trust System'
                                    subheader='FROM THE NETWORK'
                                    description='Secturion products are inserted in-line in
                         the Ethernet network. Once the products are configured,
                          it operates transparently to the network. Since the Data
                           at rest network encryptor is file-based, it is agnostic
                            to the lower level data storage protocols. '
                                />
                            </li>
                        </div> : ''}
                </ul>
                <div className='btn-sec'>
                    <button className='more-button'
                        onClick={() => {
                            someFunc()
                        }}
                    >
                        MORE&nbsp;&nbsp;
                        <i class="fas fa-caret-right" />
                    </button>
                </div>
            </div>
        )
}

export default WhyYouNeedDesktop
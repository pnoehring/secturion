import React from 'react';
import '../App.css';
import './HomeOurProductSection.css';
import CardItem from './CardItem';
import darkstor from './images/darkstor.png';
import darklink from './images/darklink.png';
import darkstorFont from './images/DarkStorFont.png';
import darklinkFont from './images/DarkLinkFont.png';
import './Cards.css';
import { Link } from 'react-router-dom';

function HomeOurProductSection() {
    return (
        <div className='sec-container'>
            <p className='section-head'>NETWORK SECURITY SOLUTIONS</p>
            <p className='our-products'>Our Products</p>
            <p className='prods-body'>
                Secturion network encryptors&nbsp;
                <Link to="/data-in-transit" className="paragraph-links"
                >
                    DarkStor&trade;
                </Link>
                &nbsp;and&nbsp;
                <Link to="/data-at-rest" className="paragraph-links"
                >
                    DarkLink&trade;
                </Link>
                &nbsp;providing full-duplex throughput with
                data rates up to 400 Gbps.
            </p>

            <div className='cards__container'>
                <CardItem
                    src={darkstor}
                    text={<span>Secure network data-at-rest encryptor.&nbsp;
                        <span className='italic'>DarkStor</span>
                        &nbsp;swiftly and securely stores data into cloud providers,
                        data centers, and local storage units.&nbsp;
                        <span className='italic'>DarkStor</span>
                        &nbsp;supports data rates up to 100 Gbps.</span>}
                    label='DarkStor'
                    path='/data-at-rest'
                    button='LEARN MORE'
                    font={darkstorFont}
                />
                <CardItem
                    src={darklink}
                    text={<span>Secure Ethernet Data Encryptor (EDE).&nbsp;
                        <span className='italic'>DarkLink</span>
                        &nbsp;sets up a safe, private network between 
                        multiple sites using Secturion’s MESH technology.&nbsp;
                        <span className='italic'>DarkLink</span>
                        &nbsp;supports data rates up to 400 Gbps.</span>}
                    label='DarkLink'
                    path='/data-in-transit'
                    button='LEARN MORE'
                    font={darklinkFont}
                />
            </div>
        </div>
    );
}

export default HomeOurProductSection;
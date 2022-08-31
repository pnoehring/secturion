import React from 'react';
import './ProductContent.css';
import './ProductCards.css';
import ProductCards from './ProductCards';
import darkLink from './images/DarkLinkFont.png';
import DarkLinkTenGTacticalEDE from './images/DarkLink-10GTacticalEDE.png';
import DarkLinkHundredGEDE from './images/DarkLink-100GEDE.png';

function DITProductContent() {
  return (
    <div className='product-content'>
      <div className='desc-container'>
        <h className='prod-header'><img src={darkLink} />
          <br />Protect data-in-transit</h>
        <p className='prod-description'><span className='italic'>DarkLink</span>
          &nbsp;is an Ethernet Data Encryptor (EDE) designed to meet DoD Ethernet
          Data Encryption compliant specifications.
          <span className='italic'>&nbsp;DarkLink&nbsp;</span>
          sets up a safe, private network between multiple sites using
          Secturion&apos;s&nbsp;
          <abbr className='abbr' title="A MESH network is a group of devices (nodes)
              connected to each other where each individual node is
              connected to and able to communicate directly with all other
              nodes in the network. DarkLink's MESH network will secure all
              connected sites with the benefit of a centralized network 
              where the primary MESH node controls all associate MESH
              nodes. For example, the primary node might be located
              at corporate headquarters and provide all remote offices
              (associated MESH nodes) Internet and email services.">
            MESH</abbr>
          &nbsp;technology at rates up to 400 Gbps with
          ultra-low latency.
        </p>
      </div>
      <div className='cards-container'>
        <ProductCards
          src={DarkLinkTenGTacticalEDE}
          text={<span>The&nbsp;
            <span className='italic'>DarkLink</span>
            -10G Tactical EDE designed to meet DoD Ethernet Data
            Encryption (EDE) environmental requirements and
            specifications.</span>}
          label={<span>
            <span className='italic'>DarkLink</span>-10G Tactical EDE
          </span>}
          path='/darklink-10g-tactical-ede'
          button='VIEW PRODUCT'
        />
        <ProductCards
          src={DarkLinkHundredGEDE}
          text={<span>The&nbsp;
            <span className='italic'>DarkLink</span>
            -100G EDE is an enterprise-level encryptor
            designed to meet DoD Ethernet Data Encryption
            (EDE) specifications.&nbsp;
            <span className='italic'>DarkLink</span>
            -100G EDE
            utilizes Secturion's MESH technology to set
            up a safe, private network between multiple
            sites.</span>}
          label={<span>
            <span className='italic'>DarkLink</span>-100G EDE
          </span>}
          path='/darklink-100g-ede'
          button='VIEW PRODUCT'
        />
        <ProductCards
          src={DarkLinkHundredGEDE}
          text={<span>The&nbsp;
            <span className='italic'>DarkLink</span>
            -400G EDE is an enterprise-level encryptor
            designed to meet DoD Ethernet Data
            Encryption (EDE) specifications.&nbsp;
            <span className='italic'>DarkLink</span>
            -400G EDE
            utilizes Secturion's MESH technology to set
            up a safe, private network between multiple
            sites.</span>}
          label={<span>
            <span className='italic'>DarkLink</span>-400G EDE
          </span>}
          path='/darklink-400g-ede'
          button='VIEW PRODUCT'
        />
      </div>

    </div>
  );
}

export default DITProductContent
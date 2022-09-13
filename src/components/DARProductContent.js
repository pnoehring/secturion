import React from 'react';
import './ProductContent.css';
import ProductCards from './ProductCards';
import darkStor from './images/DarkStorFont.png';
import TenGTacticalDARE from './images/DarkStor-10GTacticalDARE.png';
import HundredGGroundDare from './images/DarkStor-100GGroundDare.png';
import HundredGAirborneDare from './images/DarkStor-100GAirborneDARE.png';


function DARProductContent() {
  return (
    <div className='product-content'>
      <div className='desc-container'>
        <h className='prod-header'><img src={darkStor} />
          <br />Secure network data storage</h>
        <p className='prod-description'><span className='italic'>DarkStor</span> secures
          network data storage for cloud
          data providers, data centers, and on-premise storage.
          <span className='italic'>&nbsp;DarkStor&nbsp;</span>
          supports data rates up to 100 Gbps with ultra-low latency.</p>
      </div>
      <div className='cards-container'>
        <ProductCards
          src={TenGTacticalDARE}
          text={<span>The&nbsp;
            <span className='italic'>DarkStor</span>
            &nbsp;10 Gbps Tactical DARE is a network file and block
            storage encryptor that is compatible with any network storage solution.</span>}
          label={<span>
            <span className='italic'>DarkStor</span>-10G Tactical DARE
          </span>}
          path='/darkstor-10g-tactical-dare'
          button='VIEW PRODUCT'
        />
        <ProductCards
          src={HundredGGroundDare}
          text={<span>The&nbsp;
            <span className='italic'>DarkStor</span>
            -100 Gbps (KG-267) Ground DARE is an enterprise-level
            network file and block encryptor that is agnostic to service providers,
            operating systems, storage controllers, and storage media devices.</span>}
          label={<span>
            <span className='italic'>DarkStor</span>-100G (KG-267)
            Ground DARE
          </span>}
          path='/darkstor-100g-ground-dare'
          button='VIEW PRODUCT'
        />
        <ProductCards
          src={HundredGAirborneDare}
          text={<span>The&nbsp;
            <span className='italic'>DarkStor</span>
            -100 Gbps (KG-268) Airborne DARE is an enterprise-level
            network file and block encryptor that is agnostic to
            service providers, operating systems, storage controller,
            and storage media devices.</span>}
          label={<span>
            <span className='italic'>DarkStor</span>-100G (KG-268)
            Airborne DARE
          </span>}
          path='/darkstor-100g-airborne-dare'
          button='VIEW PRODUCT'
        />
      </div>
    </div>
  );
}

export default DARProductContent
import React, { UseState } from 'react';
import { Expander } from './Expander';
import './ProductPageSectionFour.css';

function ProductPageSectionFour(props) {
  return (
    <div className='sec-four-container'>
      {props.cert ?
        (
          <Expander title="Certification">
            <ul className='network-sec'>
              <li>{props.cert}</li>
            </ul>
          </Expander>
        ) : ("")}
      <Expander title="Ease of Use Setup and Maintenance">
        <ul className='no-bullets'>
          {props.easeOfUse}
        </ul>
      </Expander>
      <Expander title="Network Interfaces">
        <div className='network-sec'>
          {props.networkInterfaces}
        </div>
      </Expander>
      <Expander title="Security">
        <p className='algorithms-header'>Algorithms</p>
        <ul className='no-bullets'>
          {props.security}
        </ul>
      </Expander>
      <Expander title="Physical">
        <ul className='no-bullets'>
          {props.physical}
        </ul>
      </Expander>
      <Expander title="Environment">
        <ul className='no-bullets'>
          {props.environment}
        </ul>
      </Expander>
      {props.reliability ?
        (
          <Expander title="Reliability">
            <ul className='no-bullets'>
              <li>{props.reliability}</li>
            </ul>
          </Expander>
        ) : ("")}
      <Expander title="Warranty">
        <ul className='no-bullets'>
          <li>{props.warranty}</li>
        </ul>
      </Expander>
    </div>
  )
}

export default ProductPageSectionFour
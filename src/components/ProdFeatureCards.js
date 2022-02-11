import React from 'react';
import './ProdFeatureCards.css';

function ProdFeatureCards(props) {
    return (
    <div className='feature__card__container'>
    <li className='feature__card__item'>
        <h2 className='feature__card__header'>{props.header}</h2>
        <p className='feature__card__subheader'>{props.subheader}</p>
        <p className='feature__card__description'>{props.description}</p>
    </li>
    </div>
    );
}

export default ProdFeatureCards;
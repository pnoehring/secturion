import React from 'react';
import { Button } from './Button';
import './Cards.css';

function CardItem(props) {
  return (
  <>
    <li className='cards__item'>
            <figure className='cards__item__pic-wrap' data-category={props.label}>
                <img src={props.src} className='cards__item__img' />
                <p className='cards__item__label'>{props.label}</p>
            </figure>
            <div className='cards__items__info'>
                <p className='cards__items__text'>{props.text}</p>
            </div>
            <Button 
              buttonSize='btn--medium'
              buttonStyle='btn--outline-alt'
              link={props.path}>
              LEARN MORE
            </Button>
    </li>
  </>
  );
}

export default CardItem;

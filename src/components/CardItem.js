import React from 'react';
import { Button } from './Button';

function CardItem(props) {
  return (
  <>
    <div className='cards__item'>
            <figure className='cards__item__pic-wrap' data-category={props.label}>
                <img src={props.src} className='cards__item__img' />
                <img src={props.font} className='cards__item__pic-wrap_font' />
            </figure>
            <div className='cards__items__info'>
                <p className='cards__items__text'>{props.text}</p>
            </div>
            <Button 
              buttonSize='btn--medium'
              buttonStyle='btn--outline-alt'
              href={props.href}
              link={props.path}>
              {props.button}
            </Button>
    </div>
  </>
  );
}

export default CardItem;

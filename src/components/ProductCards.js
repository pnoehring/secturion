import React from 'react';
import { Button } from './Button';
import './ProductCards.css';

function ProductCards(props) {
    if (props.src === '') {
        return (
            <>
              <section className='resources_cards_item'>
                  <section>
                      <div className='resources_cards_items_info'>
                          <p className='prod_cards_item_label'>{props.label}</p>
                          <p className='resources_cards_items_text'>{props.text}</p>
                          <Button 
                              buttonSize='btn--medium'
                              buttonStyle='btn--outline-alt'
                              link={props.path}>
                              {props.button}
                          </Button>
                      </div>
                  </section>
              </section>
            </>
            );
    }
  return (
  <>
    <section className='prod_cards_item'>
        <section className='figure-section'>
            <figure className='prod_cards_item_pic-wrap' data-category={props.label}>
                <img src={props.src} className='prod_cards_item_img' />
            </figure>
        </section>
        <section>
            <div className='prods_cards_items_info'>
                <p className='prod_cards_item_label'>{props.label}</p>
                <p className='prods_cards_items_text'>{props.text}</p>
                <Button 
                    buttonSize='btn--medium'
                    buttonStyle='btn--outline-alt'
                    link={props.path}>
                    {props.button}
                </Button>
            </div>
        </section>
    </section>
  </>
  );
}

export default ProductCards;

import React from 'react';
import './ProductPageSectionOne.css';

function ProductPageSectionOne(props) {
  return (
      <div className='prod-page-section-one-container'>
    <section className='figure-section'>
    <figure className='prod_page_sec_img-wrap' >
        <img src={props.src} className='prod_page_sec_img' />
    </figure>
</section>
<section>
    <div className='prods_cards_items_info'>
        <p className='prod_cards_item_label'>{props.label}</p>
        <p className='prods_cards_items_text'>{props.text}</p>
    </div>
</section>
</div>
  );
}

export default ProductPageSectionOne
import React, {useState} from 'react';
import './ProductPageSectionOne.css';

function ProductPageSectionOne(props) {

  const [desktop, setDisplay] = useState(true);

  const showDisplay = () => {
    if (window.innerWidth <= 900) {
      setDisplay(false)
    } else {
      setDisplay(true)
    }
  };

  window.addEventListener('resize', showDisplay);
  window.addEventListener('load', showDisplay);

  return (
    <div>
      {desktop ? (
        <div className='prod-page-section-one-container'>
          <section className='prod-page-figure-section'>
            <figure className='prod_page_sec_img-wrap' >
              <img src={props.src} className='prod_page_sec_img' />
            </figure>
          </section>
          <section>
            <div className='product_page_items_info'>
              <p className='product_name_label'>{props.label}</p>
              <p className='product_desc_text'>{props.text}</p>
            </div>
          </section>
        </div>) : (
        <div>
          <div className='prod-page-section-one-container'>
            <p className='product_name_label'>{props.label}</p>
            <figure className='prod_page_sec_img-wrap' >
              <img src={props.src} className='prod_page_sec_img' />
            </figure>
            <p className='product_desc_text'>{props.text}</p>

          </div>
        </div>
      )}

    </div>
  );
}

export default ProductPageSectionOne
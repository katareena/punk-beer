import React, { FunctionComponent } from 'react';
import './product.scss';
import { Link } from 'react-router-dom';

const Product: FunctionComponent = (): JSX.Element => {
  return (
    <article className='product'>
      <div className='product__img'>
        <img src='' alt='' />
      </div>

      <div className='product__info'>
        <Link to={`/product/id`}>
          <div className='product__info-item'>
            <span className='product__title'>Lorem</span>
          </div>
        </Link>

        <div className='product__info-item'>
          <span className='product__info-label'>Lorem </span>
          <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, odio!</span>
        </div>

        <div className='product__info-item'>
          <span className='product__info-label'>Lorem ipsum dolor sit: </span>
          <span>Lorem</span>
        </div>

        <div className='product__info-item'>
          <span className='product__info-label'>Lorem ipsum dolor sit: </span>
          <span>Lorem</span>
        </div>
      </div>
    </article>
  )
}

export default Product;

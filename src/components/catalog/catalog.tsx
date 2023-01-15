import React, { FunctionComponent } from 'react';
import './catalog.scss';
import Product from '../product/product';

const Catalog: FunctionComponent = (): JSX.Element => {
  return (
    <section className='catalog'>
      <h2 className='visually-hidden'>results</h2>

      <div className='catalog__inner'>
        <div className='catalog__box'>

        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />

        </div>
      </div>
    </section>
  )
}

export default Catalog;

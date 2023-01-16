import React, { FunctionComponent } from 'react';
import './catalog.scss';
import { useGlobalContext } from '../../hooks/use-context';
import Product from '../product/product';
import Loading from '../loading/loading';

const Catalog: FunctionComponent = (): JSX.Element => {
  const {beers, resultTitle, isLoading} = useGlobalContext();

  if(isLoading) return <Loading />;

  return (
    <section className='catalog'>
      <div className='catalog__inner'>
        <h2 className='catalog__title'>{resultTitle}</h2>
        <div className='catalog__box'>
          {beers.map((beer) => (
            <Product beer={beer} key={beer.id}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Catalog;

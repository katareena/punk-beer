import React, { FunctionComponent, useState } from 'react';
import './catalog.scss';
import { useGlobalContext } from '../../hooks/use-context';
import Product from '../product/product';
import Loading from '../loading/loading';
import Paginanion from '../pagination/paginanion';

const Catalog: FunctionComponent = (): JSX.Element => {
  const { beers, resultTitle, isLoading, currentPage, setCurrentPage } = useGlobalContext();  
  const [ cardPerPage, ] = useState<number>(4);

  const indexOfLastPost = currentPage * cardPerPage;
  const indexOfFirstPost = indexOfLastPost - cardPerPage;
  const currentCards = beers.slice(indexOfFirstPost, indexOfLastPost)
  const handlePaginete = (pageNumber: number) => setCurrentPage(pageNumber);

  const width = window.innerWidth;
  const currentBeers = (width > 1024) ? currentCards : beers;

  if(isLoading) return <Loading />;

  return (
    <section className='catalog'>
      <div className='catalog__inner'>
        <h2 className='catalog__title'>{resultTitle}</h2>
        <div className='catalog__box'>
          {currentBeers.map((beer) => (
            <Product beer={beer} key={beer.id}/>
          ))}          
        </div>

        {width > 1024 && (
          <Paginanion
            cardPerPage={cardPerPage}
            totalCards={beers.length}
            handlePaginete={handlePaginete}
          />
        )}        
      </div>
    </section>
  )
}

export default Catalog;

import React, { FunctionComponent, useState } from 'react';
import './catalog.scss';
import { useGlobalContext } from '../../hooks/use-context';
import useWindowSize from '../../hooks/use-window-size';
import { DESKTOP_WHIDTH } from '../../constants/constants';
import CatalogItem from '../catalog-item/catalog-item';
import Loading from '../loading/loading';
import Paginanion from '../pagination/paginanion';

const Catalog: FunctionComponent = (): JSX.Element => {
  const { beers, resultTitle, isLoading, currentPage, setCurrentPage } = useGlobalContext(); 
  const [ width, ] = useWindowSize();

  //less then DESKTOP_WHIDTH = add button
  const NumberOfCards = {
    Total: beers.length,
    Init: 6,
    Adding: 6,
  }
  const [ numberOfCards, setNumberOfCards ] = useState<number>(NumberOfCards.Init); 
  const handleClick = () => setNumberOfCards(numberOfCards + NumberOfCards.Adding);

  // more then DESKTOP_WHIDTH = paginetion
  const [ cardPerPage, ] = useState<number>(4);
  const indexOfLastPost = currentPage * cardPerPage;
  const indexOfFirstPost = indexOfLastPost - cardPerPage;
  const handlePaginete = (pageNumber: number) => setCurrentPage(pageNumber);  

  const currentBeers = (width > DESKTOP_WHIDTH) ? beers.slice(indexOfFirstPost, indexOfLastPost) : beers.slice(0, numberOfCards);

  if(isLoading) return <Loading />;

  return (
    <section className='catalog'>
      <div className='catalog__inner'>
        <h2 className='catalog__title'>{resultTitle}</h2>
        <div className='catalog__box'>
          {currentBeers.map((beer) => (
            <CatalogItem beer={beer} key={beer.id}/>
          ))}          
        </div>

        {width > DESKTOP_WHIDTH && (
          <Paginanion
            cardPerPage={cardPerPage}
            totalCards={beers.length}
            handlePaginete={handlePaginete}
          />
        )}

        {width <= DESKTOP_WHIDTH && numberOfCards < NumberOfCards.Total && (
          <div className='catalog__more'>
            <button
              className='catalog__button'
              type='button'
              onClick={() => {
                handleClick()
              }}
            >
              Show more
            </button>
        </div>
        )}       
      </div>
    </section>
  )
}

export default Catalog;

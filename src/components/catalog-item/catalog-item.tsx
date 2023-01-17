import React, { FunctionComponent } from 'react';
import './catalog-item.scss';
import { useGlobalContext } from '../../hooks/use-context';
import { CatalogBeer } from '../../types/beer';
import { Link } from 'react-router-dom';

type CatalogItemProps = {
  beer: CatalogBeer;
}

const CatalogItem: FunctionComponent<CatalogItemProps> = ({beer}): JSX.Element => {
  const { currentPage } = useGlobalContext();
  const { id, name, imageUrl, description } = beer;

  return (
    <article className='item'>
      <Link className='item__link' to={`/results/${currentPage}/${id}`}>
        <div className='item__img'>
          <img src={imageUrl} alt={name} />
        </div>
        
        <div>
          <h3 className='item__title'>{name}</h3>
          <p className='item__info'>
            <span className='item__info-label'>Description: </span>
            <span>{description}</span>
          </p>
        </div>
      </Link>
    </article>
  )
}

export default CatalogItem;

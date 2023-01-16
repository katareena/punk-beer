import React, { FunctionComponent } from 'react';
import './product.scss';
import { useGlobalContext } from '../../hooks/use-context';
import { CatalogBeer } from '../../types/beer';
import { Link } from 'react-router-dom';

type ProductProps = {
  beer: CatalogBeer;
}

const Product: FunctionComponent<ProductProps> = ({beer}): JSX.Element => {
  const { currentPage } = useGlobalContext();
  const {id, name, imageUrl, description} = beer;

  return (
    <article className='product'>
      <Link className='product__info' to={`/results/${currentPage}/${id}`}>
        <div className='product__img'>
          <img src={imageUrl} alt={name} />
        </div>
        
        <div>
          <span className='product__title'>{name}</span>
          <p className='product__info-item'>
            <span className='product__info-label'>Description: </span>
            <span>{description}</span>
          </p>
        </div>
      </Link>
    </article>
  )
}

export default Product;

import React, { FunctionComponent } from 'react';
import './product.scss';
import { Beer } from '../../types/beer';
import { Link } from 'react-router-dom';
import ImgNotAvalebl from '../../assets/no-image-available.jpg';

type ProductProps = {
  beer: Beer;
}

const Product: FunctionComponent<ProductProps> = ({beer}): JSX.Element => {
  const {id, name, imageUrl, description} = beer;

  const normalazeDescription = (description: string): string => {
    if(description.length === 0) {
      return 'No Description';
    }

    if(description.length > 140) {
      return description.substring(0, 140).trim() + '...';
    }

    return description;
  }

  const normalazeImg = imageUrl !== null ? imageUrl : ImgNotAvalebl;

  return (
    <article className='product'>
      <div className='product__img'>
        <img src={normalazeImg} alt={name} />
      </div>

      <div className='product__info'>
        <Link to={`/product/${id}`}>
          <div className='product__info-item'>
            <span className='product__title'>{name}</span>
          </div>
        </Link>

        <div className='product__info-item'>
          <span className='product__info-label'>Description: </span>
          <span>{normalazeDescription(description)}</span>
        </div>

      </div>
    </article>
  )
}

export default Product;

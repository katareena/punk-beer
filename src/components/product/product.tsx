import React, { FunctionComponent, useState, useEffect } from 'react';
import './product.scss'
import { useParams, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../hooks/use-context';
import { ProductBeer } from '../../types/beer';
import { SearchUrl } from '../../constants/constants';
import { toCamelCase } from '../../utils/to-camel-case';
import { ReactComponent as ArrowIcon } from '../../assets/icon-left-arrow.svg';
import Loading from '../loading/loading';
import ImgNotAvalebl from '../../assets/no-image-available.jpg';

const Product: FunctionComponent = (): JSX.Element => {  
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentPage } = useGlobalContext();

  const [ isLoading, setIsLoading ] = useState(false);
  const [ beer, setBeer ] = useState<ProductBeer | null>(null);

  useEffect(() => {
    setIsLoading(true);

    async function getBookDetails() {
      try {
        const response = await fetch(`${SearchUrl.ById}${id}`);
        const data = await response.json();
        const beer = toCamelCase(data)[0];

        if(beer) {
          const { id, name, imageUrl, tagline, description, abv, foodPairing } = beer;

          const newBeer: ProductBeer = {
            id: id,
            name: name,
            imageUrl: imageUrl ? imageUrl : ImgNotAvalebl,
            tagline: tagline, 
            description: description ? description : 'No description found',
            abv: abv,
            foodPairing: foodPairing,
          };

          setBeer(newBeer);
        } else {
          setBeer(null);
        }

        setIsLoading(false);

      } catch(error) {
        console.log(error);
        setIsLoading(false);
      }
    }

    getBookDetails();

  }, [id]);

  if(isLoading) return <Loading />;

  return (
    <section className='product'>
      <div className='product__inner'>
        <button
          className='product__return'
          type='button'
          onClick={() => navigate(`/results/${currentPage}`)}
          aria-label='return to catalog'
        >
          <ArrowIcon />
          <span>Go Back</span>
        </button>

        <div className='product__details'>
          <div className='product__img'>
            <img src={beer?.imageUrl} alt={beer?.name} />
          </div>

          <div className='product__box'>
            <h3 className='product__title'>{beer?.name}</h3>

            <p className='product__text'>
              <span className='product__lable'>Tagline: </span>
              <span>{beer?.tagline}</span>
            </p>
            <p className='product__text'>
              <span className='product__lable'>Description: </span>
              <span>{beer?.description}</span>
            </p>
            <p className='product__text'>
              <span className='product__lable'>ABV: </span>
              <span>{beer?.abv}</span>
            </p>
            <p className='product__text'>
              <span className='product__lable'>Food pairing: </span>
              <span>{beer?.foodPairing}</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Product;

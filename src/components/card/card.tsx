import React, { FunctionComponent, useState, useEffect } from 'react';
import './card.scss'
import { useParams, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../hooks/use-context';
import { CardBeer } from '../../types/beer';
import { SearchUrl } from '../../constants/constants';
import { toCamelCase } from '../../utils/to-camel-case';
import { ReactComponent as ArrowIcon } from '../../assets/icon-left-arrow.svg';
import Loading from '../loading/loading';
import ImgNotAvalebl from '../../assets/no-image-available.jpg';

const Card: FunctionComponent = (): JSX.Element => {  
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentPage } = useGlobalContext();

  const [ isLoading, setIsLoading ] = useState(false);
  const [ beer, setBeer ] = useState<CardBeer | null>(null);

  useEffect(() => {
    setIsLoading(true);

    async function getBookDetails() {
      try {
        const response = await fetch(`${SearchUrl.ById}${id}`);
        const data = await response.json();
        const beer = toCamelCase(data)[0];

        if(beer) {
          const { id, name, imageUrl, tagline, description, abv, foodPairing } = beer;

          const newBeer: CardBeer = {
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
    <section className='card'>
      <div className='card__inner'>
        <button
          className='card__return'
          type='button'
          onClick={() => navigate(`/results/${currentPage}`)}
          aria-label='return to catalog'
        >
          <ArrowIcon />
          <span>Go Back</span>
        </button>

        <div className='card__details'>
          <div className='card__img'>
            <img src={beer?.imageUrl} alt={beer?.name} />
          </div>

          <div className='card__box'>
            <h3 className='card__title'>{beer?.name}</h3>

            <div className=''>
              <span className='card__lable'>Tagline: </span>
              <span className='card__text'>{beer?.tagline}</span>
            </div>
            <div className=''>
              <span className='card__lable'>Description: </span>
              <span className='card__text'>{beer?.description}</span>
            </div>
            <div className=''>
              <span className='card__lable'>ABV: </span>
              <span className='card__text'>{beer?.abv}</span>
            </div>
            <div className=''>
              <span className='card__lable'>Food pairing: </span>
              <span className='card__text'>{beer?.foodPairing}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Card;

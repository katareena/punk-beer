import React, { FunctionComponent } from 'react';
import './pagination.scss';
import { useGlobalContext } from '../../hooks/use-context';
import { Link } from 'react-router-dom';
import cn from 'classnames';

type PaginanionProps = {
  cardPerPage: number,
  totalCards: number,
  handlePaginete: (arg: number) => void,
}

const Paginanion: FunctionComponent<PaginanionProps> = ({ cardPerPage, totalCards, handlePaginete }): JSX.Element => {
  const { currentPage } = useGlobalContext();
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='pagination'>
      <ul className='pagination__list'>
        {pageNumbers.map((number) => (
          <li className={cn('pagination__item', {'pagination__item--active': currentPage === number})} key={number}>
            <Link
              className='pagination__link'
              to={`/results/${number}`}
              onClick={() => handlePaginete(number)}
            >
              {number}
            </Link>
          </li>
        ))}
        
      </ul>
    </nav>

  )
}

export default Paginanion;

import React, { FunctionComponent, useRef, useEffect, FormEvent } from 'react';
import './search.scss';
import { useGlobalContext } from '../../hooks/context';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import { AppRoute, SearchTitle } from '../../constants/constants';
import { ReactComponent as LoupeIcon } from '../../assets/icon-loupe.svg';
import { ReactComponent as ResetIcon } from '../../assets/icon-close.svg';

const Search: FunctionComponent = (): JSX.Element => {
  const { searchTerm, setSearchTerm, setResultTitle, isSearchActive, setIsSearchActive, setBeers } = useGlobalContext();
  const searchText = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  useEffect(() => searchText.current?.focus(), []);

  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    let tempSearchTerm = searchText.current?.value.trim() || '';

    if((tempSearchTerm.replace(/[^\w\s]/gi, '')).length === 0){
      setSearchTerm('');
      setResultTitle(SearchTitle.NoEnter);
    } else {
      setSearchTerm(tempSearchTerm);      
    }

    setIsSearchActive(true);
    navigate(AppRoute.Results);
  }

  function handleClick() {
    setIsSearchActive(false);
    setSearchTerm('');
    navigate(AppRoute.Root);
    setBeers([]);
  }

  return (
    <div className={cn('search', {'search--active': isSearchActive})}>
      <h2 className='search__title'>find your beer</h2>
      <p className='search__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae sapiente quibusdam consequatur perspiciatis facere laboriosam non nesciunt at id repudiandae, modi iste? Eligendi, rerum!</p>

      <form
        className='search__form'
        method='get'
        action='#'
        onSubmit={handleSubmit}
      >
        <div className='search__box'>
          <label className='visually-hidden' htmlFor='search' aria-hidden='true'>search field</label>
          <input
            className='search__input'
            type="text"
            id='search'
            autoComplete='off'
            placeholder='Search...'
            required
            ref={searchText}
            value={searchTerm}
            onChange={(evt)=> setSearchTerm(evt.target.value)}
          />
          <button
            className={cn('search__reset', {'search__reset--active': isSearchActive})}
            type='button'
            aria-label='reset search'
            onClick={handleClick}
          >
            <ResetIcon />
          </button>

          <button
            className='search__submit'
            type='submit'
            aria-label='start a search'
          >
            <LoupeIcon />
          </button>
        </div>
      </form>
    </div>
  )
}

export default Search;
import React, { FunctionComponent, useRef, useEffect, FormEvent, useCallback, ChangeEventHandler } from 'react';
import './search.scss';
import { useGlobalContext } from '../../hooks/use-context';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import { AppRoute, SearchTitle } from '../../constants/constants';
import { ReactComponent as LoupeIcon } from '../../assets/icon-loupe.svg';
import { ReactComponent as ResetIcon } from '../../assets/icon-close.svg';

const Search: FunctionComponent = (): JSX.Element => {
  const {
    searchTerm,
    setSearchTerm,
    setResultTitle,
    isSearchActive,
    setIsSearchActive,
    setBeers
  } = useGlobalContext();
  const searchInput = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => searchInput.current?.focus(), []);

  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    let tempSearchTerm = searchInput.current?.value.trim() || '';

    if((! /[^\s]/gim.test(tempSearchTerm))) {
      setSearchTerm('');
      setResultTitle(SearchTitle.NoEnter);
      setIsSearchActive(false);
    } else {
      setSearchTerm(tempSearchTerm);
      setIsSearchActive(true);     
    }  
    
    navigate(AppRoute.Results); 
  }

  function handleReset() {
    setIsSearchActive(false);
    setSearchTerm('');
    navigate(AppRoute.Root);
    setBeers([]);
  }

  function handleChange(evt: FormEvent<HTMLInputElement>) {
     if (evt.currentTarget.value.length > 0) {
      setSearchTerm(evt.currentTarget.value)
    } else {
      handleReset();
    }
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
            ref={searchInput}
            value={searchTerm}
            onChange={handleChange}
          />
          <button
            className={cn('search__reset', {'search__reset--active': isSearchActive})}
            type='button'
            aria-label='reset search'
            onClick={handleReset}
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
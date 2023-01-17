import React, { FunctionComponent, useRef, useEffect, FormEvent } from 'react';
import './search.scss';
import { useGlobalContext } from '../../hooks/use-context';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import { AppRoute, SearchTitle, WHITESPACE_REGEXP } from '../../constants/constants';
import { ReactComponent as LoupeIcon } from '../../assets/icon-loupe.svg';
import { ReactComponent as ResetIcon } from '../../assets/icon-close.svg';

const Search: FunctionComponent = (): JSX.Element => {
  const navigate = useNavigate();
  const searchInput = useRef<HTMLInputElement>(null);
  useEffect(() => searchInput.current?.focus(), []);
  const {    
    setSearchTerm,
    setResultTitle,
    isSearchActive,
    setIsSearchActive,
    setBeers,
    currentPage,
    setCurrentPage,
    inputValue,
    setInputValue,
  } = useGlobalContext();

  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    if((!WHITESPACE_REGEXP.test(inputValue))) { //if only spaces are entered      
      setInputValue('');
      setResultTitle(SearchTitle.NoEnter);
    } else {
      setSearchTerm(inputValue);
      setIsSearchActive(true);
      navigate(`results/${currentPage}`);     
    }  
  }

  function handleReset() {
    setIsSearchActive(false);
    setSearchTerm('');     
    setBeers([]);
    setCurrentPage(1);    
    setResultTitle('');
    setInputValue('');
    navigate(AppRoute.Root);
  }

  function handleChange(evt: FormEvent<HTMLInputElement>) {
     if (evt.currentTarget.value.length > 0) {
      setInputValue(evt.currentTarget.value);
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
            ref={searchInput} // for focus
            value={inputValue} 
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
            aria-label='start to search'
          >
            <LoupeIcon />
          </button>
        </div>
      </form>
    </div>
  )
}

export default Search;

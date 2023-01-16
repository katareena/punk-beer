import React, { FunctionComponent, useState } from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../hooks/context';
import { AppRoute } from '../../constants/constants';
import cn from 'classnames';
import logo from '../../assets/logo.png';
import { ReactComponent as BurgerIcon } from '../../assets/icon-burger.svg';
import { ReactComponent as BurgerCloseIcon } from '../../assets/icon-close.svg';

const Header: FunctionComponent = (): JSX.Element => {
  const [ isBurgerOpen, setIsBurgerOpen ] = useState(false);
  const { isSearchActive } = useGlobalContext(); 
  const path = isSearchActive ? AppRoute.Results : AppRoute.Root;

  return (
    <header className='header'>
      <h1 className='visually-hidden'>Punk Beer App</h1>
      <div className='header__inner'>
        <div className='header__box'>
          <Link className='logo' to={path}>
            <img src={logo} alt='logo'/>
            <span>beerhub</span>
          </Link>

          <button
            className='header__burger'
            type='button'
            onClick={() => setIsBurgerOpen(!isBurgerOpen)}
            aria-label='open-close site navigation'
          >
            {isBurgerOpen ? <BurgerCloseIcon /> : <BurgerIcon />}
          </button>
        </div>

        <nav className={cn('nav', {'nav--open': isBurgerOpen})}>
          <ul className='nav__list'>
            <li className='nav__item'>
              <Link className='nav__link' to={AppRoute.MyFavorite}>my favorite</Link>
            </li>
            <li className='nav__item'>
              <Link className='nav__link' to={AppRoute.About}>about</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;

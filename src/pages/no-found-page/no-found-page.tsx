import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import './no-found-page.scss';

const NoFoundPage: FunctionComponent = (): JSX.Element => {
  return (
    <div className='lost'>
      <h2 className='lost__title'>404. Page not found</h2>
      <Link className='lost__link' to='/'>Return to the Home Page</Link>
    </div>
  );
}

export default NoFoundPage;
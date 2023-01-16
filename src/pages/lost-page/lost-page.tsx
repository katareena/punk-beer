import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import './lost-page.scss';
import usePath from '../../hooks/use-path';

type LostPageProps = {
  title: string,
}

const LostPage: FunctionComponent<LostPageProps> = ({title}): JSX.Element => {
  const path = usePath();

  return (
    <div className='lost'>
      <h2 className='lost__title'>{title}</h2>
      <Link className='lost__link' to={path}>Return to the Home Page</Link>
    </div>
  );
}

export default LostPage;
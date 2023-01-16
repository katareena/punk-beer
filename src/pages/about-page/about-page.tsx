import React, { FunctionComponent } from 'react';
import './about-page.scss';
import Header from '../../components/header/header';

const AboutPage: FunctionComponent = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <section className='about'>
          <h2 className='about__title'>About</h2>
          <div className='about__box'>
            <div className='about__img'></div>
            <div>
              <p className='about__text'>About BeerHub</p>
              <p className='about__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos consequuntur vero commodi provident maiores, iusto atque corrupti voluptate vel sequi consectetur unde aliquam corporis saepe animi non, tempora reiciendis molestias sed laudantium dolores. Assumenda aperiam fuga quo voluptate commodi ullam aliquam expedita voluptas delectus.</p>
              <p className='about__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, dicta, possimus inventore eveniet atque voluptatibus repellendus aspernatur illo aliquam dignissimos illum. Commodi, porro omnis dolore amet neque modi quas eum!</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default AboutPage;
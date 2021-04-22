import React from 'react';
import s from './views.module.css';

const HomeView = () => (
  <div className={s.homeContainer}>
    <h1 className={s.homeTitle}>
      The best ever store for your Contacts{' '}
      <span role="img" aria-label="Иконка приветствия">
        💁‍♀️
      </span>
    </h1>
  </div>
);

export default HomeView;

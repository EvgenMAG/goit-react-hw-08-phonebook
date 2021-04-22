import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';

import s from './AllNavigation.module.css';

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        Registraion
        {/* <Button color="primary"> Registraion</Button> */}
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        Login
      </NavLink>
    </div>
  );
}

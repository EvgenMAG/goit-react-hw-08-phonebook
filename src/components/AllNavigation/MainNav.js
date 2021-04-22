import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectorsAuth } from '../../redux/auth';
import s from './AllNavigation.module.css';

const Navigation = ({ isAuthenticated }) => {
  console.log(isAuthenticated);
  return (
    <nav>
      <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>
        Home
      </NavLink>

      {isAuthenticated && (
        <NavLink
          to="/contacts"
          exact
          className={s.link}
          activeClassName={s.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: selectorsAuth.getToken(state),
});

export default connect(mapStateToProps, null)(Navigation);

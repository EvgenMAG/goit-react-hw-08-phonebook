import React from 'react';
import { connect } from 'react-redux';
import { selectorsAuth } from '../../redux/auth';
import AuthNav from './AuthNav';
import MainNav from './MainNav';
import UserMenu from '../UserMenu/UserMenu';
import s from './AllNavigation.module.css';

const AppBar = ({ isAuthenticated }) => {
  return (
    <header style={s.header}>
      <MainNav />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: selectorsAuth.getIsAuthenticated(state),
});

export default connect(mapStateToProps, null)(AppBar);

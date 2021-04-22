import React from 'react';
import { connect } from 'react-redux';
import { selectorsAuth } from '../../redux/auth';
import AuthNav from './AuthNav';
import MainNav from './MainNav';
import UserMenu from '../UserMenu/UserMenu';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

const AppBar = ({ isAuthenticated }) => {
  return (
    <header style={styles.header}>
      <MainNav />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: selectorsAuth.getIsAuthenticated(state),
});

export default connect(mapStateToProps, null)(AppBar);

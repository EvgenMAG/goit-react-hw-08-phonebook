import React from 'react';
import { connect } from 'react-redux';
import { OperationsAuth } from '../../redux/auth';
import { selectorsAuth } from '../../redux/auth';
import avatar from './default-avatar.png';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const UserMenu = ({ userLogout, userName }) => {
  return (
    <div style={styles.container}>
      <img src={avatar} alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>Welcome Dear {userName}</span>
      <button type="button" onClick={() => userLogout()}>
        Logout
      </button>
    </div>
  );
};

const mapDispatchToProps = {
  userLogout: OperationsAuth.LogoutUser,
};
const mapStateToProps = state => ({
  userName: selectorsAuth.getUsername(state),
});
export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);

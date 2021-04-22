import React from 'react';
import { connect } from 'react-redux';
import { OperationsAuth } from '../../redux/auth';
import { selectorsAuth } from '../../redux/auth';
import avatar from './default-avatar.png';
import s from './UserMenu.module.css';

const UserMenu = ({ userLogout, userName }) => {
  return (
    <div className={s.container}>
      <img src={avatar} alt="" width="40" className={s.avatar} />
      <span className={s.name}>Welcome Dear {userName}</span>
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

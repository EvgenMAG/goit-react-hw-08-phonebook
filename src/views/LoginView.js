import React, { Component } from 'react';

import { OperationsAuth } from '../redux/auth';
import { connect } from 'react-redux';
import s from './views.module.css';

class RegisterView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    return this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.loginUserToSource(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ email: '', password: '' });
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { email, password } = this.state;
    return (
      <div className={s.container}>
        <h1>Login</h1>

        <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
          <label className={s.label}>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </label>

          <label className={s.label}>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  loginUserToSource: OperationsAuth.LoginUser,
};

export default connect(null, mapDispatchToProps)(RegisterView);

import React, { Component, Suspense, lazy } from 'react';

import routes from './routes';
import Container from './components/Container';
import AppBar from './components/AllNavigation/AppBar';

import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { OperationsAuth } from './redux/auth';
import Load from './components/Loader/Loader';
import PrivateRoute from './/components/AllNavigation/PrivateRoute';
import PublicRoute from './/components/AllNavigation/PublicRoute';

const HomePage = lazy(() => import('./views/HomePage'));
const Register = lazy(() => import('./views/RegisterView'));
const Login = lazy(() => import('./views/LoginView'));
const Contacts = lazy(() => import('./views/ContactsPage'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurretnUser();
  }

  render() {
    return (
      <Container>
        <AppBar />
        <Suspense fallback={Load()}>
          <Switch>
            <PublicRoute exact path={routes.home} component={HomePage} />
            <PublicRoute
              path={routes.register}
              component={Register}
              restricted
              redirectTo={routes.contacts}
            />
            <PublicRoute
              path={routes.login}
              component={Login}
              restricted
              redirectTo={routes.contacts}
            />
            <PrivateRoute
              path={routes.contacts}
              component={Contacts}
              redirectTo={routes.login}
            />
            <Route />
          </Switch>
        </Suspense>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurretnUser: OperationsAuth.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);

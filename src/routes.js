import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import Auth from './component/auth/Auth';
import history from './history';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
    <Router history={history} component={App}>
      <div>
        <Route path="/" render={(props) => <App auth={auth} {...props} />} />
        <Route
          path="/callback"
          render={(props) => {
          handleAuthentication(props);
          return <App {...props} />;
        }} />
      </div>
    </Router>
  );
}
import { routes } from 'constants/routes';
import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { componentsRoutes } from './handler';

const RouterHandler: React.FC = () => (
  <Router>
    <Switch>
      {componentsRoutes.map(({ route, component }) => (
        <Route key={route} exact path={route} component={component} />
      ))}
      <Redirect exact from="/" to={routes.SIGNIN} />
    </Switch>
  </Router>
);

export default RouterHandler;

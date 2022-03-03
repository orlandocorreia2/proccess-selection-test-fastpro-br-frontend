import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from './Route';
import { Login } from '../components/Layouts/Login';
import { Default } from '../components/Layouts/Default';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { Home } from '../pages/Home';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/login" layout={Login} component={SignIn} />
      <Route path="/sign-up" layout={Login} component={SignUp} />
      <Route path="/" exact isPrivate layout={Default} component={Home} />
    </Switch>
  );
};

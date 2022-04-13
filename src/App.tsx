import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import './App.scss';
import { CssBaseline  } from '@mui/material';
import DashboardPage from './features/dashboard/DashboardPage';


const AppRouter = (): React.ReactElement => {

  return (
    <Router>
      <CssBaseline />

      <Switch>
        <Route exact path="/" >
          <DashboardPage />
        </Route>

        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default AppRouter;

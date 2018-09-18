import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Form from '../Form';
import DownloadPage from '../DownloadPage';

const Routes = () => (
  <Switch>
    <Route exact path="/download" component={DownloadPage} />
    <Route exact path="/" render={() => <Form />} />
  </Switch>
);

export default Routes;

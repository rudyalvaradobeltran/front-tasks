import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateLayout from './components/Layout/PrivateLayout';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <React.Fragment>
      <PrivateLayout>
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
      </PrivateLayout>
    </React.Fragment>
  );
}

export default App;

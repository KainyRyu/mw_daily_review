import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Header from './components/Header';
import Main from './pages/Main';

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Main} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

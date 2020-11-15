import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Header from './components/Header';
import Main from './pages/Main';
import useAuth from './hooks/useAuth';

export default function App() {
  const user = useAuth();
  console.log(user);

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

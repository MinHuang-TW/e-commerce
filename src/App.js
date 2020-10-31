import './App.css';
import { Switch, Route } from 'react-router-dom';
import { HomePage, ShopPage } from './pages';

const App = () => (
  <div>
    <Switch>
      <Route path='/' component={HomePage} exact />
      <Route path='/shop' component={ShopPage} />
    </Switch>
  </div>
);

export default App;

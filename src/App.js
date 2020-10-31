import './App.css';
import { Switch, Route } from 'react-router-dom';
import { HomePage, ShopPage } from './pages';
import Header from './components/Header/Header';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route path='/' component={HomePage} exact />
      <Route path='/shop' component={ShopPage} />
    </Switch>
  </div>
);

export default App;

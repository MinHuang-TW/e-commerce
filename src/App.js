import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';

const App = () => (
  <div>
    <Switch>
      <Route path='/' component={HomePage} exact />
    </Switch>
  </div>
);

export default App;

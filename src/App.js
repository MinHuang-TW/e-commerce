import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage, ShopPage, SignInSignUp } from './pages';
import Header from './components/Header/Header';
import { auth } from './firebase/firebase.utils';
import './App.css';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const subscribeFromAuth = auth.onAuthStateChanged((user) =>
      setCurrentUser(user)
    );
    return () => {
      subscribeFromAuth();
    };
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInSignUp} />
      </Switch>
    </div>
  );
};

export default App;

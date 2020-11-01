import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage, ShopPage, SignInSignUp } from './pages';
import Header from './components/Header/Header';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import './App.css';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const subscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
    return () => {
      subscribeFromAuth();
    };
  }, []);

  console.log(currentUser);

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

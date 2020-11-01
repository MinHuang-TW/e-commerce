import React, { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import './SignIn.styles.scss';

const SignIn = () => {
  const initialState = {
    email: '',
    password: '',
  };
  const [state, setState] = useState(initialState);
  const { email, password } = state;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setState(initialState);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='sign-in'>
      <h2 className='title'>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          label='email'
          handleChange={handleChange}
          value={email}
          required
        />

        <FormInput
          name='password'
          type='password'
          label='password'
          handleChange={handleChange}
          value={password}
          required
        />

        <div className='buttons'>
          <Button type='submit'>Sign in</Button>
          <Button onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;

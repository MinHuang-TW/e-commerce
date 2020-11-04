import React, { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import {
  SignInContainer,
  SignInTitle,
  ButtonsContainer,
} from './SignIn.styles';

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
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          label='Email'
          handleChange={handleChange}
          value={email}
          required
        />

        <FormInput
          name='password'
          type='password'
          label='Password'
          handleChange={handleChange}
          value={password}
          required
        />

        <ButtonsContainer>
          <Button type='submit'>Sign in</Button>
          <Button type='button' onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;

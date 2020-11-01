import React, { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import './SignIn.styles.scss';

const SignIn = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setState({ email: '', password: '' });
  };

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          label='email'
          handleChange={handleChange}
          value={state.email}
          required
        />

        <FormInput
          name='password'
          type='password'
          label='password'
          handleChange={handleChange}
          value={state.password}
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

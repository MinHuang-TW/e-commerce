import React, { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { SignUpContainer, SignUpTitle } from './SignUp.styles';

const SignUp = () => {
  const initialState = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const [state, setState] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = state;
    if (password !== confirmPassword) {
      alert('Password does not match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      setState(initialState);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SignUpContainer>
      <SignUpTitle>I do not have an account</SignUpTitle>
      <span>Sign up with your email and password</span>

      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          label='Display Name'
          value={state.displayName}
          onChange={handleChange}
          required
        />
        <FormInput
          type='email'
          name='email'
          label='Email'
          value={state.email}
          onChange={handleChange}
          required
        />
        <FormInput
          type='password'
          name='password'
          label='Password'
          value={state.password}
          onChange={handleChange}
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          label='Confirm Password'
          value={state.confirmPassword}
          onChange={handleChange}
          required
        />
        <Button type='submit'>SIGN UP</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUp;

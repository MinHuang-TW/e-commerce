import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user-actions';
import {
  SignInContainer,
  SignInTitle,
  ButtonsContainer,
} from './SignIn.styles';

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
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
    emailSignInStart(email, password);
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form>
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
          <Button type='submit' onClick={handleSubmit}>
            Sign in
          </Button>
          <Button type='button' onClick={googleSignInStart} isGoogleSignIn>
            Sign in with Google
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);

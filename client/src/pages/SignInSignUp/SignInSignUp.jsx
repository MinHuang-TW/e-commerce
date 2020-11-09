import React from 'react';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import styled from 'styled-components';

const SignInSignUp = () => (
  <Container>
    <SignIn />
    <SignUp />
  </Container>
);

const Container = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: 800px) {
    width: calc(100% - 15px);
    flex-direction: column;
    align-items: center;

    > *:first-child {
      margin-bottom: 50px;
    }
  }
`;

export default SignInSignUp;

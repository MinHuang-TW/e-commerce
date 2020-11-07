import styled, { css } from 'styled-components';

const buttonStyles = css`
  background: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const googleSignInStyles = css`
  background: #4285f4;
  color: white;
  border: none;

  &:hover {
    background: #357ae8;
  }
`;

const invertedButtonStyles = css`
  background: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background: black;
    color: white;
    border: none;
  }
`;

const getButtonStyles = ({ isGoogleSignIn, inverted }) => {
  if (isGoogleSignIn) {
    return googleSignInStyles;
  }
  return inverted ? invertedButtonStyles : buttonStyles;
};

export const ButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;

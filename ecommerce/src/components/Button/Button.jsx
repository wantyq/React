import React from 'react';
import styled from 'styled-components';
import { primaryButtonColor, primaryDarkButtoncolor } from '../../consts/colors';

const PrimaryButton = styled.button`
  border: none;
  border-radius: 4px;
  background-color: ${primaryButtonColor};
  padding: 17px 30px;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${primaryDarkButtoncolor};
  }
`;

const Button = ({ children }) => {
  return (
    <PrimaryButton>{children}</PrimaryButton>
  )
}

export default Button
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const PrimaryButton = styled.button`
    background-color: #ffa800;
    color: white;
    font-weight: 600;
    border-radius: 8px;
    padding: 12px 25px;
    text-transform: uppercase;
    border: 1px solid #ffa800;
    cursor: pointer;
`;

const SecondaryButton = styled.button`
    background-color: transparent;
    color: #ffa800;
    font-weight: 600;
    border-radius: 8px;
    padding: 12px 25px;
    text-transform: uppercase;
    border: 1px solid #ffa800;
    cursor: pointer;
`;

const CustomButton = ({ option, children, onClick }) => {
  const navigate = useNavigate();
  if(option === "primary"){
    return (<PrimaryButton onClick={onClick}>{children}</PrimaryButton>)
  } else if (option === "secondary") {
    return (<SecondaryButton onClick={onClick}>{children}</SecondaryButton>)
  }
}

export default CustomButton
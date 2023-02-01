import React from 'react';
import styled from 'styled-components';
import CustomButton from '../CustomButton/CustomButton';
import { useNavigate } from 'react-router-dom';

const AdditionalbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    background-color: transparent;
    padding: 10px 50px;
`;

const AdditionalbarLeft = styled.div`
    display: flex;
    align-items: center;
`;

const AdditionalbarRight = styled.div`
    display: flex;
    align-items: center;
`;

const ListTitle = styled.h1`
    font-weight: 600;
    color: grey;
`;


const Additionalbar = ({ title, option, children, onClick, type }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("../add");
    }
  return (
    <AdditionalbarContainer>
        <AdditionalbarLeft>
            <ListTitle>{title}</ListTitle>
        </AdditionalbarLeft>
        <AdditionalbarRight>
            <CustomButton option={option} type={type} onClick={() => handleClick()}>{children}</CustomButton>
        </AdditionalbarRight>
    </AdditionalbarContainer>
  )
}

export default Additionalbar

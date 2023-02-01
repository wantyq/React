import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import CustomButton from '../CustomButton/CustomButton';
import { PetsAPI } from '../Consts/Consts';

const PetCard = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #eeeee4;
    padding: 5px 25px;
    text-align: center;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 10px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const RegisterDay = styled.div`
  margin: 0px;
`;

const OwnerEmail = styled.div`
  margin: 0px;
`;


const Petcard = ({ id, name, email, archived }) => {
  const [date, setDate] = useState(new Date().toLocaleDateString("lt-LT"));


    const handleDelete = (itemId) => {
      fetch(`${PetsAPI}/${itemId}`, {
        method: `DELETE`
      })
        .then((resp) => resp.json())
        .then((response) => {
          console.log(response);
          window.location.reload();
        })
        .catch((error) => console.log(error));
    }


  return (
    <PetCard>
      <h3>{name}</h3>
      <InfoContainer>
        <RegisterDay>{date}</RegisterDay>
        <OwnerEmail>{email}</OwnerEmail>
      </InfoContainer>
      <ButtonsContainer>
        <CustomButton option="primary">View log</CustomButton>
        <CustomButton option="secondary" onClick={() => handleDelete(id)}>Delete</CustomButton>
      </ButtonsContainer>
    </PetCard>
  )
}

export default Petcard;
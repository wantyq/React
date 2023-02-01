import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MedsAPI } from '../Consts/Consts';

const Title = styled.h1`
    font-weight: 600;
    color: grey;
`;

const AddMedsForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid lightcyan;
    border-radius: 8px;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  width: 250px;
`;


const AddMeds = () => {
  const [name, setName] = useState(``);
  const [description, setDescription] = useState(``);
  const [isSuccessful, setIsSuccessful] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { name, description };

    try {
      const response = await fetch(`${MedsAPI}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setIsSuccessful(true);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Title>Add a new Medications</Title>
      <AddMedsForm>
        <Input type="text" name="name" placeholder='Name of the drug' onChange={(e) => setName(e.target.value)} />
        <Input type="text" name="description" placeholder='Description of the drug' onChange={(e) => setDescription(e.target.value)} />
        <button type="submit">Submit</button>
      </AddMedsForm>
    </div>
  )
}

export default AddMeds
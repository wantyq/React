import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h1`
    font-weight: 600;
    color: grey;
`;

const AddPetForm = styled.form`
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

const AddPet = () => {
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [client_email, setClientEmail] = useState('');
    const [isSuccessful, setIsSuccessful] = useState(false);

    const navigate = useNavigate();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const data = { name, dob, client_email };
  
      try {
        const response = await fetch("https://glittery-dull-snickerdoodle.glitch.me/v1/pets", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        if (response.ok) {
          setIsSuccessful(true);
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
        <div>
            <Title>Add a new pet</Title>
            <AddPetForm onSubmit={handleSubmit}>
                <Input type="text" name="name" onChange={(e) => setName(e.target.value)} />
                <Input type="date" name="dob" onChange={(e) => setDob(e.target.value)} />
                <Input type="email" name="client_email" onChange={(e) => setClientEmail(e.target.value)} />
                <button type="submit">Submit</button>
            </AddPetForm>
        </div>
    );
}

export default AddPet
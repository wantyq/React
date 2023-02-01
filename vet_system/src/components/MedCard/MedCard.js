import styled from "styled-components";
import { useState } from 'react';

const MedsCard = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #eeeee4;
    padding: 5px 25px;
    text-align: center;
    min-width: 200px;
    flex: 0 0 25%;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const MedsDescription = styled.p`
    margin: 0px;
`;

const MedsDate = styled.p`
    margin: 0px;
`;


const MedCard = ({ id, name, description }) => {
    const [date, setDate] = useState(new Date().toLocaleDateString("lt-LT"));

  return (
    <MedsCard>
        <h3>{name}</h3>
        <InfoContainer>
            <MedsDescription>{description}</MedsDescription>
            <MedsDate>{date}</MedsDate>
        </InfoContainer>
    </MedsCard>
  )
}

export default MedCard
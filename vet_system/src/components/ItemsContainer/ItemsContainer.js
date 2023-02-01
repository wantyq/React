import styled from "styled-components";
import MedCard from "../MedCard/MedCard";
import Petcard from "../Petcard/Petcard";


const ItemContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;
    padding: 40px;
`;


const ItemsContainer = ({ id, option, arrName }) => {
    if(option === "PetCards"){
        return (
            <ItemContainer>
                {arrName.map((item) => (
                    <Petcard 
                        key={item.name}
                        id={item.id}
                        name={item.name}
                        date={item.dob}
                        email={item.client_email}
                        archived={item.archived}
                    />
                ))}
            </ItemContainer>
          )
    } else if (option === "MedCards") {
        return (
        <ItemContainer>
            {arrName.map((item) => {
            return <MedCard 
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    description={item.description}
                />
            })}
        </ItemContainer>
        )
    }
}

export default ItemsContainer
import styled from "styled-components"

const StyledButton = styled.div`
    padding: 10px;
    color: white;
    background-color: lightblue;
`;

const Text = styled.p`
    color: black;
    font-weight: 700;
    letter-spacing: 1px;
`;

const Button = () => {
  return (
    <StyledButton><Text>Mygtukas</Text></StyledButton>
  )
}

export default Button
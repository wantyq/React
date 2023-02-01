import styled from "styled-components";

const PrimaryButton = styled.button`
    border-radius: 3px;
    background-color: black;
    border: 1px solid black;
    color: white;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 8px 30px;
    font-weight: 500;
    width: 250px;
    transition: 0.8s;

    &:hover {
        opacity: 0.7;
    }
`;

export default PrimaryButton;
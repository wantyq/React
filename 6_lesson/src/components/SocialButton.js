import styled from "styled-components";

const SocialButton = styled.button`
    background-color: transparent;
    border: 1px solid lightgrey;
    padding: 8px 30px;
    font-weight: 500;
    width: 250px;
    margin-top: 5px;
    margin-bottom: 5px;
    border-radius: 3px;

    &:hover {
        background-color: lightgrey;
    }
`;

export default SocialButton;
import styled from "styled-components"
import SearchBar from "../components/Button/SearchBar/SearchBar";
import { lightBorderColor } from "../consts/colors"

const Container = styled.div`
    padding: 6px 30px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${lightBorderColor};
`;

const NavigationItem = styled.div`
  font-weight: 500;
  font-size: 19px;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 28px;
`;

const Topbar = () => {
  return (
    <Container>
        <NavigationItem>Categories</NavigationItem>
        <Logo>Shopyzee</Logo>
        <SearchBar>Searchbar</SearchBar>
    </Container>
  )
}

export default Topbar
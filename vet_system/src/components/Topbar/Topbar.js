import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const TopbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: transparent;
  padding: 10px 50px;
  border-bottom: 1px solid #eeeee4;
`;

const TopbarLeft = styled.div`
  display: flex;
  align-items: center;
`;

const TopbarRight = styled.div`
  display: flex;
  align-items: center;
`;

const TopbarLogo = styled.a`
  font-size: 20px;
  font-weight: bold;
  color: #ffa800;
  text-decoration: none;
  cursor: pointer;
`;

const TopbarLink = styled.a`
  margin-left: 15px;
  font-size: 16px;
  color: #ffa800;
  text-decoration: none;
  cursor: pointer;
`;

const Topbar = () => {
    const navigate = useNavigate();
  return (
    <TopbarContainer>
      <TopbarLeft>
        <TopbarLogo href="#">Logo</TopbarLogo>
      </TopbarLeft>
      <TopbarRight>
        <TopbarLink onClick={() => navigate("/")}>Pets</TopbarLink>
        <TopbarLink onClick={() => navigate("/medications")}>Medications</TopbarLink>
      </TopbarRight>
    </TopbarContainer>
  );
};

export default Topbar;
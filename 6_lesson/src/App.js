import './App.css';
import Button from './components/Button';
import styled from 'styled-components';
import CustomButton from './components/CustomButton';
import SocialButton from './components/SocialButton';
import Input from './components/Input';
import PrimaryButton from './components/PrimaryButton';
import React, { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

const mainColor = "#ffffff";
const mainDarkColor = "#f6f6f6";

const getMainColor = (darkMode) => {  return darkMode ? mainDarkColor : mainColor}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  /* flex: 0 0 50%; */
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex: 0 0 50%;
`;

const EnterDetails = styled.p`
  margin: 0px;
  text-align: center;
`;

const RightSide = styled.div`
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  background-image: url("https://www.panorama.lt/assets/Uploads/GYMPLIUS-600x600-moteris__FillWzYwMCw2MDBd_CompressedW10.jpg");
  width: 100%;
  height: auto;
  background-size: cover;

`;

function App() {
  const {darkMode, toggleDarkMode} = useContext(ThemeContext);
  return (
    <div style={{backgroundColor: getMainColor(darkMode), minHeight: "100%"}}>
      <Container onClick={toggleDarkMode}>
        {darkMode ? "Dark" : "Light"}
        Kazkoks tai tekstas checkui
      </Container>

    </div>
  )
}


// function App() {
//   return (
//     <div>
//       <Container>
//         <LeftSide>
//           <h2>Welcome back</h2>
//           <EnterDetails>Please enter your details</EnterDetails>
//           <Input placeholder='Enter your email'></Input>
//           <PrimaryButton>Continue</PrimaryButton>
//           <EnterDetails>OR</EnterDetails>
//           <SocialButton>Continue with Google</SocialButton>
//           <SocialButton>Continue with Facebook</SocialButton>
//           <SocialButton>Continue with Apple</SocialButton>
//           <EnterDetails>Don't have an account? <span style={{fontWeight: 600}}>Sign up</span></EnterDetails>
//         </LeftSide>
//         <RightSide></RightSide>
//       </Container>
//     </div>
//   );
// }


export default App;

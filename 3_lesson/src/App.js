import './App.css';
import CustomButton from './components/CustomButton/CustomButton';
import Greeting from './components/Greeting/Greeting';
import MenuList from './components/MenuList/MenuList';
import Avatar from './components/Avatar/Avatar';
import Card from './components/Card/Card';
import MoodChecker from './components/MoodChecker/MoodChecker';
import { useState } from 'react';
import PropTypes from "prop-types";
import Product from './components/Product/Product';
import Button from './components/Button/Button';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const buttons = [{
    variant: "text", 
    text: 'Help me to get a random number'
  },
{
  variant: "outlined",
  text: 'belenka'
},
{
  variant: "contained",
  text: 'its contained'
}]


  const avatars = [
    {backgroundColor: 'red', color: 'black', text: 'A'},
    {backgroundColor: 'purple', color: 'white', text: 'CA'},
    {backgroundColor: 'yellow', color: 'black', text: 'DJ'}
  ]

  const animals = [
    {title: 'suo', subtitle: 'kazkoks random tekstas apie suni', imageUrl: 'https://cdn.mos.cms.futurecdn.net/6AxBGxrtbSAkmhLmtdvGLX-1200-80.jpg.webp'},
    {title: 'cat', subtitle: 'kazkoks random tekstas apie katina', imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg?crop=1.00xw:0.753xh;0,0.153xh&resize=980:*'}
  ]

  const [activeMenu, setActiveMenu] = useState("single");
  const button = [{
    label: 'Show single menu', value: 'single'
  },
  {
    label: 'Show family menu', value: 'family'
  },
  {
    label: 'Show couple menu', value: 'couple'
  },]


    return (
    <div className="App">

      <Product image="https://per4mmedia.com/wp-content/uploads/2021/11/mk2-2022-IG.jpg" title="Volkswagen GOLF MK2 2022 Calendar" price="10.00" description="12 unique designs. All pieces are printed on heavyweight 200 gsm art paper. Limited to 50 pieces" category="Calendars">
      </Product>

      <MoodChecker></MoodChecker>
      <CustomButton variant={activeMenu ==='single' ? 'contained' : 'outlined'} onClick={() => setActiveMenu('single')}>Show Single Menu</CustomButton>
      <CustomButton variant={activeMenu ==='family' ? 'contained' : 'outlined'} onClick={() => setActiveMenu('family')}>Show Family Menu</CustomButton>
      <CustomButton variant={activeMenu ==='couple' ? 'contained' : 'outlined'} onClick={() => setActiveMenu('couple')}>Show Couples Menu</CustomButton>
      <MenuList customerType={activeMenu}></MenuList>

      <Greeting isLoggedIn={isLoggedIn}></Greeting>
      {isLoggedIn ? (
      <button onClick={() => setIsLoggedIn(false)}>Log out</button>
      ) : (
      <button onClick={() => setIsLoggedIn(true)}>Log in</button>
      )}


      <CustomButton variant="text">Text</CustomButton>
      <CustomButton variant="contained">Contained button</CustomButton>
      <CustomButton variant="outlined">Outlined button</CustomButton>

      {['Zalia', 'Geltona', 'Raudona'].map(text => <button>{text}</button>)}

      {animals.map((animal, index) => <Card key={index} imageUrl={animal.imageUrl} title={animal.title} subtitle={animal.subtitle}></Card>)}


      {buttons.map((button, index) => <CustomButton key={index} variant={button.text}>{button.text}</CustomButton>)}

      {avatars.map((avatar, index) => <Avatar key={index} backgroundColor={avatar.backgroundColor} color={avatar.color}>{avatar.text}</Avatar>)}

      
    </div>
  );
}

Product.propTypes = {
  price: PropTypes.number,
  availability: PropTypes.number
}

export default App;

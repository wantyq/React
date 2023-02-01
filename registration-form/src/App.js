import logo from './logo.svg';
import './App.css';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import SearchForm from './components/SearchForm/SearchForm';
import ShoppingList from './components/ShoppingList/ShoppingList.js'
import { Routes, Route } from "react-router-dom";
import HomePage from './components/pages/HomePage';
import ContactsPage from './components/pages/ContactsPage';
import CarPage from './components/pages/CarPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/register' element={<ContactsPage/>} />
        <Route path='/' element={<HomePage/>} />
        <Route path='/car/:id' element={<CarPage/>} />
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ContactMe from './pages/ContactMe';
import About from './pages/About';
import Works from './pages/Works';
import { CONTACTS } from './consts/routes';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/works' element={<Works/>} />
        <Route path='/contactme' element={<ContactMe/>} />
      </Routes>
    </div>
  );
}

export default App;

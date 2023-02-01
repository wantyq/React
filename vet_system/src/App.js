import './App.css';
import { Routes, Route } from "react-router-dom";
import Main from './pages/Main';
import Medications from './pages/Medications';
import Add from './pages/Add';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/medications' element={<Medications/>}/>
        <Route path='/add' element={<Add/>}/>
      </Routes>
    </div>
  );
}

export default App;

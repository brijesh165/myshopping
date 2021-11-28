import { Routes, Route } from 'react-router-dom';

import './App.css';
import Login from './Component/Login/login';
import Signin from './Component/Signin/signin';
import HomePage from './Pages/HomePage/homepage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div >
  );
}

export default App;

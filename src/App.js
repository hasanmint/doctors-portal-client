import logo from './logo.svg';
import './App.css';
import Navbar from './components/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About';
import Login from './components/Pages/Authentication/Login';
import Appointment from './components/Pages/Appointment/Appointment';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

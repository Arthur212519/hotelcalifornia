import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddHotel from './pages/AddHotel';
import HotelDetail from './components/HotelDetail';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <Router>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route path="/add-hotel" element={<AddHotel darkMode={darkMode} />} />
        <Route path="/hotel/:id" element={<HotelDetail darkMode={darkMode} />} />
      </Routes>
    </Router>
  );
};

export default App;

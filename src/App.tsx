import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import ColorCards from './pages/ColorCards';
import TicTactToe from './pages/TicTacToe';

import './App.scss';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ColorCards />} />
          <Route path="/phase2" element={<TicTactToe />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

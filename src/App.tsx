import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import ColorCards from './pages/ColorCards';

import './App.scss';
import TicTactToe from './pages/TicTacToe';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/color" element={<ColorCards />} />
          <Route path="/tictactoe" element={<TicTactToe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

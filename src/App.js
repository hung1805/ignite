import React from 'react';
import Home from './pages/Home';
import Nav from './components/Nav';

import { Routes, Route } from 'react-router';

import GlobalStyles from './components/GlobalStyles';
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games/:id" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

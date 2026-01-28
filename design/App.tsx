import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/src/pages/Home';
import MatchCenter from '@/src/pages/MatchCenter';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/match-center" element={<MatchCenter />} />
      </Routes>
    </Router>
  );
};

export default App;

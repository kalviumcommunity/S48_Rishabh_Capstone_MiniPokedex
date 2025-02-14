import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/signup" element={<div>Sign Up Page (Coming Soon)</div>} /> */}
        {/* <Route path="/login" element={<div>Login Page (Coming Soon)</div>} /> */}
      </Routes>
    </Router>
  );
}

export default App;

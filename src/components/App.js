import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Header from './header/Header';
import SideBar from './sideBar/SideBar';

const App = () => {
  // useEffect permet de modifier le titre de la page
  useEffect(() => {
    document.title = 'SportSee';
  }, []);
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;

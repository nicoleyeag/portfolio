import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav.js';
import HomeButton from './components/HomeButton.js';

const App = () => {
  return <>
   <Nav />
   <HomeButton/>;
  </>;
};

export default App;

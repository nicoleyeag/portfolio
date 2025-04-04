import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import HomeButton from './components/HomeButton.js';
import AboutMeButton from './components/AboutMeButton.js'
import ProjectsButton from './components/ProjectsButton.js';
import HireMeButton from './components/HireMeButton.js';
import GitHubButton from './components/GitHubButton.js';
import LinkedInButton from './components/LinkedInButton.js';

const App = () => {
  return <>
   <Navbar/>
   {/* <HomeButton/>
   <AboutMeButton/>
   <ProjectsButton/>
   <HireMeButton/>
   <GitHubButton/>
   <LinkedInButton/> */}
  </>;
};

export default App;

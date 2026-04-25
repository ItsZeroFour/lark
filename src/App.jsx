import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/globals.css';

import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import HomePage     from './pages/HomePage';
import AboutPage    from './pages/AboutPage';
import TeamPage     from './pages/TeamPage';
import ApplyPage    from './pages/ApplyPage';
import ProjectsPage from './pages/ProjectsPage';

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/"         element={<HomePage />} />
        <Route path="/about"    element={<AboutPage />} />
        <Route path="/team"     element={<TeamPage />} />
        <Route path="/apply"    element={<ApplyPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

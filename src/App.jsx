import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './styles/globals.css';

import Nav    from './components/layout/Nav';
import Footer from './components/layout/Footer';

import HomePage     from './pages/HomePage';
import AboutPage    from './pages/AboutPage';
import TeamPage     from './pages/TeamPage';
import ApplyPage    from './pages/ApplyPage';
import ProjectsPage from './pages/ProjectsPage';
import GuidesPage   from './pages/GuidesPage';
import DocsPage     from './pages/DocsPage';

/* ── Scroll to top on every route change ── */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/"         element={<HomePage />} />
        <Route path="/about"    element={<AboutPage />} />
        <Route path="/team"     element={<TeamPage />} />
        <Route path="/apply"    element={<ApplyPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/guides"   element={<GuidesPage />} />
        <Route path="/docs"     element={<DocsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

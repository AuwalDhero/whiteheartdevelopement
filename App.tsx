
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import HomePage from './src/pages/HomePage';
import AboutPage from './src/pages/AboutPage';
import ProgramsPage from './src/pages/ProgramsPage';
import GetInvolvedPage from './src/pages/GetInvolvedPage';
import DonatePage from './src/pages/DonatePage';
import ThankYouPage from './src/pages/ThankYouPage';
import AdminAndDeploymentPage from './src/pages/AdminAndDeploymentPage';
import ImpactStoriesPage from './src/pages/ImpactStoriesPage';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-text-dark">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/impact-stories" element={<ImpactStoriesPage />} />
            <Route path="/get-involved" element={<GetInvolvedPage />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="/admin-docs" element={<AdminAndDeploymentPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;

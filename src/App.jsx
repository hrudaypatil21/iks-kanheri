import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import LandingPage from './components/LandingPage/LandingPage'
import Footer from './components/Footer/Footer'
import Architecture from './components/ArchitecturePage/Architecture'
import Inscriptions from './components/Inscriptions/Inscriptions'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import './styles.css';
// import './index.css';

function App() {

  useEffect(() => {
    // Smooth Scrolling for Navigation
    const smoothScroll = (e) => {
      const anchor = e.target;
      const href = anchor.getAttribute('href');
      
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', smoothScroll);
    });

    // Cleanup event listeners
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', smoothScroll);
      });
    };
  }, []);

  return (
    <>
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/architecture" element={<Architecture/>} />
      <Route path="/inscriptions" element={<Inscriptions />} />
      <Route path="*" element={<h1>404 - Not Found</h1>} />
    </Routes>
    <Footer/>
    </Router>
    </>
  )
}

export default App

import React from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <PortfolioProvider>
      <div className="app">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </PortfolioProvider>
  );
}

export default App;

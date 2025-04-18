import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ThemeToggle from './components/ThemeToggle';
import AnimatedBackground from './components/AnimatedBackground';

import './App.css';
import './assets/styles/animations.css';
import './assets/styles/theme.css';
import './assets/styles/particles.css'; // make sure this is here!

function App() {
  return (
    <Router>
      <div className="App">
        {/* Background particles - always at the back */}
        <AnimatedBackground />

        {/* UI components */}
        <CustomCursor />
        <ThemeToggle />
        <Header />

        <main>
          <Hero />
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Education />
              <Achievements />
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
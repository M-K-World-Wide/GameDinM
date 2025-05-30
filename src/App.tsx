import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Amplify } from 'aws-amplify';
import { ThemeProvider } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { motion } from 'framer-motion';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import LoadingState from './components/LoadingState';
import { usePageTransition } from './hooks/usePageTransition';

// Configure Amplify (we'll add the actual config later)
Amplify.configure({
  // Your AWS Amplify configuration will go here
});

const App = () => {
  const { isTransitioning, pageVariants } = usePageTransition();

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-primary">
          <Navigation />
          {isTransitioning && <LoadingState />}
          <AnimatePresence mode="wait">
            <Routes>
              <Route
                path="/"
                element={
                  <motion.div
                    key="home"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                  >
                    <Home />
                  </motion.div>
                }
              />
              <Route
                path="/about"
                element={
                  <motion.div
                    key="about"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                  >
                    <About />
                  </motion.div>
                }
              />
              <Route
                path="/contact"
                element={
                  <motion.div
                    key="contact"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                  >
                    <Contact />
                  </motion.div>
                }
              />
              <Route
                path="*"
                element={
                  <motion.div
                    key="not-found"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                  >
                    <NotFound />
                  </motion.div>
                }
              />
            </Routes>
          </AnimatePresence>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App; 
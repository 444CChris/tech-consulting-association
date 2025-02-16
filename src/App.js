import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App-header">
        <header className="Navigation-bar">
          <Header />
          <div className="pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;

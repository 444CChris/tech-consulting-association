import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import FAQ from './components/FAQ';
import Home from './components/Home';
import Join from './components/Join';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App-header">
        <header className="Navigation-bar">
          <Header />
          <div className="pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/join" element={<Join />} />
            </Routes>
          </div>
        </header>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

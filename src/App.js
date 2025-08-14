import './App.css';
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </Router>
      <Footer mode="primary" />
    </div>
  );
}

export default App;

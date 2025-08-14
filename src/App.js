import './App.css';
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import NoteState from './context/NoteState';
import Alert from './components/Alert';


function App() {
  return (
    <>
    <NoteState>
      <Router>
        <NavBar />
        <Alert msg="this is alert" />
        <div className="container my-3">
        <Routes>
          <Route path="/home" exact element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
        </div>
      </Router>
    </NoteState>
      <Footer />
    </>
  );
}

export default App;

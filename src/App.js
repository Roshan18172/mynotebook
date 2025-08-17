import './App.css';
import React, { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import NoteState from './context/NoteState';
import Alert from './components/Alert';
import SignUp from './components/SignUp';
import Login from './components/Login';


function App() {
  const [alert, setAlert] = useState(null);
  // This function sets an alert message
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  return (
    <>
      <NoteState>
        <Router>
          <NavBar />
          <Alert alert={alert} />
          <div className="container my-3">
            <Routes>
              <Route path="/home" exact element={<Home showAlert={showAlert} />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
      <Footer />
    </>
  );
}

export default App;

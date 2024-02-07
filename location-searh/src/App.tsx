import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import logo from './logo.svg';
import Home from './views/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (

    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={
            <Home />
          }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

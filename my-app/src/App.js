import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';

import Home  from "./components/Home";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";


function App() {

  return (

    <>
      
      <body>
        
      </body>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/LogIn" element={<LogIn />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
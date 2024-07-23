// src/App.js
import React from 'react';
import Navbar from './COMPONENTS/Navbar';
import './App.css';
import { useState } from 'react';
import CustmerData from './COMPONENTS/CustmerData';

function App() {

  const [isLoggedIN, setLoggedIN] =useState(false)
  return (
    <>
      <Navbar data={setLoggedIN} intial={isLoggedIN}/>
      <CustmerData/>
     
    </>
  );
}

export default App;

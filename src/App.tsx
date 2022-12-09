import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import Navbar from './components/navbar';
import Home from './pages/Home';

function App() {
  return (

    <div className="App">
         <BrowserRouter>
         <Navbar/>  
         <Routes>
         <Route path="/" element={<Home />}>
        </Route>
         </Routes>
         </BrowserRouter>
        
    </div>
  );
}

export default App;

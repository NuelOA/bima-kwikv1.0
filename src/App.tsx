import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import Navbar from './components/navbar';
import Carousel from './components/carousel'
import Home from './components/Home';

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

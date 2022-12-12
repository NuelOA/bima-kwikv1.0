import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import Navbar from './components/navbar';
import Home from './pages/Home';
import Step1 from './pages/SelectCountry-Language';
import Products from './pages/Products';

function App() {
  return (

    <div className="App">
         <BrowserRouter>
         <Navbar/>  
         <Routes>
         <Route path="/" element={<Home />}>
        </Route>
        <Route path="/productStep1" element={<Step1 />}>
        </Route>
        <Route path="/products" element={<Products />}>
        </Route>
         </Routes>
         </BrowserRouter>
        
    </div>
  );
}

export default App;

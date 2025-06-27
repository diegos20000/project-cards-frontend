import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from '../src/components/Main/Main';
//import Api from "../src/utils/Api";
import Header from '../src/components/Header/Header';
import Footer from './components/Footer/Footer';
import './index.css';

function App() {
  

  return (
    <Router>
       <div className='page'>      
        <Header />      
        <Main />     
        <Footer />    
        </div>  
        
    </Router>
  );
};

export default App

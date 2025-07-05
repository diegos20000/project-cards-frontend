import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from '../src/components/Main/Main';
import Header from '../src/components/Header/Header';
import Footer from './components/Footer/Footer';
import { getGeolocation } from "./utils/ThirdPartyApi";
import RegisterModal from './components/RegisterModal.jsx/RegisterModal';
import './index.css';

function App() {
  const [location, setLocation] = useState({ country: '', city: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const ipAddress = "";
    getGeolocation(ipAddress, (error, data) => {
      if (error) {
        console.error(error);
      } else {
        setLocation(data);
      }
    });
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  

  return (
    <Router>
       <div className='page'>      
        <Header onRegisterClick={openModal} />      
        <Main onRegisterClick={openModal}/>     
        <Footer />
        <RegisterModal isOpen={isModalOpen} onClose={closeModal} />    
        </div>  
        
    </Router>
  );
};

export default App

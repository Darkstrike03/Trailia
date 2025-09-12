import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Section1 from './components/Section1';
import Header from './components/Header';
import Footer from './components/Footer';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<><Section1 /><Section2/><Section3/><Section4/></>} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;


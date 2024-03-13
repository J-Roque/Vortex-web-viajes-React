import { useState } from 'react';
import './App.css';
import React from 'react';
import Header from './shared/components/header/Header';
import Footer from './shared/components/footer/Footer';
import Slider from './components/Slider/Slider';
function App() {
  const [count, setCount] = useState(0)
  return (
    <section>
      <Header />
      <Slider/>
      <Footer/>
    </section>
  )
}

export default App

import { useState } from 'react';
import './App.css';
import React from 'react';
import Header from './shared/components/header/Header';
import Footer from './shared/components/footer/Footer';
import Slider from './components/Slider/Slider';
import Bienvenida from './components/bienvenida/Bienvenida';
import { Ofertas } from './components/ofertas/Ofertas';
import { Destinos } from './components/destinos/Destinos';
function App() {
  const [count, setCount] = useState(0)
  return (
    <section>
      <Header />
      <Slider/>
      <Bienvenida/>
      <Ofertas/>
      <Destinos/>
      <Footer/>
    </section>
  )
}

export default App

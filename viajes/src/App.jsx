import { useState } from 'react';
import './App.css';
import React from 'react';
import Header from './shared/components/header/Header';
import Footer from './shared/components/footer/Footer';
function App() {
  const [count, setCount] = useState(0)
  return (
    <section>
      <Header />
      
      <Footer/>
    </section>
  )
}

export default App

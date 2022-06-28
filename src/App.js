import React from 'react'
import Header from './Componentes/Header'
import Navbar from './Componentes/Navbar'
import Itemlistconteiner from './Componentes/Itemlistconteiner'
import { Itemcount } from './Componentes/Itemcount'
import './App.css';

const App = () => {
  const numero = 1;
  return (
      <>
      <header>
        <Header/>
        
      </header>
      <nav>
        <Navbar/>
      </nav>
      <main>
        <Itemlistconteiner/>
        <Itemcount miNumero={numero}/>
      </main>
      <footer>
      
      </footer>
      
      </>
  );
}

export default App;

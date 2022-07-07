import React from 'react'
import Header from './Componentes/Header'
import Navbar from './Componentes/Navbar'
import Itemlistconteiner from './Componentes/Itemlistconteiner'
import ItemDetailContainer from './Componentes/ItemDetailConteiner'
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
        <Itemlistconteiner />
        <ItemDetailContainer/>
      </main>
      <footer>
      
      </footer>
      
      </>
  );
}

export default App;

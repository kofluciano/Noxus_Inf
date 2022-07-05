import React from 'react'
import Auris from '../assets/auris.jpg'
import Mouse from '../assets/mouse.jpg'
import Teclado from '../assets/teclado.jpg'
import Item from"./Item"

const Itemlist = () => {
  return(  
  <>
  <section className='contenedorimagenes'>
  <img src={Auris} className="img"/>
  <img src={Mouse} className="img"/>
  <img src={Teclado} className="img_teclado"/>
  </section>
  <Item />
</>
)}
export default Itemlist
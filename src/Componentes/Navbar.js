import React from "react"
import Cartwidget from './Cartwidget'
const Navbar = () => {
    
    const irproductos= (setconta) => {
        alert("fuiste a productos");
    }
    const irarma= () => {
        alert("fuiste a arma tu pc");
    }
    const irayuda= () => {
        alert("fuiste a ayuda");
    }
    const irsobre= () => {
        alert("fuiste a sobre nosotros");
    }
    return(
            <>
                <nav>
                    <button href=""className="anav" onClick={irproductos}>Productos</button>
                    <button href=""className="anav" onClick={irarma}>Armá tu pc</button>
                    <button href=""className="anav" onClick={irayuda}>Ayuda</button>
                    <button href=""className="anav" onClick={irsobre}>Sobre nosotros</button>
                    <Cartwidget/>
                </nav>
            </>
         
    )
 }
export default Navbar    
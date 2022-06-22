import React from "react"
import Cartwidget from './Cartwidget'
const Navbar = () => {
    return(
            <>
                <nav>
                    <a href=""className="anav">Productos</a>
                    <a href=""className="anav">Armá tu pc</a>
                    <a href=""className="anav">Ayuda</a>
                    <a href=""className="anav">Sobre nosotros</a>
                    <Cartwidget/>
                </nav>
            </>
         
    )
 }
export default Navbar
 
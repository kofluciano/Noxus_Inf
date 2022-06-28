import React from "react"
import Auris from '../assets/auris.jpg'
import Mouse from '../assets/mouse.jpg'
import Teclado from '../assets/teclado.jpg'
const Itemlistconteiner = () => {
    return(
            <>
                <div className="destacados">
                    <h2>DESTACADOS</h2>
                </div>
                <section className="contenedorimagenes">
                    <section>
                        <img src={Auris} className="img">
                        </img>
                    </section>
                    <section><img src={Mouse} className="img">
                        </img>
                    </section>
                    <section><img src={Teclado} className="img_teclado">
                        </img>
                    </section>
                </section>
                <section className="contenedordescripcion">
                    <p className="auris">Auriculares</p>
                    <p className="mouse">Mouse</p>
                    <p className="teclado">Teclado</p>  
                </section>
            </>
         
    )
 }
export default Itemlistconteiner
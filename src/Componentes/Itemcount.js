import { Alert } from '@mui/material';
import React,{ useState } from 'react'

export const Itemcount = ({ miNumero }) =>{
    
    const[Contadora, setContadora] = useState(0);
    const[Contadorm, setContadorm] = useState(0);
    const[Contadort, setContadort] = useState(0);
    
    const stocka = 5
    
    const stockm = 8
    
    const stockt = 0


// Auris
        
    const Agregara = () => {
        if (stocka <= Contadora ) {
        alert("No hay mas stock");
        } else {
        setContadora(Contadora +1);
    }
}
    const Quitara = () => {
            if (Contadora<=0) {
                alert("No se pueden elegir valores menores a 0");
            } else {
                setContadora(Contadora -1);
            }      
}
        const adda = () => {
            if (Contadora<=0) {
                alert("No hay productos disponibles para agregar");
            } else {
                alert("Se agregaron "+Contadora+" unidades de auriculares al carrito");
            }
            
}

// Mouse
    const Agregarm = () => {
        if (stockm <= Contadorm ) {
        alert("No hay mas stock");
        } else {
        setContadorm(Contadorm +1);
    }
}
    const Quitarm = () => {
        if (Contadorm<=0) {
            alert("No se pueden elegir valores menores a 0");
        } else {
            setContadorm(Contadorm -1);
        }      
}
    const addm = () => {
        if (Contadorm<=0) {
            alert("No hay productos disponibles para agregar");
        } else {
            alert("Se agregaron "+Contadorm+" unidades de auriculares al carrito");
        }
        
}
//Teclado
    const Agregart = () => {
        if (stockt <= Contadort ) {
        alert("No hay mas stock");
        } else {
        setContadorm(Contadort +1);
}
}
    const Quitart = () => {
        if (Contadort<=0) {
            alert("No se pueden elegir valores menores a 0");
        } else {
            setContadorm(Contadort -1);
        } 
}
    const addt = () => {
        if (Contadort<=0) {
            alert("No hay productos disponibles para agregar");
        } else {
            alert("Se agregaron "+Contadort+" unidades de auriculares al carrito");
        }
        
}



    return(
    <>
        <div className='contenedordescripcion'>
            <div className='itemcount'>
                <button className='signos' onClick={Agregara}> + </button>
                <button className='signos' onClick={Quitara}> - </button>
                <button onClick={adda}>Agregar al Carrito</button>
                <h1 className='h1conta'>{Contadora}</h1>
            </div>
            <div className='itemcount'>
               <button className='signos' onClick={Agregarm}> + </button>
                <button className='signos' onClick={Quitarm}> - </button>
                <button onClick={addm}>Agregar al Carrito</button>
                <h1 className='h1conta'>{Contadorm}</h1>
            </div>
            <div className='itemcount'>
                <button  className='signos' onClick={Agregart}> + </button>
                <button className='signos' onClick={Quitart}> - </button>
                <button onClick={addt}>Agregar al Carrito</button>
                <h1 className='h1conta'>{Contadort}</h1>
            </div>
        </div>
    </>
    )
}
export default Itemcount
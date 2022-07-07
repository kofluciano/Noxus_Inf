import React,{useState , useEffect} from 'react'
import Auris from '../assets/auris.jpg'
import Mouse from '../assets/mouse.jpg'
import Teclado from '../assets/teclado.jpg'
const initialproductosd = [
     {nombre:'Auriculares', id:0, precio:5000,stock:5, imagen:Auris, detalle:"¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Redragon Lamia 2 no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores."},
     {nombre:'Mouse', id:1, precio:3000,stock:3, imagen:Mouse,detalle:"Adaptado a tus movimientos El mouse de juego te ofrecerá la posibilidad de marcar la diferencia y sacar ventajas en tus partidas. Su conectividad y sensor suave ayudará a que te desplaces rápido por la pantalla."},
     {nombre:'Teclado', id:2, precio:9000,stock:10,imagen:Teclado,detalle:"Distinción a todo color Su retroiluminación le da un toque diferente a tu equipo y resalta su composición cuando es utilizado en espacios poco iluminados."},
 ]
 const promesad = new Promise ((res,rej) => { 
    setTimeout(() => {
           res(initialproductosd);
    },2000);
});

const ItemDetail = () =>{
    const [productosd, setproductosd] = useState([]);

     useEffect(() => {
         promesad.then((data) => {
             console.log('data');
             setproductosd(data);  
         }).catch(() =>{
             console.log('todo mal')
         })
     },[]);

    return(
        <>
        <ul className='contenedordescripcion'>
                {productosd.map((productosd) => <p  key={productosd.id}>{productosd.detalle}</p>)}
        </ul>
        </>
    )}
export default ItemDetail
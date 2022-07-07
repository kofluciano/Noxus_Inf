import React,{useState , useEffect} from 'react'
import Auris from '../assets/auris.jpg'
import Mouse from '../assets/mouse.jpg'
import Teclado from '../assets/teclado.jpg'

const initialproductos = [
    {nombre:'Auriculares', id:0, precio:5000,stock:5, imagen:Auris},
    {nombre:'Mouse', id:1, precio:3000,stock:3, imagen:Mouse},
    {nombre:'Teclado', id:2, precio:9000,stock:10,imagen:Teclado},
]
const promesa = new Promise ((res,rej) => {
    setTimeout(() => {
        res(initialproductos);
    },2000);
});

const Item = () =>{
    
    
    const [productos, setproductos] = useState([]);

    useEffect(() => {
        promesa.then((data) => {
            console.log('data');
            setproductos(data);  
        }).catch(() =>{
            console.log('todo mal')
        })
    },[]);
   
   
    return( 
        <>
        <ul className='contenedorimagen'>
                <ul>
                {productos.map((productos) => <img src={productos.imagen} className='img' key={productos.id[0]}/>)}
                </ul>
        </ul>
        <ul className='contenedordescripcion'>
                {productos.map((productos) => <li   key={productos.id}>{productos.nombre}</li>)}
        </ul>
        <ul className='contenedordescripcion'>
                {productos.map((productos) => <li  key={productos.id}>Precio:${productos.precio}</li>)}
        </ul >
        <ul className='contenedordescripcion'>
                {productos.map((productos) => <li  key={productos.id}>Quedan {productos.stock} en stock</li>)}
        </ul>
        </>
        
)}
export default Item

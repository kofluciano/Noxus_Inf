import React,{useState , useEffect} from 'react'

const initialproductos = [
    {nombre:'Auriculares', id:0, precio:5000,stock:5, imagen:'../assets/auris.jpg'},
    {nombre:'Mouse', id:1, precio:3000,stock:3, imagen:'../assets/mouse.jpg'},
    {nombre:'Teclado', id:2, precio:9000,stock:10,imagen:'./assets/teclado.jpg'},
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

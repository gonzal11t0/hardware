import Productos from '../../Component/Productos';
import img1 from "../../img/gabinetes/gabinetes1.jpg";
import img2 from "../../img/gabinetes/gabinetes2.jpg";
import img3 from "../../img/gabinetes/gabinetes3.jpg";
import img4 from "../../img/gabinetes/gabinetes4.jpg";
import img5 from "../../img/gabinetes/gabinetes5.jpg";
import img6 from "../../img/gabinetes/gabinetes6.jpg";

import Carrito from '../../Component/Carrito';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Whatshapp from "../../Component/Watshapp";
import ToUp from '../../Component/ToUp';

const Gabinetes =()=>{

    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        const productoExistente = carrito.find(item => item.nombre === producto.nombre);
        if (productoExistente) {
            const nuevoCarrito = carrito.map(item => {
                if (item.nombre === productoExistente.nombre) {
                    return { ...item, cantidad: item.cantidad + 1 };
                }
                return item;
            });
            setCarrito(nuevoCarrito);
        } else {
            const nuevoProducto = { ...producto, cantidad: 1, id: uuidv4() };
            setCarrito([...carrito, nuevoProducto]);
        }
    };

    const eliminarProducto = (id) => {
        const nuevoCarrito = carrito.filter(producto => producto.id !== id);
        setCarrito(nuevoCarrito);
    };

    const cambiarCantidad = (id, cantidad) => {
        const nuevoCarrito = carrito.map(producto => {
            if (producto.id === id) {
                return {...producto, cantidad};
            }
            return producto;
        });
        setCarrito(nuevoCarrito);
    };

    const handlePagar = () => {
        handlePagar();
    };

    const productos=[
        {nombre:"Gabinete Sentey G8 con Fuente LZ500-FC - Sin Kit -" ,         descripcion:"Gabinete Sentey G8 con Fuente LZ500-FC - Sin Kit -",    modelo:"Gabinete Sentey G8 con Fuente LZ500-FC - Sin Kit -",           stock:"Stock",    marca:"Sentey",      precio:"$ 41.800",    precioOferta:"$ 41.800", img: img1 },
        {nombre:"Gabinete Kit Magnum Tech MT-K835 Teclado / Mouse / Parlantes" ,         descripcion:"Gabinete Kit Magnum Tech MT-K835 Teclado / Mouse / Parlantes",  modelo:"Tech MT-K835",           stock:"Stock",    marca:"Magnum Tech",     precio:"$ 48.800",     precioOferta:"$ 48.800", img: img2 },
        {nombre:"Gabinete Sentey G8 Power Kit con Fuente NP500-FC" ,    descripcion:"Gabinete Sentey G8 Power Kit con Fuente NP500-FC", modelo:"Gabinete Sentey G8 Power Kit con Fuente NP500-FC",      stock:"Stock",    marca:" Sentey",       precio:"$ 51.600",    precioOferta:"$ 51.600", img: img3 },
        {nombre:"Gabinete Con Fuente 600W, Cromax CM-2803" ,         descripcion:"Gabinete Con Fuente 600W, Cromax CM-2803",    modelo:"Gabinete Con Fuente 600W, Cromax CM-2803",           stock:"Stock",    marca:"Cromax",      precio:"$ 62.700",    precioOferta:"$ 62.700", img: img4 },
        {nombre:"Gabinete GAMER Sentey J10 SF RGB Lateral Transparente" ,         descripcion:"Gabinete GAMER Sentey J10 SF RGB Lateral Transparente",  modelo:"Gabinete GAMER Sentey J10 SF RGB Lateral Transparente",           stock:"Stock",    marca:"Sentey",     precio:"$ 75.200",     precioOferta:"$ 75.200", img: img5},
        {nombre:"Gabinete Gamer Noganet 8609 Fuente 600w, 3 Coolers con LED Frontales" ,    descripcion:"Gabinete Gamer Noganet 8609 Fuente 600w, 3 Coolers con LED Frontales", modelo:"Gabinete Gamer Noganet 8609 Fuente 600w, 3 Coolers con LED Frontales",      stock:"Stock",    marca:"NOGA",       precio:"$ 76.600",    precioOferta:"$ 76.600", img: img6 },
    ];

    return(
        
        <div>
            <Carrito
                carrito={carrito}
                eliminarProducto={eliminarProducto}
                cambiarCantidad={cambiarCantidad}
                handlePagar={handlePagar}            
            />
            <div className='container'>
                <Productos productos={productos} agregarAlCarrito={agregarAlCarrito}/>
            </div>
            <Whatshapp/>
            <ToUp/>
        </div>
    )
};
export default Gabinetes;
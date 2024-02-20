import Productos from '../../Component/Productos';
import img1 from "../../img/pendrives/pendrives1.jpg";
import img2 from "../../img/pendrives/pendrives2.jpg";
import img3 from "../../img/pendrives/pendrives3.jpg";
import img4 from "../../img/pendrives/pendrives4.jpg";
import Carrito from '../../Component/Carrito';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Whatshapp from "../../Component/Watshapp";
import ToUp from '../../Component/ToUp';

const Pendrive =()=>{

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
        {nombre:"Tarjeta Micro SD HC 32GB Clase 10 Verbatim" ,              descripcion:"Tarjeta Micro SD HC 32GB Clase 10 Verbatim",               modelo:"HC 32GB Clase 10 Verbatim",     stock:"Stock",    marca:"Verbatim",         precio:"$ 9.900",       precioOferta:"$ 9.900", img: img1 },
        {nombre:"Tarjeta Micro SD XC 64GB Clase 10 Verbatim" ,              descripcion:"Tarjeta Micro SD XC 64GB Clase 10 Verbatim",               modelo:"XC 64GB Clase 10 Verbatim",     stock:"Stock",    marca:" Verbatim ",       precio:"$ 12.500",      precioOferta:"$ 12.500", img: img2 },
        {nombre:"Pendrive 32gb Verbatim SLIDER USB 2.0 - 98697" ,           descripcion:"Pendrive 32gb Verbatim SLIDER USB 2.0 - 98697",            modelo:"SLIDER USB 2.0 - 98697",        stock:"Stock",    marca:"Verbatim ",        precio:"$ 8.900",       precioOferta:"$ 8.900", img: img3 },
        {nombre:"Tarjeta Micro SD *4K* 32GB EXTREME c/adap. SanDisk UHD" ,  descripcion:"Tarjeta Micro SD *4K* 32GB EXTREME c/adap. SanDisk UHD",   modelo:"SanDisk",                       stock:"Stock",    marca:"Sandisk",          precio:"$ 23.900 ",     precioOferta:"$ 23.900 ", img: img4 }
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
export default Pendrive;
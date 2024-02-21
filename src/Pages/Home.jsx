import '../styles/home.css'
import Productos from '../Component/Productos';
import Img from "../img/img.json";
import Carusel from "../Component/Carusel";
import Carrito from "../Component/Carrito";
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import carusel1 from "../img/carusel1/carrusel1.png";
import carusel2 from "../img//carusel1/carrusel2.png";
import carusel3 from "../img//carusel1/carrusel3.png";

import img1 from "../img//carusel2/carrusel1.png";
import img2 from "../img//carusel2/carrusel2.png";


import Whatshapp from "../Component/Watshapp";
import ToUp from '../Component/ToUp';


const Home=()=>{

    const [carrito, setCarrito] = useState([]); 
    const imagenes = [ carusel1, carusel2, carusel3];
    const otrasImagenes = [ img1,img2];


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
        {nombre:"Micrófono Condenser Profesional" ,                                                     descripcion:"Descripcion", modelo:"", stock:"Stock",    marca:"KANJI FK-BC02",      precio:"$ 72.900",       precioOferta:"$ 70.000", img: Img.homeOferta1 },
        {nombre:"PC AIO HP Pavilion, Pantalla 27 FHD CPU Ryzen 7 " ,                                    descripcion:"Descripcion", modelo:"", stock:"Stock",    marca:"AIO",                precio:"$ 3.550.000",    precioOferta:"$ 3.000.000", img: Img.homeOferta2 },
        {nombre:"BARRA DE SONIDO + SUBWOOFER Harrison - BT - SP-KJA6701" ,                              descripcion:"Descripcion", modelo:"", stock:"Stock",    marca:"SUBWOOFER Harrison", precio:"$ 173.900",      precioOferta:"$ 163.900", img: Img.homeOferta3 },
        {nombre:"Notebook Gfast N-150 / Intel Celeron / 4 GB Ram / 128 SSD M.2 / 15,6",                 descripcion:"Descripcion", modelo:"", stock:"Sin stock",marca:"Gfast",              precio:"$ 299.900",      precioOferta:"$ 229.900", img: Img.homeOferta4 },
        {nombre:"Celular Samsung Galaxy A04 128Gb, 4Gb Ram, Color Negro",                               descripcion:"Descripcion", modelo:"", stock:"Stock",    marca:" Samsung",           precio:"$ 179.900",      precioOferta:"$ 119.900", img: Img.homeOferta5 },
        {nombre:"Monitor AOC *OFERTA* Gaming 23,8 90 SERIES - G2490VX - 144Hz",                         descripcion:"Descripcion", modelo:"", stock:"Sin stock",marca:"AOC",                precio:"$ 309.900 ",     precioOferta:"$ 300.900", img: Img.homeOferta6 },
        {nombre:"Silla Gamer MARVO CH-106 Black Scorpion",                                              descripcion:"Descripcion", modelo:"", stock:"Stock",    marca:"MARVO",              precio:"$ 289.900",      precioOferta:"$ 259.900", img: Img.homeOferta7 },
        {nombre:"CAMARA IP Kanjinet KJ-CAMIP1MX4 - 1080P -SMART IP - Control MOVIMIENTO desde CELULAR", descripcion:"Descripcion", modelo:"", stock:"Stock",    marca:"Kanjinet",           precio:"$ 65.500",       precioOferta:"$ 60.500", img: Img.homeOferta8 },
        {nombre:"Silla Gamer MARVO CH-106 Black Scorpion" ,                                             descripcion:"Descripcion", modelo:"", stock:"Sin stock",marca:"MARVO",              precio:"$ 289.900",      precioOferta:"$ 229.900", img: Img.homeOferta9 },
        {nombre:"Micrófono Blue YETI Nano Vivid Blue p/Streaming PC, Logitech" ,                        descripcion:"Descripcion", modelo:"", stock:"Stock",    marca:"YETI Nano",          precio:"$ 229.900",      precioOferta:"$  209.900", img: Img.homeOferta10 }
    ];
    return(
        <>
            <Carusel imagenes={imagenes} />
            <Carrito
                carrito={carrito}
                eliminarProducto={eliminarProducto}
                cambiarCantidad={cambiarCantidad}
                handlePagar={handlePagar}            
            />
            <div className='container'>
                <Productos productos={productos} agregarAlCarrito={agregarAlCarrito}/>
            </div>
            <Carusel imagenes={otrasImagenes}/>
            <Whatshapp/>
            <ToUp/>
        </>
    )
};
export  default Home;
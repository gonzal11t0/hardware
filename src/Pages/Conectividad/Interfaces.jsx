import Productos from '../../Component/Productos';
import img1 from "../../img/interfaces/interfaces1.jpg";
import img2 from "../../img/interfaces/interfaces2.jpg";
import img3 from "../../img/interfaces/interfaces3.jpg";
import img4 from "../../img/interfaces/interfaces4.jpg";
import img5 from "../../img/interfaces/interfaces5.jpg";
import img6 from "../../img/interfaces/interfaces6.jpg";
import img7 from "../../img/interfaces/interfaces7.jpg";
import Carrito from '../../Component/Carrito';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Whatshapp from "../../Component/Watshapp";
import ToUp from '../../Component/ToUp';

const Interfaces =()=>{
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
        {nombre:"Adaptador USB SATA IDE con FUENTE" ,         descripcion:"Adaptador USB SATA IDE con FUENTE",    modelo:"Adaptador USB SATA IDE con FUENTE",           stock:"Stock",    marca:"USBSATA",      precio:"$ 19.900",    precioOferta:"$ 19.900", img: img1 },
        {nombre:"Spliter VGA 4 X 1" ,         descripcion:"Spliter VGA 4 X 1",  modelo:"Spliter VGA 4 X 1",           stock:"Stock",    marca:"Spliter VGA 4 X 1",     precio:"$ 22.500",     precioOferta:"$ 22.500", img: img2 },
        {nombre:"SWITCH HDMI 3 X 1" ,    descripcion:"SWITCH HDMI 3 X 1", modelo:"SWITCH HDMI 3 X 1",      stock:"Stock",    marca:"SWITCH HDMI 3 X 1",       precio:"$ 6.900",    precioOferta:"$ 6.900", img: img3 },
        {nombre:"HUB USB 4 PTS 2.0 P/ PC Tipo zapatilla" ,    descripcion:"HUB USB 4 PTS 2.0 P/ PC Tipo zapatilla",     modelo:"HUB USB 4 PTS 2.0 P/ PC Tipo zapatilla",        stock:"Stock",    marca:"HUB USB 4 PTS 2.0 P/ PC Tipo zapatilla",         precio:"$ 4.500 ",    precioOferta:"$ 4.500 ", img: img4 },
        {nombre:"Multilector de tarjetas USB Interno NOGA - CR325" ,      descripcion:"Multilector de tarjetas USB Interno NOGA - CR325",           modelo:"Multilector de tarjetas USB Interno NOGA - CR325",       stock:"Stock",    marca:"NOGA",       precio:"$ 4.700",    precioOferta:"$ 4.700", img: img5 },
        {nombre:"HUB USB 4 PTS 3.0 SUPER VELOZ" , descripcion:"HUB USB 4 PTS 3.0 SUPER VELOZ",   modelo:"HUB USB 4 PTS 3.0 SUPER VELOZ",  stock:"Stock",    marca:"HUB USB 4 PTS 3.0 SUPER VELOZ",      precio:"$ 15.900",   precioOferta:"$ 15.900", img: img6 }, 
        {nombre:"VIDEO CONVERTER de AV a HDMI" , descripcion:"VIDEO CONVERTER de AV a HDMI",   modelo:"VIDEO CONVERTER de AV a HDMI",  stock:"Stock",    marca:"VIDEO CONVERTER de AV a HDMI",      precio:"$ 9.900",   precioOferta:"$ 9.900", img: img7 }, 
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
export default Interfaces;
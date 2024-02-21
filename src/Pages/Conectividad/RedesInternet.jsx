import Productos from '../../Component/Productos';
import img1 from "../../img/redesInternet/redes1.jpg";
import img2 from "../../img/redesInternet/redes2.jpg";
import img3 from "../../img/redesInternet/redes3.jpg";
import img4 from "../../img/redesInternet/redes4.jpg";
import img5 from "../../img/redesInternet/redes5.jpg";
import img6 from "../../img/redesInternet/redes6.jpg";
import Carrito from '../../Component/Carrito';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Whatshapp from "../../Component/Watshapp";
import ToUp from '../../Component/ToUp';


const RedesInternet =()=>{

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
        {nombre:"TL-SF1008D Switch de Escritorio de 8 Puertos de 10/100Mbps" ,         descripcion:"TL-SF1008D Switch de Escritorio de 8 Puertos de 10/100Mbps",    modelo:"TL-SF1008D",           stock:"Stock",    marca:"TP-Link",      precio:"$ 33.400",    precioOferta:"$ 33.400", img: img2 },
        {nombre:"Puntero laser verde" ,         descripcion:"Puntero laser verde",  modelo:"Puntero laser verde",           stock:"Stock",    marca:"Puntero laser verde",     precio:"$ 8.000",     precioOferta:"$ 8.000", img: img3 },
        {nombre:"TL-SF1005D Switch de escritorio de 5 puertos 10/100" ,    descripcion:"TL-SF1005D Switch de escritorio de 5 puertos 10/100", modelo:"TL-SF1005D",      stock:"Stock",    marca:"TP-Link",       precio:"$ 28.600",    precioOferta:"$ 28.600", img: img1 },
        {nombre:"TL-WN781ND Adaptador Express PCI Inalámbrico N de 150Mbps" ,    descripcion:"TL-WN781ND Adaptador Express PCI Inalámbrico N de 150Mbps",     modelo:"TL-WN781ND Adaptador Express PCI Inalámbrico N de 150Mbps",        stock:"Stock",    marca:"TP-Link",         precio:"$ 24.200",    precioOferta:"$ 24.200", img: img4 },
        {nombre:"TL-WN8200ND Adaptador USB Inalámbrico de alta Potencia de 300Mbps" ,      descripcion:"TL-WN8200ND Adaptador USB Inalámbrico de alta Potencia de 300Mbps",           modelo:"TL-WN8200ND",       stock:"Stock",    marca:"TP-Link",       precio:"$ 35.800",    precioOferta:"$ 35.800", img: img5 },
        {nombre:"TL-WN722N Adaptador USB inalámbrico de alta ganancia de 150Mbps" , descripcion:"TL-WN722N Adaptador USB inalámbrico de alta ganancia de 150Mbps",   modelo:"TL-WN722N ",  stock:"Stock",    marca:"TP-Link",      precio:"$ 23.700",   precioOferta:"$ 23.700", img: img6 }, 
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
export default RedesInternet;
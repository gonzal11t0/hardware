import Productos from '../../Component/Productos';
import img1 from "../../img/mother/mother.jpg";
import img2 from "../../img/mother/mother1.jpg";
import img3 from "../../img/mother/mother2.jpg";
import img4 from "../../img/mother/mother3.jpg";
import img5 from "../../img/mother/mother4.jpg";
import img6 from "../../img/mother/mother5.jpg";
import img7 from "../../img/mother/mother6.jpg";
import Carrito from '../../Component/Carrito';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Whatshapp from "../../Component/Watshapp";
import ToUp from '../../Component/ToUp';


const Mother =()=>{

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
        {nombre:"Motherboard ASUS PRIME A320M-K" ,         descripcion:"Socket AM4, HDMI, VGA, Slot M2",    modelo:"A320M-K",           stock:"Stock",    marca:"ASUS PRIME ",      precio:"$ 143.500",    precioOferta:"$ 143.500", img: img2 },
        {nombre:"Motherboard Asus Prime B365M-A" ,         descripcion:"Socket 1151/ DDR4 / HDMI / Intel",  modelo:"B365M-A",           stock:"Stock",    marca:" Asus Prime ",     precio:"$ 166.800",     precioOferta:"$ 166.800", img: img3 },
        {nombre:"Motherboard ASUS PRIME H310M-E R2.0" ,    descripcion:"1151 DDR4, Slot M2, USB 3.1 Gen 1", modelo:"H510M-K R2.0",      stock:"Stock",    marca:"ASUS PRIME",       precio:"$ 134.400",    precioOferta:"$ 1134.400", img: img1 },
        {nombre:"Motherboard ASUS PRIME H510M-K R2.0" ,    descripcion:"DDR4, Intel 11Gen Socket 1200",     modelo:"Galaxy A04",        stock:"Stock",    marca:" Samsung",         precio:"$ 179.900",    precioOferta:"$ 179.900", img: img4 },
        {nombre:"Motherboard Asus Prime H610M-E D4" ,      descripcion:"LGA1700 12va Gen / DDR4",           modelo:"H610M-E D4 ",       stock:"Stock",    marca:"Asus Prime",       precio:"$ 156.000",    precioOferta:"$ 156.000", img: img5 },
        {nombre:"Motherboard Asus Prime Z590-P LGA 1200" , descripcion:"Chipset Intel / PCIe 4.0 / DDR4",   modelo:"Z590-P LGA 1200 ",  stock:"Stock",    marca:"Asus Prime ",      precio:"$ 139.300 ",   precioOferta:"$ 139.300 ", img: img6 },
        {nombre:"Motherboard GIGABYTE Z590 Aorus Elite" ,  descripcion:"11 Gen / Socket 1200",              modelo:"Z590 Aorus Elite",  stock:"Stock",    marca:"Z590 Aorus Elite", precio:"$ 313.300",     precioOferta:"$ 313.300", img: img7 },
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
export default Mother;
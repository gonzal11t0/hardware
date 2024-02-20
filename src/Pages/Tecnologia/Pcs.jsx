import Productos from '../../Component/Productos';
import img1 from "../../img/pcs/pc1.jpg";
import img2 from "../../img/pcs/pc2.jpg";
import img3 from "../../img/pcs/pc3.jpg";
import img4 from "../../img/pcs/pc4.png";
import img5 from "../../img/pcs/pc5.jpg";
import img6 from "../../img/pcs/pc6.jpg";
import img7 from "../../img/pcs/pc7.jpg";
import img8 from "../../img/pcs/pc8.jpg";
import Carrito from '../../Component/Carrito';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Whatshapp from "../../Component/Watshapp";
import ToUp from '../../Component/ToUp';

const Pcs =()=>{

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
        {nombre:"Pc Equismax Pro - intel i5-10400 " ,            descripcion:" 16GB / SSD M.2 480GB - PC10A",                                           modelo:"Equismax Pro",          stock:"Stock",    marca:" Equismax",        precio:"$ 918.527",     precioOferta:"$ 679.527", img: img1 },
        {nombre:"PC PCBOX AMD Ryzen 5 5600G " ,                  descripcion:"16Gb Ram DDR4 / Disco SSD 480Gb / WiFi PC07",                             modelo:"PCBOX ",                stock:"Stock",    marca:" PCBOX ",          precio:"$ 857.440",     precioOferta:"$ 634.506", img: img2 },
        {nombre:"PC Gfast Intel Celeron G5905" ,                 descripcion:"8Gb Ram DDR4 de 2666Mhz, Disco SSD 240Gb / WiFi + MONITOR - PC02B-H100",  modelo:"Celeron G5905",         stock:"Stock",    marca:"Gfast ",           precio:"$ 1.300.550",   precioOferta:"$ 890.550", img: img3 },
        {nombre:"Pc Equismax GAMER AMD Ryzen 5 5600G",           descripcion:" 16GB / Geforce GTX1650/ SSD M.2 500GB - PC13A",                          modelo:"Equismax ",             stock:"Sin stock",marca:"Equismax ",        precio:"$ 1.557.590",   precioOferta:"$ 1.152.617", img: img4 },
        {nombre:"PC Gfast Intel i5-10400, 8Gb Ram DDR4 2666Mhz", descripcion:"Disco SSD 240Gb, WiFi, H500",                                             modelo:"Gfast Intel i5-10400",  stock:"Stock",    marca:"Gfast",            precio:"$ 1.027.900",   precioOferta:"$ 760.646", img: img5 },
        {nombre:"Pc Equismax Explora+ Intel Core i3-10105",      descripcion:"16GB / SSD M.2 500GB - PC06A",                                            modelo:"Equismax",              stock:"Sin stock",marca:" Equismax",        precio:"$ 788.590",     precioOferta:"$ 583.557", img: img6 },
        {nombre:"Pc Equismax Explora+ Intel Core i3-10105",      descripcion:"16GB / SSD M.2 500 + MONITOR - PC06B",                                    modelo:"Equismax Explora",      stock:"Stock",    marca:"Equismax Explora", precio:"$ 693.457",     precioOferta:"$ 500.000", img: img7 },
        {nombre:"Pc Equismax Pro - intel i5-10400",              descripcion:"16GB / SSD M.2 480GB + MONITOR - PC10B",                                  modelo:"Equismax Pro",          stock:"Stock",    marca:"Equismax Pro",     precio:"$ 789.427",     precioOferta:"$ 700.000", img: img8},    
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
export default Pcs;
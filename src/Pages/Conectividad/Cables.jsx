import Productos from '../../Component/Productos';
import img1 from "../../img/cables/cables1.jpg";
import img2 from "../../img/cables/cables2.jpg";
import img3 from "../../img/cables/cables3.jpg";

import Carrito from '../../Component/Carrito';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Whatshapp from "../../Component/Watshapp";
import ToUp from '../../Component/ToUp';


const Cables =()=>{

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
        {nombre:"Cable Coaxial x metro" ,         descripcion:"Cable Coaxial x metro",    modelo:"Cable Coaxial x metro",           stock:"Stock",    marca:"Cable Coaxial x metro",      precio:"$ 1.900",    precioOferta:"$ 1.900", img: img1 },
        {nombre:"Cable telefonico 2 MTS" ,         descripcion:"Cable telefonico 2 MTS",  modelo:"Cable telefonico 2 MTS",           stock:"Stock",    marca:"Cable telefonico 2 MTS",     precio:"$ 1.900",     precioOferta:"$ 1.900", img: img2 },
        {nombre:"Cable de POWER SATA" ,    descripcion:"Cable de POWER SATA", modelo:"Cable de POWER SATA",      stock:"Stock",    marca:"Cable de POWER SATA",       precio:"$ 1.500",    precioOferta:"$ 1.500", img: img3 },
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
export default Cables;
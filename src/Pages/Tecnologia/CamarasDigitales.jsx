import Productos from '../../Component/Productos';
import img1 from "../../img/camarasDigitales/camarasDigitales1.jpg";
import img2 from "../../img/camarasDigitales/camarasDigitales2.jpg";
import img3 from "../../img/camarasDigitales/camarasDigitales3.jpg";
import img4 from "../../img/camarasDigitales/camarasDigitales4.jpg";
import img5 from "../../img/camarasDigitales/camarasDigitales5.jpg";
import Carrito from '../../Component/Carrito';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Whatshapp from "../../Component/Watshapp";
import ToUp from '../../Component/ToUp';

const CamarasDigitales =()=>{

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
        {nombre:"Trípode p/Cámara y Celular 150 cm - NETMAK - NM-TRIP3" , descripcion:"Trípode p/Cámara y Celular 150 cm - NETMAK - NM-TRIP3",   modelo:"NM-TRIP3",   stock:"Stock",    marca:"NETMAK",   precio:"$ 15.900", precioOferta:"$ 15.900", img: img1 },
        {nombre:"TRIPODE 2,8 MTS PARA ARO DE LUZ" ,descripcion:"TRIPODE 2,8 MTS PARA ARO DE LUZ", modelo:"TRIPODE 2,8 MTS PARA ARO DE LUZ",   stock:"Stock",    marca:"TRIPODE 2,8 MTS PARA ARO DE LUZ",  precio:"$ 12.200",     precioOferta:"$ 12.200", img: img2 },
        {nombre:"TRIPODE PARA ARO DE LUZ" ,descripcion:"TRIPODE PARA ARO DE LUZ",modelo:"TRIPODE PARA ARO DE LUZ",stock:"Stock",    marca:"TRIPODE PARA ARO DE LUZ",     precio:"$ 8.000",   precioOferta:"$ 8.000", img: img3 },
        {nombre:"Mini Tripode para Celular c/Soporte 360º Giratorio" , descripcion:"Mini Tripode para Celular c/Soporte 360º Giratorio", modelo:"Mini Tripode para Celular c/Soporte 360º Giratorio",stock:"Stock",    marca:"Netmak",     precio:"$ 3.000",   precioOferta:"$ 3.000", img: img4 },
        {nombre:"Mini Tripode para Celular c/Soporte Flexible" ,descripcion:"Mini Tripode para Celular c/Soporte Flexible", modelo:"Mini Tripode para Celular c/Soporte Flexible",stock:"Stock",    marca:"Mini Tripode para Celular c/Soporte Flexible",     precio:"$  2.600",   precioOferta:"$ 2.600", img: img5 },    
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

export default CamarasDigitales;
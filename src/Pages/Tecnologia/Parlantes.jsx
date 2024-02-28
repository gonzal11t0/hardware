import Productos from '../../Component/Productos';
import img1 from "../../img/parlantes/parlantes1.jpg";
import img2 from "../../img/parlantes/parlantes2.jpg";
import img3 from "../../img/parlantes/parlantes3.jpg";
import img4 from "../../img/parlantes/parlantes4.jpg";
import img5 from "../../img/parlantes/parlantes5.jpg";
import img6 from "../../img/parlantes/parlantes6.jpg";
import img7 from "../../img/parlantes/parlantes7.jpg";
import img8 from "../../img/parlantes/parlantes8.jpg";
import img9 from "../../img/parlantes/parlantes9.jpg";
import Carrito from '../../Component/Carrito';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Whatshapp from "../../Component/Watshapp";
import ToUp from '../../Component/ToUp';

const Parlantes =()=>{

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
        {nombre:"Mini Parlantes Noga - USB 2.0 - NG-106" , descripcion:"Mini Parlantes Noga - USB 2.0 - NG-106", modelo:"NG-106",   stock:"Stock",   marca:"NOGA",   precio:"$ 9.700", precioOferta:"$ 9.700", img: img1 },
        {nombre:"Parlante NETMAK Delight NM-9025B -6W RMS- Alimentación x USB -Azul" ,descripcion:"Parlante NETMAK Delight NM-9025B -6W RMS- Alimentación x USB -Azul", modelo:"Parlante NETMAK Delight NM-9025B -6W RMS- Alimentación x USB -Azul",   stock:"Stock",    marca:"Netmak",  precio:"$ 12.900",     precioOferta:"$ 12.900", img: img2 },
        {nombre:"Parlante NETMAK Delight NM-9025B -6W RMS- Alimentación USB -Rojo" ,descripcion:"Parlante NETMAK Delight NM-9025B -6W RMS- Alimentación USB -Rojo",modelo:"Parlante NETMAK Delight NM-9025B -6W RMS- Alimentación USB -Rojo",stock:"Stock",    marca:"Netmak",     precio:"$ 12.900",   precioOferta:"$ 12.900", img: img3 },
        {nombre:"Parlantes Noga NG-512P Multimedia USB" , descripcion:"Parlantes Noga NG-512P Multimedia USB", modelo:"Parlantes Noga NG-512P Multimedia USB",stock:"Stock",    marca:"Noga",     precio:"$ 14.500",   precioOferta:"$ 14.500", img: img4 },
        {nombre:"Parlante Genius SP-Q160 USB Blue" ,descripcion:"Parlante Genius SP-Q160 USB Blue", modelo:"Parlante Genius SP-Q160 USB Blue",stock:"Stock",    marca:"Genius",     precio:"$  17.500",   precioOferta:"$ 17.500", img: img5 },  
        {nombre:"Parlantes Noga NG-508P Multimedia" ,descripcion:"Parlantes Noga NG-508P Multimedia", modelo:"Parlantes Noga NG-508P Multimedia",stock:"Stock",    marca:"NOGA",     precio:"$  19.500 ",   precioOferta:"$ 19.500 ", img: img6 },    
        {nombre:"Parlantes Noga 2.1 - NG-510P Multimedia con subwoofer" ,descripcion:"Parlantes Noga 2.1 - NG-510P Multimedia con subwoofer", modelo:"NG-510P",stock:"Stock",    marca:"NOGA",     precio:"$  34.500",   precioOferta:"$ 34.500", img: img7 },    
        {nombre:"Parlantes Noga 2.1 - NG-504P Multimedia con subwoofer" ,descripcion:"Parlantes Noga 2.1 - NG-504P Multimedia con subwoofer", modelo:"Parlantes Noga 2.1 - NG-504P Multimedia con subwoofer",stock:"Stock",    marca:"NOGA",     precio:"$  34.500",   precioOferta:"$ 34.500", img: img8 },    
        {nombre:"Sistema de Parlantes 2.1 Noga ML-3300C Negro con Rosa" ,descripcion:"Sistema de Parlantes 2.1 Noga ML-3300C Negro con Rosa", modelo:"Sistema de Parlantes 2.1 Noga ML-3300C Negro con Rosa",stock:"Stock",    marca:"NOGA",     precio:"$   36.900",   precioOferta:"$  36.900", img: img9 },      
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

export default Parlantes;
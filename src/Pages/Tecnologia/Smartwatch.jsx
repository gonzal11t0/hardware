import Productos from '../../Component/Productos';
import img1 from "../../img/SMARTWATCH/SMARTWATCH1.jpg";
import img2 from "../../img/SMARTWATCH/SMARTWATCH2.jpg";
import img3 from "../../img/SMARTWATCH/SMARTWATCH3.jpg";
import img4 from "../../img/SMARTWATCH/SMARTWATCH4.jpg";
import img5 from "../../img/SMARTWATCH/SMARTWATCH5.jpg";
import img6 from "../../img/SMARTWATCH/SMARTWATCH6.jpg";
import img7 from "../../img/SMARTWATCH/SMARTWATCH7.jpg";
import img8 from "../../img/SMARTWATCH/SMARTWATCH8.jpg";
import Carrito from '../../Component/Carrito';  
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Whatshapp from "../../Component/Watshapp";
import ToUp from '../../Component/ToUp';

const SmartWatch =()=>{

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
        {nombre:"Xiaomi Mi Band 7 Smartwatch Reloj Inteligente (black)" , descripcion:"Xiaomi Mi Band 7 Smartwatch Reloj Inteligente (black)", modelo:"Mi Band 7",   stock:"Stock",   marca:"Xiaomi",   precio:"$ 75.400", precioOferta:"$ 75.400", img: img1 },
        {nombre:"Reloj Inteligente Smartwatch JD Paris Negro + Malla Metalica" ,descripcion:"Reloj Inteligente Smartwatch JD Paris Negro + Malla Metalica", modelo:"JD Paris",   stock:"Stock",    marca:"JD",  precio:"$ 58.500",     precioOferta:"$ 58.500", img: img2 },
        {nombre:"Reloj Inteligente Smartwatch JD Paris Rosa + Malla Metalica" ,descripcion:"Reloj Inteligente Smartwatch JD Paris Rosa + Malla Metalica",modelo:"JD Paris",stock:"Stock",    marca:"JD",     precio:"$ 58.500",   precioOferta:"$ 58.500", img: img3 },
        {nombre:"Reloj Inteligente Smartwatch JD Paris Rosa LITE" , descripcion:"Reloj Inteligente Smartwatch JD Paris Rosa LITE", modelo:"JD Paris",stock:"Stock",    marca:"JD",     precio:"$ 57.200",   precioOferta:"$ 57.200", img: img4 },
        {nombre:"Smartwatch Xiaomi Imilab Kw66 1.28 3d Hd" ,descripcion:"Smartwatch Xiaomi Imilab Kw66 1.28 3d Hd", modelo:"Imilab Kw66 1.28",stock:"Stock",    marca:"Xiaomi",     precio:"$  68.900",   precioOferta:"$ 68.900", img: img5 },  
        {nombre:"Reloj Inteligente Smartwatch JD Milan - Negro" ,descripcion:"Reloj Inteligente Smartwatch JD Milan - Negro", modelo:"JD Milan",    marca:"JD",     precio:"$  46.900",   precioOferta:"$ 46.900", img: img6 },    
        {nombre:"Correa pulsera para Xiaomi Mi Band 5 Silicona Malla" ,descripcion:"Correa pulsera para Xiaomi Mi Band 5 Silicona Malla", modelo:"Mi Band 5",stock:"Stock",    marca:"Xiaomi",     precio:"$  4.300",   precioOferta:"$ 4.300", img: img7 },    
        {nombre:"Reloj Inteligente Smartwatch JD Paris Plata + Malla Metalica" ,descripcion:"Reloj Inteligente Smartwatch JD Paris Plata + Malla Metalica", modelo:"JD Paris",stock:"Stock",    marca:"JD",     precio:"$  58.500",   precioOferta:"$ 58.500", img: img8 },    
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
export default SmartWatch;
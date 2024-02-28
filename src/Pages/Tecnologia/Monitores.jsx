import Productos from '../../Component/Productos';
import img1 from "../../img/monitores/monitores1.jpg";
import img2 from "../../img/monitores/monitores2.jpg";
import img3 from "../../img/monitores/monitores3.jpg";
import img4 from "../../img/monitores/monitores4.jpg";
import img5 from "../../img/monitores/monitores5.jpg";
import img6 from "../../img/monitores/monitores6.jpg";
import Carrito from '../../Component/Carrito';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Whatshapp from "../../Component/Watshapp";
import ToUp from '../../Component/ToUp';


const Monitores =()=>{

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
        {nombre:"Monitor LED 22 Gfast , T-220 - HDMI -VGA *SUPER OFERTA*" , descripcion:"Monitor LED 22 Gfast , T-220 - HDMI -VGA *SUPER OFERTA*",   modelo:"T-220",   stock:"Stock",    marca:"Gfast",   precio:"$ 148.514", precioOferta:"$ 109.900", img: img1 },
        {nombre:"Monitor Led Philips V Line 22 - full HD - 21,5" ,descripcion:"Monitor Led Philips V Line 22 - full HD - 21,5“", modelo:"V Line 22",   stock:"Stock",    marca:"Philips",  precio:"$ 162.027",     precioOferta:"$ 119.900", img: img2 },
        {nombre:"Monitor Samsung LF22T350 / led 22  IPS" ,descripcion:"Monitor Samsung LF22T350 / led 22  IPS",modelo:"LF22T350",stock:"Stock",    marca:"Samsung ",     precio:"$ 202.568",   precioOferta:"$ 149.900", img: img3 },
        {nombre:"Monitor Led Philips V Line 24 - full HD - 23,8" , descripcion:"Monitor Led Philips V Line 24 - full HD - 23,8", modelo:"V Line 24",stock:"Stock",    marca:"Philips",     precio:"$ 216.081",   precioOferta:"$ 159.900 ", img: img4 },
        {nombre:"Monitor Samsung LF24T350 / led 24IPS" ,descripcion:"Monitor Samsung LF24T350 / led 24 IPS", modelo:"LF24T350",stock:"Stock",    marca:"Samsung",     precio:"$  224.189",   precioOferta:"$ 165.900", img: img5 },
        {nombre:"Monitor Gamer curvo Samsung C24F390FH led 24 black high glossy 100V/240V" ,descripcion:"Monitor Gamer curvo Samsung C24F390FH led 24 black high glossy 100V/240V",modelo:"C24F390FH ",stock:"Stock",    marca:"Samsung",     precio:"$  405.270",   precioOferta:"$ 299.900", img: img6 },
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
export default Monitores;
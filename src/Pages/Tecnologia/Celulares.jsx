import Productos from '../../Component/Productos';
import img1 from "../../img/celulares/celulares.jpg";
import img2 from "../../img/celulares/celulares2.jpg";
import img3 from "../../img/celulares/celulares3.jpg";
import Carrito from '../../Component/Carrito';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Whatshapp from "../../Component/Watshapp";
import ToUp from '../../Component/ToUp';
const Celulares =()=>{
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
        {nombre:"Celular Samsung Galaxy A04" ,    descripcion:" 128Gb, 4Gb Ram, Color Negro",   modelo:"Galaxy A04",   stock:"Stock",    marca:" Samsung",   precio:"$ 179.900",     precioOferta:"$ 179.900", img: img1 },
        {nombre:"Samsung Galaxy A14" ,            descripcion:"128Gb 4Gb Ram, Color Negro",     modelo:"Galaxy A14",   stock:"Stock",    marca:" Samsung ",  precio:"$ 239.900",     precioOferta:"$ 239.900", img: img2 },
        {nombre:"Apple iPhone 15 Pro" ,           descripcion:"128GB Black Titanium",           modelo:"iPhone 15 Pro",stock:"Stock",    marca:"Apple ",     precio:"$ 1.872.000",   precioOferta:"$ 1.872.000", img: img3 },
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
export default Celulares;
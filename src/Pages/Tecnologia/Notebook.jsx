import Productos from '../../Component/Productos';
import img1 from "../../img/notebooks/notebook1.jpg";
import img2 from "../../img/notebooks/noteboo2.jpg";
import img3 from "../../img/notebooks/noteboo3.jpg";
import img4 from "../../img/notebooks/notebook4.jpg";
import img5 from "../../img/notebooks/notebook5.jpg";
import img6 from "../../img/notebooks/notebook6.jpg";
import img7 from "../../img/notebooks/notebook7.jpg";
import img8 from "../../img/notebooks/notebook8.jpg";
import Carrito from '../../Component/Carrito';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Whatshapp from "../../Component/Watshapp";
import ToUp from '../../Component/ToUp';
const Notebook =()=>{


    
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
        {nombre:"Notebook Gfast N-150" ,                                                  descripcion:"  / 4 GB Ram / 128 SSD M.2 / 15,6",                          modelo:"Celeron",       stock:"Stock",    marca:"Intel",    precio:"$ 405 270",    precioOferta:"$ 299 900", img: img1 },
        {nombre:"Notebook Hyundai HyBook" ,                                               descripcion:"N4020 / 128Gb SSD / 4gb Ram / 14",                           modelo:" HyBook",       stock:"Stock",    marca:"Hyundai",  precio:"$ 445.811",    precioOferta:"$ 329.900", img: img2 },
        {nombre:"Notebook Lenovo V14" ,                                                   descripcion:"Core i3 1115G4, 8 GB, SSD 256GB, 14",                        modelo:"V14",           stock:"Stock",    marca:"Lenovo ",  precio:"$ 770.135",    precioOferta:"$ 569.900", img: img3 },
        {nombre:"Notebook Gfast N-150 / Intel Celeron / 4 GB Ram / 128 SSD M.2 / 15,6",   descripcion:"Intel Core i5 / 8 GB Ram / 480 SSD M.2 / 15,6",              modelo:"Gfast N-150",   stock:"Sin stock",marca:"Gfast",    precio:"$ 797.162",    precioOferta:"$ 589.900", img: img4 },
        {nombre:"Notebook Bangho MAX L5 i3 15.6",                                         descripcion:"Intel Core i3, 8 Gb, 240GB SSD",                             modelo:"Bangho MAX",    stock:"Stock",    marca:"Bangho",   precio:"$ 810.676",    precioOferta:"$ 599.900", img: img5 },
        {nombre:"Notebook Lenovo V15",                                                    descripcion:"Core i3 - 10110U / 8gb RAM / SSD 256GB / 15.6",              modelo:"Lenovo V15",    stock:"Sin stock",marca:" Lenovo",  precio:"$ 838.703 ",   precioOferta:"$ 619.900", img: img6 },
        {nombre:"Notebook Dell Inspiron 3511",                                            descripcion:"Intel Core i3-1115G4 / 8gb RAM / 256Gb SSD / Pantalla 15,6", modelo:"Inspiron 3511", stock:"Stock",    marca:"Dell",     precio:"$ 932.297",    precioOferta:"$ 689.900", img: img7 },
        {nombre:"Notebook ASUS X515EA",                                                   descripcion:"CPU Intel Core i3, 12Gb Ram, Disco SSD 256Gb, 15,6 LCD HD",  modelo:"ASUS X515EA",   stock:"Stock",    marca:"ASUS",     precio:"$ 959.24",     precioOferta:"$ 709.900", img: img8},    
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
export default Notebook;
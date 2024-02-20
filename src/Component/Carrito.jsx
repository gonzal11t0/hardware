import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import '../styles/modal.css';

const Carrito = ({ carrito, pagar, eliminarProducto, cambiarCantidad }) => {
    const [mostrarCarrito, setMostrarCarrito] = useState(false);

    const toggleCarrito = () => {
        setMostrarCarrito(!mostrarCarrito);
    };

    const handleEliminarProducto = (id) => {
        eliminarProducto(id);
    };

    const Total = (producto) => {
        const cantidad = parseInt(producto.cantidad);
        const precioLimpio = parseFloat(producto.precio.replace(/[^\d.]/g, ''));
    
        if (isNaN(precioLimpio)) {
            return 0; 
        }
        const total = cantidad * precioLimpio;
        return total.toFixed(2);
    };

    const calcularTotalCarrito = () => {
        let totalCarrito = 0;
        carrito.forEach((producto) => {
            totalCarrito += parseFloat(Total(producto));
        });
        return totalCarrito.toFixed(2);
    };
    
    return (
        <div>
            <div style={{ float: "left", top: "72vh", position: "fixed", marginLeft: "10vw" }} onClick={toggleCarrito}>
                <ShoppingCartIcon />
                {carrito.length > 0 && <span>{carrito.length}</span>}
            </div>
            {mostrarCarrito && (
                <section className='section'>
                    <Modal
                        open={mostrarCarrito}
                        onClose={toggleCarrito}
                        aria-labelledby="modal-title"
                        aria-describedby="modal-description"
                    >
                        <div className='container-carrito'>
                            <h1 style={{ textAlign: "center" }}>Carrito</h1>
                            <table>
                                <thead>
                                    <tr>
                                    </tr>
                                </thead>
                                <tbody>
                                    {carrito.map((producto) => (
                                        <tr key={producto.id}>
                                            <td>{producto.nombre}</td>
                                            <td>{producto.descripcion}</td>
                                            <td>{producto.precioOferta}</td>
                                            <td>
                                                <input
                                                    type="number"
                                                    value={producto.cantidad}
                                                    onChange={(e) => cambiarCantidad(producto.id, parseInt(e.target.value))}
                                                />
                                            </td>
                                            <td>{Total(producto)}k</td>
                                            <td>
                                                <Button onClick={() => handleEliminarProducto(producto.id)}>Eliminar</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className='pagos'>
                                <Button onClick={toggleCarrito}>Cerrar Carrito</Button>
                                <tfoot>
                                    <tr>
                                        <td colSpan="4">Total:</td>
                                        <td>{calcularTotalCarrito()}k</td>
                                        <td></td>
                                    </tr>
                                </tfoot>
                                <Button onClick={pagar}>Ir a Pagar</Button>
                            </div>
                        </div>
                    </Modal>
                </section>
            )}
        </div>
    );
};

export default Carrito;

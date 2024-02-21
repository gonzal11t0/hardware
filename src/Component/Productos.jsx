import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../styles/modal.css';
import mediosPagos from "../img/promociones/mediosPagos.png";

const Productos = ({ productos, agregarAlCarrito }) => {
    const [hoverIndex, setHoverIndex] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleOpenModal = (product) => {
        setSelectedProduct(product);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const limpiarPrecio = (precio) => {
        return precio.replace(/\D/g, '');
    };
    
    const calcular3Cuotas = (producto) => {
        if (producto && producto.precioOferta) {
            const valorLimpiado = limpiarPrecio(producto.precioOferta);
            const valor = parseInt(valorLimpiado);
            if (!isNaN(valor)) {
                const precioFinal = parseInt(valor / 3);
                return precioFinal;
            }
        }
        return 0;
    };
    
    const calcular6Cuotas = (producto) => {
        if (producto && producto.precioOferta) {
            const valorLimpiado = limpiarPrecio(producto.precioOferta);
            const valor = parseInt(valorLimpiado);
            if (!isNaN(valor)) {
                const precioFinal = parseInt(valor / 6);
                return precioFinal;
            }
        }
        return 0;
    };

    return (
        <div className='grid-container'>
            {productos.map((producto, index) => (
                <Card
                    key={index}
                    sx={{
                        maxWidth: 255,
                        paddingLeft: 1,
                        marginBottom: 10,
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: '100%',
                    }}
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                >
                    {hoverIndex === index && (
                        <Button
                            sx={{
                                position: 'absolute',
                                top: '53%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                backgroundColor: 'rgba(0, 0, 255, 0.5)',
                                borderRadius: '50%',
                            }}
                            onClick={() => handleOpenModal(producto)}
                        >
                            ℹ️
                        </Button>
                    )}
                    <CardMedia
                        component="img"
                        alt={`Oferta ${index + 1}`}
                        image={producto.img}
                        sx={{
                            '&:hover': {
                                transform: 'scale(1.1)',
                            },
                        }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {producto.nombre}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={() => agregarAlCarrito(producto)} variant="contained" disableElevation size="small">
                            Carrito
                        </Button>
                        <Typography
                            sx={{ color: 'green', textDecoration: 'line-through', marginRight: '10px' }}
                            size="small"
                        >
                            {producto.precio}
                        </Typography>
                        <Typography sx={{ color: 'red' }} size="small">
                            {producto.precioOferta}
                        </Typography>
                    </CardActions>
                </Card>
            ))}
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <div className='Modal-body'>
                    <div className="row">
                        <div className="col-md-5">
                            <div className='imagen-modal'>
                                <img src={selectedProduct && selectedProduct.img} alt="Imagen del producto" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className='titulo-modal'>
                                <h2 id="modal-title">{selectedProduct && selectedProduct.nombre}</h2>
                            </div>
                            <div className='descripcion-modal'>
                                <p>Marca: {selectedProduct && selectedProduct.marca}</p>
                                <p>Stock: {selectedProduct && selectedProduct.stock ? "En stock" : "Sin stock"}</p>
                                <p>Precio: {selectedProduct && selectedProduct.precioOferta}</p>
                            </div>
                            <div className='pago'>
                                <p>CUOTAS CON TASA PREFERENCIAL:</p>
                                <p>En 3 cuotas fijas de $ {calcular3Cuotas(selectedProduct)}</p>
                                <p>En 6 cuotas fijas de $ {calcular6Cuotas(selectedProduct)}</p>
                                <p>* El valor de las cuotas es de referencia sujeto a redondeo.</p>
                            </div>
                            <div className='promociones-bancarias'>
                                <div className='promociones-bancarias-titulo'>
                                    <span>Medios de pagos</span>
                                </div><br/>
                                <div className='promociones-bancarias-img'>
                                    <img src={mediosPagos} alt='img1'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Productos;
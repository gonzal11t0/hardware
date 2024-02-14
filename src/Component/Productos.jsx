import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Productos = ({ productos }) => {
    const [hoverIndex, setHoverIndex] = useState(null);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
            {productos.map((producto, index) => (
                <Card
                    key={index}
                    sx={{
                        maxWidth: 250,
                        paddingLeft: 6,
                        marginBottom: 20,
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: '100%', // Establece la altura al 100% del contenedor padre
                    }}
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                >
                    {hoverIndex === index && (
                        <IconButton
                            sx={{
                                position: 'absolute',
                                top: 10,
                                left:2,
                                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                                borderRadius: '50%',
                            }}
                            component={Link}
                            to={`/menu/${producto.categoria}`}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                    <CardMedia
                        component="img"
                        alt={`Oferta ${index + 1}`}
                        height="200"
                        image={producto.img}
                        sx={{
                            '&:hover': {
                                transform: 'scale(1.2)', 
                            },
                        }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {producto.nombre}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" disableElevation size="small">
                            Comprar
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
        </div>
    );
};

export default Productos;

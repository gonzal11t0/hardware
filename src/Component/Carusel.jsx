import { useState } from 'react';
import '../styles/Carrusel.css';
import '../styles/mediaCarrusel.css';

const Carusel = ({ imagenes }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === imagenes.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? imagenes.length - 1 : prevIndex - 1));
    };

    return( 
        <div style={{marginTop:'10vh'}}>

            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    {imagenes.map((image, index) => (
                        <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
                            <img src={image} className="d-block h-200 w-100" style={{ zIndex: 1, width: '2031px', height: '390px' }} alt={`carusel-${index + 1}`} />
                        </div>
                    ))}
                    </div>
                <button onClick={handlePrev} className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev"style={{fontSize: "0.5rem"}}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button onClick={handleNext} className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" style={{fontSize: "0.5rem"}}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
                </div>
        </div>
    );
};
export default Carusel;

import ImgCarrusel from '../img/imgCarrusel.json';

const Carrusel = () => {
    return (
        <div>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={ImgCarrusel.imgCarrusel11} className="d-block w-100" alt="img-1" />
                    </div>
                    <div className="carousel-item">
                        <img src={ImgCarrusel.imgCarrusel2} className="d-block w-100" alt="img-2" />
                    </div>
                    <div className="carousel-item">
                        <img src={ImgCarrusel.imgCarrusel3} className="d-block w-100" alt="img-3" />
                    </div>
                    <div className="carousel-item">
                        <img src={ImgCarrusel.imgCarrusel4} className="d-block w-100" alt="img-4" />
                    </div>
                    <div className="carousel-item">
                        <img src={ImgCarrusel.imgCarrusel5} className="d-block w-100" alt="img-5" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
        </div>
    );
};

export default Carrusel;

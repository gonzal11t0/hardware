import '../styles/home.css'
import Productos from '../Component/Productos';
import Img from "../img/img.json";
const Home=()=>{
    const productos=[
        {nombre:"Micrófono Condenser Profesional" ,                                                        precio:"$ 72.900",       precioOferta:"$ 70.000", img: Img.homeOferta1 },
        {nombre:"PC AIO HP Pavilion, Pantalla 27 FHD CPU Ryzen 7 " ,                                       precio:"$ 3.550.000",    precioOferta:"$ 3.000.000", img: Img.homeOferta2 },
        {nombre:"BARRA DE SONIDO + SUBWOOFER Harrison - BT - SP-KJA6701" ,                                 precio:"$ 173.900",      precioOferta:"$ 163.900", img: Img.homeOferta3 },
        {nombre:"Notebook Gfast N-150 / Intel Celeron / 4 GB Ram / 128 SSD M.2 / 15,6",                    precio:"$ 299.900",      precioOferta:"$ 229.900", img: Img.homeOferta4 },
        {nombre:"Celular Samsung Galaxy A04 128Gb, 4Gb Ram, Color Negro",                                  precio:"$ 179.900",      precioOferta:"$ 119.900", img: Img.homeOferta5 },
        {nombre:"Monitor AOC *OFERTA* Gaming 23,8 90 SERIES - G2490VX - 144Hz",                            precio:"$  309.900 ",    precioOferta:"$ 300.900", img: Img.homeOferta6 },
        {nombre:"Silla Gamer MARVO CH-106 Black Scorpion",                                                 precio:"$   289.900",    precioOferta:"$ 259.900", img: Img.homeOferta7 },
        {nombre:"CAMARA IP Kanjinet KJ-CAMIP1MX4 - 1080P -SMART IP - Control MOVIMIENTO desde CELULAR",    precio:"$ 65.500",       precioOferta:"$ 60.500", img: Img.homeOferta8 },
        {nombre:"Silla Gamer MARVO CH-106 Black Scorpion" ,                                                precio:"$ 289.900",      precioOferta:"$ 229.900", img: Img.homeOferta9 },
        {nombre:"Micrófono Blue YETI Nano Vivid Blue p/Streaming PC, Logitech" ,                           precio:"$ 229.900",      precioOferta:"$  209.900", img: Img.homeOferta10 }
    ];
    return(
        <>
            <div className='container'>
                <Productos productos={productos}/>
        </div>
        </>
    )
};
export  default Home;
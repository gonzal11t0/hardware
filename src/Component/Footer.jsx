import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/Close'; // Importa el ícono Close
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import  '../styles/footer.css'

const Footer=()=>{
    return(
        <div>
            <footer className="footer">
                <div className="titulo-footer">
                    <h1>Todos los precios son indicados con impuestos incluidos</h1>
                </div>
                <div className="copyright">
                    <h2>Copyright © 2022 Computacion  Computación S.A.  </h2>
                </div>
                <div className="icon-footer">
                    <a href='https://www.instagram.com/?hl=es' target='_blank' rel="noreferrer"><InstagramIcon/></a>
                    <a href='https://twitter.com/?lang=es' target='_blank' rel="noreferrer"><XIcon/></a>
                    <a href='https://maps.app.goo.gl/iCojzrK1PfRLDb5d8' target='_blank' rel="noreferrer"><AddLocationAltIcon/></a>
                </div>  
            </footer>
        </div>
    )
};

export default Footer;
import '../styles/pagos.css'
import '../styles/modal.css';
import { Button } from '@mui/material';
const Pagos=({cerrar,TotalCarrito})=>{

    return(
        <div className="container-pagos">
            <div className='container-titulo-pagos'>
                <h1 style={{textAlign:"center"}}>Pasarela de pago</h1>
            </div>
            <div className='formulario-productos-pagos'>
                <form>
                    <input type='text'  name='Nombre'       placeholder='Ingrese Nombre'    aria-activedescendant='' id='Nombre'/>
                    <input type='text'  name='Apellido'     placeholder='Ingrese Apellido'  aria-activedescendant='' id='Apellido'/>
                    <input type='text'  name='Localidad'    placeholder='Ingrese Localidad' aria-activedescendant='' id='Localidad'/>
                    <input type='text'  name='Direccion'    placeholder='Ingrese Direccion' aria-activedescendant='' id='Direccion'/>
                    <input type='email' name='Email'        placeholder='Ingrese Email'     aria-activedescendant='' id='Email'/>
                    <textarea           name='extra'        placeholder='Ingrese si lo desea recomendaciones' id='descripcion' rows="4" cols="50"></textarea>
                    <select>
                        <option value="MercadoPago">Mercado Pago</option>
                        <option value="Transferencia">Transferencia</option>
                        <option value="Binance">Binance</option>
                        <option value="Modo">Modo</option>
                    </select>
                    <select>
                        <option value="3Cuotas">3 Cuotas</option>
                        <option value="6Cuotas">6 Cuotas</option>
                    </select>
                    <div className='total-productos-pagos'>
                        <span>Total</span>
                        <h1>${TotalCarrito}</h1>
                    </div>
                </form>
            </div>
            <Button  onClick={cerrar}>Cerrar</Button>
        </div>
    );
};
export default Pagos;
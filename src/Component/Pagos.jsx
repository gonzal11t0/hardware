import { Button } from "@mui/material";

const Pagos=({ handlePagar })=>{
    return(
        <div>
            <Button onClick={handlePagar}>Ir a Pagar</Button>
        </div>
    );
};
export default Pagos;
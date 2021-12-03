import { Link } from "react-router-dom";
import successGif from "../../multimedia/success.gif";


const Success = ({orderId})=>{
    return <div id="successContainer" className="container-fluid text-center">
        <div id="gifContainer">
            <img src={successGif} width="80%" alt="successful purchase gif"></img>
        </div>
        <div className="container-fluid mt-5">
            <h2 className="mb-4">Felicitaciones!!!</h2>
            <p>Tu compra se ha completado con éxito.</p>
            <p>{"Número de orden: " + orderId}</p>
            <Link to="/">
                <button className="btn btn-secondary">Catálogo</button>
            </Link>
        </div>
    </div>
}

export default Success;
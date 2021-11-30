import { Link } from "react-router-dom"; 


const CartEmpty = ()=>{
    return <div className="text-center">
        <h2>Carrito vacío</h2>
        <p>Agregue productos desde el catálogo para verlos aquí</p>
        <Link to="/">
            <button className="btn btn-secondary">Catálogo</button>
        </Link>
    </div>
}


export default CartEmpty;
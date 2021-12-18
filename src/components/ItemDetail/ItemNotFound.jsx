import { Link } from "react-router-dom";

const ItemNotFound = ()=>{
    return <div className="containter-fluid text-center">
        <h1 className="text-danger">Oooops!</h1>
        <p>No encontramos el artículo que estás buscando.</p>
        <p>Ingresa a nuestro catálogo para ver el listado de artículos disponibles</p>
        <Link to="/">
            <button className="btn btn-secondary">Catálogo</button>
        </Link>
    </div>
}


export default ItemNotFound;
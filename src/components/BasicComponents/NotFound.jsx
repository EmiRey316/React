import { Link } from "react-router-dom";



const NotFound = ()=>{
    return <div className="text-center">
        <h1>404</h1>
        <h2>Página no encontrada</h2>
        <Link to="/">
            <button className="btn btn-secondary">Catálogo</button>
        </Link>
    </div>
}


export default NotFound;
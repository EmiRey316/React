import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext.js";

import ItemCount from "./ItemCount.jsx";

import "./ItemDetail.css";


const ItemDetail = ({product})=>{
    //Estado que verifica cual será el botón o componente a mostrar.
    const [onAddClicked, setOnAddClicked] = useState(false);

    const { addToCart, amountInCart } = useContext(cartContext)


    //Máximo para controlar que no se agreguen más item que el stock en el carrito.
    const maximum = product.stock - amountInCart(product);


    //Función que se ejecutará al desatar el evento onClick del botón "Agregar al carrito" del ItemCount.
    const handleAdd = (quantityToAdd) => {
        console.log("Se suman " + quantityToAdd + " unidades al carrito.");
        setOnAddClicked(true);
        addToCart(product, quantityToAdd)
    }


    return <div id="itemDetailContainer">
        <div id="itemDetailImgContainer">
            <img id="itemDetailImage" src={product.imageUrl} alt={product.description} />
        </div>

        <div id="itemDetails">
            <h2>{product.name}</h2>
            <p>{product.category}</p>
            <p>{"Color primario: " + product.color}</p>
            <p>{product.stock === 0 ? "Stock: Sin stock": "Stock: " + product.stock}</p>
            <p>{"Precio: USD " + product.price}</p>

            {/*Intercambiabilidad que controla que se muestra*/}
            {onAddClicked ?
                <div>
                    {/*Botón para volver al listado y seguir comprando*/}
                    <Link to="/">
                        <button className="col-6 btn btn-outline-dark">Seguir comprando</button>
                    </Link>
                    {/*Botón que lleva al carrito para finalizar compra*/}
                    <Link to="/cart">
                        <button className="col-6 btn btn-outline-dark">Terminar compra</button> 
                    </Link>
                </div>
            :
                <ItemCount initial={(product.stock === 0) || (maximum === 0) ? 0:1} maximum={maximum} onAdd={handleAdd}/>
            }

        </div>
    </div>
}

export default ItemDetail;
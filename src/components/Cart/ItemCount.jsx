import { useState } from "react";


const ItemCount = ({productName, initial, stock})=>{
    const [count, setCount] = useState(initial);

    //Función para cambiar la clase de un botón dependiendo si se cumple o no la condición.
    const activeValidation = (condition) => {
        return condition ? "col-2 btn btn-outline-danger disabled": "col-2 btn btn-outline-danger";
    }

    //Funciónque desata la alerta con la cantidad de productos agregados.
    const onAdd = ()=>{
        alert("Se agregan al carrito " + count + " unidades de " + productName);
    }

    return (
        <div className="container" style={{display:"flex", justifyContent:"center"}}>
            <div className="row justify-content-center border border-danger rounded p-3" style={{width:"25%"}}>
                <div id="productNameContainer">
                    <h3>{productName}</h3>
                    <p>Stock = {stock}</p>
                </div>
                <div className="row p-2">
                    {/*Botón que resta al contador, se desactiva si la cantidad actual es menor igual a la cantidad inicial*/}
                    <button onClick={() => setCount(count - 1)} className={activeValidation(count<=initial)}>-</button>
                    <span className="col-8">{count}</span>
                    {/*Botón que resta al contador, se desactiva si la cantidad actual es mayor igual al stock*/}
                    <button onClick={() => setCount(count + 1)} className={activeValidation(count>=stock)}>+</button>
                </div>
                <div>
                    {/*Botón que resta al contador, se desactiva si no hay stock o si la cantidad actual es menor o igual a 0*/}
                    <button onClick={onAdd} className={"col-12" + activeValidation(stock<=0 || count<=0)}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    );
}

export default ItemCount;
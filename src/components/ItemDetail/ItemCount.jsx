import { useState } from "react";


const ItemCount = ({initial, stock, onAdd})=>{
    const [count, setCount] = useState(initial);

    //Función para cambiar la clase de un botón dependiendo si se cumple o no la condición.
    const activeValidation = (condition) => {
        return condition ? "col-2 btn btn-outline-secondary disabled": "col-2 btn btn-outline-dark";
    }


    return (
        <div className="container" style={{display:"flex", justifyContent:"center", marginBottom: 15}}>
            <div className="row justify-content-center border border-dark rounded p-3">
                <div className="row p-2">
                    {/*Botón que resta al contador, se desactiva si la cantidad actual es menor igual a la cantidad inicial*/}
                    <button onClick={() => setCount(count - 1)} className={activeValidation(count<=initial)}>-</button>
                    <span className="col-8 text-center">{count}</span>
                    {/*Botón que resta al contador, se desactiva si la cantidad actual es mayor igual al stock*/}
                    <button onClick={() => setCount(count + 1)} className={activeValidation(count>=stock)}>+</button>
                </div>
                <div>
                    {/*Botón que resta al contador, se desactiva si no hay stock o si la cantidad actual es menor o igual a 0*/}
                    <button onClick={() => onAdd(count)} className={"col-12 " + activeValidation(stock<=0 || count<=0)}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    );
}

export default ItemCount;
import { useState } from "react";



const ItemCount = ({initial, maximum, onAdd})=>{
    const [count, setCount] = useState(initial);

    return (
        <div className="container" style={{display:"flex", justifyContent:"center", marginBottom: 15}}>
            <div className="row justify-content-center border border-dark rounded p-3">
                <div className="row p-2">
                    {/*Botón que resta al contador, se desactiva si la cantidad actual es menor igual a la cantidad inicial*/}
                    <button onClick={() => setCount(count - 1)} className={count<=initial ? "col-2 btn btn-outline-secondary disabled":"col-2 btn btn-outline-dark"}>-</button>
                    <span className="col-8 text-center">{count}</span>
                    {/*Botón que resta al contador, se desactiva si la cantidad actual es mayor igual al stock*/}
                    <button onClick={() => setCount(count + 1)} className={count>=maximum ? "col-2 btn btn-outline-secondary disabled":"col-2 btn btn-outline-dark"}>+</button>
                </div>
                <div>
                    {/*Botón que resta al contador, se desactiva si no hay stock o si la cantidad actual es menor o igual a 0*/}
                    <button onClick={() => onAdd(count)} className={(maximum<=0 || count<=0) ? "col-12 btn btn-outline-secondary disabled":"col-12 btn btn-outline-dark"}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    );
}


export default ItemCount;
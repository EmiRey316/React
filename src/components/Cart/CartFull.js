import { useContext } from "react";

import { cartContext } from "../../context/cartContext";

import deleteIcon from "../../multimedia/delete.png";




const CartFull = ()=>{

    const { cartList, deleteItem, clearCart } = useContext(cartContext);

    let totalPayment = 0;
    cartList.forEach(item => {
        totalPayment = totalPayment + (item.price * item.amount);
    });


    return <div className="container">
        <h1 className="text-center">Carrito de compras</h1>
        <span>
            <button className="btn btn-danger" onClick={clearCart}>Limpiar carrito</button>
        </span>

        {/*Contenedor con la tabla que muestra el listado de productos en el carrito*/}
        <div className="table-responsive container-fluid">
            <table id="cartTable" className="table text-center table-hover">
                <thead id="cartTableHead">
                    <tr>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Imagen</th>
                        <th scope="col">Producto</th>
                        <th scope="col">Total</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>

                <tbody id="cartTableBody">

                    {cartList.map(item => <tr key={"item" + item.id + "row"}>
                        <td><div>{item.amount}</div></td>
                        <td><div><img src={item.image} alt={item.imageDescription}></img></div></td>
                        <td><div>{item.name}</div></td>
                        <td><div>{item.price * item.amount}</div></td>
                        <td><div className="buttonsCell">
                            <button className="btn btn-danger" onClick={()=>deleteItem(item.id)}>
                                <img src={deleteIcon} alt="Delete button"/>
                            </button>
                        </div></td>
                    </tr>)}

                    {/*Última fila de la tabla con el total a pagar y el botón para pagar*/}
                    <tr>
                        <td></td>
                        <td></td>
                        <td><div>Total a Pagar</div></td>
                        <td>{totalPayment}</td>
                        <td>
                            <button type="button" className="btn btn-success">Pagar</button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>
}

export default CartFull;
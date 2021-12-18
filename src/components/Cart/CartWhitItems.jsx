import { useContext } from "react";
import { Link } from "react-router-dom";

import { cartContext } from "../../context/cartContext";

import deleteIcon from "../../multimedia/delete.png";



const CartWithItems = ()=>{
    const { cartList, deleteItem, clearCart, totalPayment } = useContext(cartContext);

    return <div className="container">
        <h1 className="text-center mb-4">Carrito de compras</h1>      

        {/*Contenedor con la tabla que muestra el listado de productos en el carrito*/}
        <div className="table-responsive container-fluid">
            <table id="cartTable" className="table text-center table-hover align-middle">
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
                        <td><div><img src={item.imageUrl} alt={item.description} className="productImg"></img></div></td>
                        <td><div>{item.name}</div></td>
                        <td><div>{item.price * item.amount}</div></td>
                        <td><div className="buttonsCell">
                            <button className="btn btn-danger" onClick={()=>deleteItem(item.id)}>
                                <img src={deleteIcon} alt="Delete button"/>
                            </button>
                        </div></td>
                    </tr>)}

                    {/*Última fila de la tabla con el total a pagar, el botón para pagar y para limpiar el carrito*/}
                    <tr>
                        <td>
                            <button className="btn btn-danger" onClick={clearCart}>Limpiar carrito</button>
                        </td>
                        <td></td>
                        <td><div><strong>Total a Pagar</strong></div></td>
                        <td><div><strong>{totalPayment}</strong></div></td>
                        <td><div className="buttonsCell">
                            <Link to="/Checkout">
                                <button type="button" className="btn btn-success">Pagar</button>
                            </Link>
                        </div></td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>
}


export default CartWithItems;
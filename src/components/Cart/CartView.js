import { useContext } from "react";

import { cartContext } from "../../context/cartContext";
import CartEmpty from "./CartEmpty";
import CartFull from "./CartFull";

import "./Cart.css";



const CartView = ()=> {
    const { cartList } = useContext(cartContext);

    //Return con render condicional dependiendo si el carrito está vacío o tiene artículos dentro.
    return (<div>

        {cartList.length === 0 ?

            <CartEmpty />

        :

            <CartFull />

        }
    </div>);
}


export default CartView;
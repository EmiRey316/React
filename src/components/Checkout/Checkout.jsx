import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

import BuyerForm from "./BuyerForm";
import Order from "./Order";
import CartEmpty from "../Cart/CartEmpty";

import "./Checkout.css"



const Checkout = ()=>{
    const { cartList, totalPayment, clearCart } = useContext(cartContext);


    return <div>
        <h1>Checkout de compra</h1>

        {/*Comprobación por si se entra a la ruta directamente */}
        {cartList.length === 0 ?

            <CartEmpty />

        :
            <div id="checkoutContainer">
                <Order cartList={cartList} />

                <BuyerForm cartList={cartList} totalPayment={totalPayment} clearCart={clearCart}/>
            </div>
        }

    </div>
}

export default Checkout;
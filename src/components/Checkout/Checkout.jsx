import { useContext, useState } from "react";
import { cartContext } from "../../context/cartContext";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import { getFirestore } from "../../service/getFirestore.js";

import Order from "./Order";
import BuyerForm from "./BuyerForm";
import CartEmpty from "../Cart/CartEmpty";
import Success from "./Success";

import "./Checkout.css"



const Checkout = ()=>{
    const { cartList, totalPayment, clearCart } = useContext(cartContext);
    const [success, setSuccess] = useState(false)
    const [orderId, setOrderId] = useState("")


    //Función que genera la orden, la carga en Firestore y marca el final del proceso de compra.
    const generateOrder = (buyer)=>{

        const itemList = cartList.map(item => {
            return {
                id:item.id,
                title:item.name,
                price:item.price,
                amount:item.amount
            }
        })

        const order = {
            buyer: buyer,
            itemList: itemList,
            totalPayment: totalPayment,
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }

        const dbQuery = getFirestore();

        dbQuery.collection("orders").add(order)
            .then(resp => setOrderId(resp.id))
            .catch(error => console.log("No se pudo completar el proceso de compra " + error))
            .finally(setSuccess(true))

        console.log(order);
    }


    //Función que actualiza el stock de los items en Firestore dependiendo de la compra.
    const updateStock = ()=>{
        const dbQuery = getFirestore();

        const itemsToUpdate = dbQuery.collection('itemList').where(
            firebase.firestore.FieldPath.documentId() , 'in', cartList.map(item=> item.id)
        )
        
        const batch = dbQuery.batch();
            
        //Se actualiza el stock de Firestore con los items comprados.
        itemsToUpdate.get()
            .then( resp=>{
                resp.docs.forEach(doc => {
                    batch.update(doc.ref,
                        {stock: doc.data().stock - cartList.find(item => item.id === doc.id).amount}
                    )
                })
        
                //Commit final del batch.
                batch.commit().then(resp => resp)
            })
    }


    //Función que se activa cuando se hace el Submit del form y desata las otras funciones.
    const handleSuccess = (buyer)=>{
        generateOrder(buyer);
        updateStock();
        clearCart();
    }


    return <div>
        <h1 className="text-center mb-4">Checkout de compra</h1>

        {success ?

            <Success orderId={orderId} />

        :

            <div>
                {/*Comprobación por si se entra a la ruta directamente */}
                {cartList.length === 0 ?
                    <CartEmpty />
                :
                    <div id="checkoutContainer">
                        <Order cartList={cartList} totalPayment={totalPayment} />
                        <BuyerForm onSuccess={handleSuccess} />
                    </div>
                }
            </div>
            
        }

    </div>
}

export default Checkout;
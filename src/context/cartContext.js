import { createContext, useState } from "react";

export const cartContext = createContext([]);

const CartContextProvider = ({children})=>{
    const [cartList, setCartList] = useState([])


    //Función para identificar si un artículo ya se encuentra incluido en el carrito.
    const isInCart = (item) => {
        return cartList.some(product => product.id === item.id)
    }


    //Función que agrega el item indicado al carrito.
    const addToCart = (item, amount) => {
        if (isInCart(item)) {
            let position = cartList.findIndex(e => e.id === item.id);
            let newCartList = cartList;
            newCartList[position].amount += amount;
            setCartList(newCartList);
        } else {
            setCartList([...cartList, {...item, amount}]);
        }
    }



    //Función un artículo concreto del carrito.
    const deleteItem = (itemId) => {
        const newCartList = cartList.filter((item) => item.id !== itemId);
        setCartList(newCartList);
    }


    //Función para limpiar todo el listado de items del carrito.
    const clearCart = ()=>{
        setCartList([])
    }


    let totalPayment = 0;
    cartList.forEach(item => {
        totalPayment = totalPayment + (item.price * item.amount);
    });
    

    return (
        <cartContext.Provider value={{
            cartList,
            addToCart,
            deleteItem,
            clearCart,
            totalPayment
        }}>
            { children }
        </cartContext.Provider>
    )
}

export default CartContextProvider;
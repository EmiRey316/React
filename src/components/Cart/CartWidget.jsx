import { useContext } from 'react';

import { cartContext } from '../../context/cartContext';

import cart from '../../multimedia/cart.png';



const CartWidget = ()=>{
    const { cartList } = useContext(cartContext)

    const totalAmount = cartList.reduce(
        (total, item) => {return total + item.amount}, 0
    );


    return (
        <div className="container-fluid m-0 p-0 position-relative">
            <img src={cart} alt="Shopping Cart" />
            {/*Componente que solo se muestra si hay items en el carrito*/}
            {totalAmount !== 0 && <span className="badge bg-secondary position-absolute top-100 start-100 translate-middle rounded-circle">{totalAmount}</span>}
        </div>
    );
}

export default CartWidget;
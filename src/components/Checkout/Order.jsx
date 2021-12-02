const Order = ({cartList})=>{
    return <div id="orderContainer">
        <h2>Resumen</h2>
        <ul>
            {cartList.map(item => <li key={"item" + item.id + "row"}>
            {item.amount} x {item.name} <strong className="text-right">{item.amount * item.price}</strong>
            </li>)}
        </ul>
        
    </div>
}

export default Order;
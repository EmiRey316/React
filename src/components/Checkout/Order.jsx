const Order = ({cartList, totalPayment})=>{
    return <div id="orderContainer">
        <h2>Resumen</h2>
        
        <ul>
            {cartList.map(item => <li key={"item" + item.id + "row"}>
                <div className="orderLine">
                    <span>{item.amount} x {item.name} </span>
                    <strong>USD {item.amount * item.price}</strong>
                </div> 
            </li>)}
        </ul>
        
        <div id="totalPayment">
            <span>Total: </span>
            <strong>USD {totalPayment}</strong>
        </div>
        
    </div>
}

export default Order;
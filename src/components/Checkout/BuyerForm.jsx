import { getFirestore } from "../../service/getFirestore.js";

const BuyerForm = ({cartList, totalPayment, clearCart})=>{

    const buyer = {
        name: "Emiliano",
        tel: 999999,
        email: "prueba@prueba.com"
    }

    const generateOrder = (e)=>{
        e.preventDefault();

        const order = {
            buyer: buyer,
            items: cartList,
            totalPayment: totalPayment
        }

        const dbQuery = getFirestore();

        dbQuery.collection("orders").add(order)
            .then(resp => alert("Compra realizada, número de orden: " + resp.id))
            .then(clearCart)
    }

    return <div id="buyerFormContainer">
        <form id="buyerForm" onSubmit={generateOrder}>

            <h2>Datos de contacto</h2>

            <label htmlFor="nameInput" className="form-label">Nombre:</label>
            <input type="text" id="nameInput"></input>

            <label htmlFor="telInput" className="form-label">Teléfono:</label>
            <input type="tel" id="telInput"></input>

            <label htmlFor="emailInput" className="form-label">Email:</label>
            <input type="email" id="emailInput"></input>

            <button className="submit btn btn-primary">Comprar</button>
        </form>
    </div>
}

export default BuyerForm;
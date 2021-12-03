

const BuyerForm = ({ onSuccess })=>{

    const buyer = {
        name: "Emiliano",
        phone: 999999,
        email: "prueba@prueba.com"
    }

    

    return <div id="buyerFormContainer">
        <form id="buyerForm" onSubmit={() => onSuccess(buyer)}>

            <h2>Datos de contacto</h2>

            <label htmlFor="nameInput" className="form-label">Nombre:</label>
            <input type="text" id="nameInput"></input>

            <label htmlFor="phoneInput" className="form-label">Teléfono:</label>
            <input type="tel" id="phoneInput"></input>

            <label htmlFor="emailInput" className="form-label">Email:</label>
            <input type="email" id="emailInput"></input>

            <button className="submit btn btn-primary">Comprar</button>
        </form>
    </div>
}

export default BuyerForm;
import { useState } from "react";

const BuyerForm = ({ onSuccess })=>{
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [emailCheck, setEmailCheck] = useState("");

    const buyer = {
        name: name,
        phone: phone,
        email: email
    }


    //Validación para verificar que todos los campos esten completos y que los emails sean iguales.
    const validateForm = (
        !((name.length &&
        phone.length &&
        email.length &&
        emailCheck.length) > 0 &&
        email === emailCheck
        )        
    )


    return <div id="buyerFormContainer">
        <form id="buyerForm" onSubmit={() => onSuccess(buyer)} autoComplete="off">

            <h2>Datos de contacto</h2>

            <label htmlFor="nameInput" className="form-label" >Nombre:</label>
            <input type="text" id="nameInput" placeholder="Peter Parker" required
                onInput={(e) => setName(e.target.value)}>
            </input>

            <label htmlFor="phoneInput" className="form-label">Teléfono:</label>
            <input type="tel" id="phoneInput" placeholder="123456789" required
                onInput={(e) => setPhone(e.target.value)}>
            </input>

            <label htmlFor="emailInput" className="form-label">Email:</label>
            <input type="email" id="emailInput" placeholder="ejemplo@mail.com" required
                onInput={(e) => setEmail(e.target.value)}>
            </input>

            <label htmlFor="emailCheck" className="form-label">Repetir email:</label>
            <input type="email" id="emailCheck" placeholder="ejemplo@mail.com" required
                onInput={(e) => setEmailCheck(e.target.value)}>
            </input>

            <button className="submit btn btn-primary" disabled={validateForm}>Realizar compra</button>
            <small id="formHelp" class="form-text text-muted">
                Debe completar todos los campos correctamente para continuar
            </small>
        </form>
    </div>
}

export default BuyerForm;
const CartModal = ({modalID})=> {
    return (
        <div className="modal fade" id={modalID} tabindex="-1" aria-labelledby="cartModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    <h3>Vacío</h3>
                    <p>Aquí se mostrarán los productos del carrito</p>
                </div>
            </div>
        </div>
    );
}


export default CartModal;
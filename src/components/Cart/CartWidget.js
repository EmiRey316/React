import cart from '../../multimedia/cart.png';

const CartWidget = ()=>{
    return (
        <div className="container-fluid m-0 p-0 position-relative" data-bs-toggle="modal" data-bs-target="#cartModal">
            <img src={cart} alt="Shopping Cart" />
            <span className="badge bg-secondary position-absolute top-100 start-100 translate-middle rounded-circle">0</span>
        </div>
    );
}

export default CartWidget;
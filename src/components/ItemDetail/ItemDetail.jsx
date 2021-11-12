import "./ItemDetail.css";

const ItemDetail = ({product})=>{
    console.log(product);
    return <div id="itemDetailContainer">
        <div id="itemDetailImgContainer">
            <img id="itemDetailImage" src={product.image} alt={product.imageDescription} />
        </div>
        <div id="itemDetails">
            <h2>{product.name}</h2>
            <p>{product.category}</p>
            <p>{"Color: " + product.color}</p>
            <p>{"Stock: " + product.stock}</p>
            <p>{"Precio: USD " + product.price}</p>
        </div>
    </div>
}

export default ItemDetail;
import "./ItemDetail.css";
import ItemCount from "./ItemCount.jsx";


const ItemDetail = ({product})=>{
    console.log(product);
    return <div id="itemDetailContainer">
        <div id="itemDetailImgContainer">
            <img id="itemDetailImage" src={product.image} alt={product.imageDescription} />
        </div>
        <div id="itemDetails">
            <h2>{product.name}</h2>
            <p>{product.category}</p>
            <p>{"Color primario: " + product.color}</p>
            <p>{product.stock === 0 ? "Stock: Sin stock": "Stock: " + product.stock}</p>
            <p>{"Precio: USD " + product.price}</p>
            <ItemCount initial={0} stock={product.stock}/>
        </div>
    </div>
}

export default ItemDetail;
import ItemCount from "../Cart/ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = ({message})=>{
    return (
        <div className="main text-center">
            <h1>{message}</h1>

            <ItemList />

            <ItemCount productName="Producto" initial={0} stock={5}/>
            
        </div>
    );
}

export default ItemListContainer;
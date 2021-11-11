import ItemCount from "../Cart/ItemCount";
import ItemDetailContainer from "../ItemDetail/ItemDetailContainer";
import ItemList from "./ItemList";

const ItemListContainer = ({message})=>{
    return (
        <div className="main text-center">
            <h1>{message}</h1>

            <ItemList />

            <ItemCount productName="Producto" initial={0} stock={5}/>

            <ItemDetailContainer />
            
        </div>
    );
}

export default ItemListContainer;
import ItemCount from "../Cart/ItemCount";

const ItemListContainer = ({message})=>{
    return (
        <div className="main text-center">
            <h1>{message}</h1>

            <ItemCount productName="Producto" initial={0} stock={5}/>
        </div>
    );
}

export default ItemListContainer;
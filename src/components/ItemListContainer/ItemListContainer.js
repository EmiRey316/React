import ItemList from "./ItemList";

const ItemListContainer = ({message, productsList})=>{
    return (
        <div className="main text-center">
            <h1>{message}</h1>

            <ItemList productsList={productsList}/>
            
        </div>
    );
}

export default ItemListContainer;
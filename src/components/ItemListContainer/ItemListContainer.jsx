import ItemList from "./ItemList";


const ItemListContainer = ({message})=>{
    return (
        <div className="main text-center">
        
            <h1 className="mb-4">{message}</h1>

            <ItemList/>
            
        </div>
    );
}

export default ItemListContainer;
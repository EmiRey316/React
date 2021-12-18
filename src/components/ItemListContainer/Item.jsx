import {Link} from 'react-router-dom';

import "./Items.css";


const Item = ({item})=>{

    return <div id="itemContainer" className="border border-dark rounded card text-center animate__animated animate__zoomIn">
        <div id="itemTitleContainer" className="card-header">
            <h4>{item.name}</h4>
        </div>
        <div id="itemImageContainer" className="card-body">
            <img className="card-img my-auto" src={item.imageUrl} alt={item.description} />
            <div>
                {item.stock === 0 &&
                    <p className="card-text bg-danger rounded">Sin stock</p>}  
            </div>
        </div>
        <div id="itemDescriptionContainer" className="card-footer">
            <p>{"USD " + item.price}</p>
            <Link to={"/item/" + item.id}>
                <button className="btn btn-secondary">Ver producto</button>
            </Link>
        </div>
    </div>
}


export default Item;
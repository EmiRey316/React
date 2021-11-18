import {Link} from 'react-router-dom';

import "./Items.css";


const Item = ({productId, productName, imgLink, price})=>{

    return <div id="itemContainer" className="border border-dark rounded card text-center">
        <div id="itemTitleContainer" className="card-header">
            <h4>{productName}</h4>
        </div>
        <div id="itemImageContainer" className="card-body">
            <img className="card-img" src={imgLink} alt="" />
        </div>
        <div id="itemDescriptionContainer" className="card-footer">
            <p>{price}</p>
            <Link to={"/item/" + productId}>
                <button className="btn btn-secondary">Detalles</button>
            </Link>
        </div>
    </div>
}


export default Item;
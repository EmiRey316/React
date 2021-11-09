import "./Items.css";


const Item = ({productName, imgLink, price})=>{

    return <div id="itemContainer" className="border border-dark rounded card text-center">
        <div id="itemTitleContainer" className="card-header">
            <h4>{productName}</h4>
        </div>
        <div id="itemImageContainer" className="card-body">
            <img className="card-img" src={imgLink} alt="" />
        </div>
        <div id="itemDescriptionContainer" className="card-footer">
            <p>{price}</p>
            <button className="btn btn-secondary">Detalles</button>
        </div>
    </div>
}


export default Item;
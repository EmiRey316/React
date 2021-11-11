import "./ItemDetail.css";

const ItemDetail = ({product})=>{
    console.log(product);
    return <div id="itemDetailContainer">
        <div id="itemDetailImgContainer">
            <img id="itemDetailImage" src="https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_2772000/altimages/ff_2772188alt1_full.jpg&w=900" alt="Jersey de Steelers negra" />
        </div>
        <div id="itemDetails">
            <h2>Jersey negra</h2>
            <p>Jersey's</p>
            <p>Color: Negro</p>
            <p>Stock: 15</p>
            <p>Precio: USD 120</p>
        </div>
    </div>
}

export default ItemDetail;
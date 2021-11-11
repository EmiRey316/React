import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

const exampleItem = {
    id: 1, 
    name: "Jersey negra", 
    category: "Jerseys",
    color: "Negro",
    stock: 15, 
    price: 120, 
    image: "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_2772000/altimages/ff_2772188alt1_full.jpg&w=900",
    imageDescription: "Jersey de Steelers negra"
}


const getItem = new Promise((resolve, reject)=>{
    const condition = true;

    if(condition) {
        setTimeout(()=>{
            resolve(exampleItem);
        }, 2000)
    } else {
        setTimeout(()=>{
            reject("404: Página no encontrada");
        }, 4000)
    }
})


const ItemDetailContainer = ()=>{
    const [item, setItem] = useState();

    useEffect(()=>{
        getItem.then(resolve => {
            setItem(resolve);
        })
        .catch(error => {
            console.log(error);
        })
    }, [])
    
    return <div className="modal fade" id="detailsModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-xl">
            <div className="modal-content">
                <div className="modal-body">
                    <ItemDetail product={item}/>
                </div>
            </div>
        </div>
    </div>
}

export default ItemDetailContainer;
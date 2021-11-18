import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import ItemDetail from "./ItemDetail";



const ItemDetailContainer = ({productsList})=>{
    const [item, setItem] = useState({});
    const { id } = useParams();


    const getItem = new Promise((resolve, reject)=>{
        const condition = true;

        if(condition) {
            setTimeout(()=>{
                resolve(productsList);
            }, 2000)
        } else {
            setTimeout(()=>{
                reject("404: Página no encontrada");
            }, 4000)
        }
    })


    useEffect(()=>{
        getItem.then(resolve => {
            setItem(resolve[id - 1]);
        })
        .catch(error => {
            console.log(error);
        })
    }, [])

    
    
    return <div className="container">
        <ItemDetail product={item}/>
    </div>
}

export default ItemDetailContainer;
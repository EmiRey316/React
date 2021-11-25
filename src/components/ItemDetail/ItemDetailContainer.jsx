import { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import { itemListContext } from "../../context/itemListContext";
import Loader from "../BasicComponents/Loader";

import ItemDetail from "./ItemDetail";



const ItemDetailContainer = ()=>{
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const itemList = useContext(itemListContext);

    const getItem = new Promise((resolve, reject)=>{
        const condition = true;

        if(condition) {
            setTimeout(()=>{
                resolve(itemList);
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
        .finally(()=>setLoading(false))
    }, [])

    
    
    return <div className="container">
        {loading ? <Loader />:<ItemDetail product={item}/>}
    </div>
}

export default ItemDetailContainer;
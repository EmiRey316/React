import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getFirestore } from "../../service/getFirestore";

import Loader from "../BasicComponents/Loader";

import ItemDetail from "./ItemDetail";
import ItemNotFound from "./ItemNotFound";



const ItemDetailContainer = ()=>{
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();


    useEffect(()=>{
        const dbQuery = getFirestore();

        dbQuery.collection("itemList").doc(id).get()
            .then(resp => setItem({id:resp.id, ...resp.data()}))
                
            .catch(error => console.log("Error en la conexión con Firebase", error))

            .finally(() => setLoading(false))
    }, [id])


    return <div className="container">
        {loading ?

            <Loader />

        :

            <div>
                {Object.keys(item).length <= 1 ?
                    <ItemNotFound />
                :
                    <ItemDetail product={item}/>
                }
            </div>
            
        }
    </div>
}


export default ItemDetailContainer;
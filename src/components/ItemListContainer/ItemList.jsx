import { getFirestore } from "../../service/getFirestore";
import { useState, useEffect, memo } from "react";
import {useParams} from 'react-router-dom';

import Loader from "../BasicComponents/Loader";
import Item from "./Item";

import "./Items.css";



const ItemList = memo(()=>{
    const [itemList, setItemList] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();


    useEffect(()=>{

        const db = getFirestore()

        const dbQuery = categoryId ? db.collection("itemList").where("category", "==", categoryId) : db.collection("itemList");
        
        dbQuery.get()
            .then(resp => setItemList(resp.docs.map(doc => ({id:doc.id, ...doc.data()}))))
            
            .catch(error => console.log("Error en la conexión con Firebase", error))
            
            .finally(() => setLoading(false))

    }, [categoryId])


    return <div>
        {loading ?
            <Loader />
        :
            <div id="itemListContainer">
                {itemList.map(item => <Item
                    item = {item}
                    key={item.id}
                />)}
            </div>
        }
    </div>
    
})


export default ItemList;
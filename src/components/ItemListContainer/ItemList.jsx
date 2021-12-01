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

        const dbQuery = getFirestore()

        //Dejo la condición antes del llamado para que traiga menos datos en caso de ser una categoría.
        if(categoryId) {
            dbQuery.collection("itemList").where("category", "==", categoryId).get()
            .then(resp => setItemList(resp.docs.map(doc => doc.data())))
            
            .catch(error => 
                console.log("Error en la conexión con Firebase", error))

            .finally(() => 
                setLoading(false))
        } else {
            dbQuery.collection("itemList").orderBy("name").get()
            .then(resp => setItemList(resp.docs.map(doc => ({id:doc.id, ...doc.data()}))))
            
            .catch(error => 
                console.log("Error en la conexión con Firebase", error))

            .finally(() => 
                setLoading(false))
        }

    }, [categoryId])
    


    return <div>
        {loading ?
            <Loader />
        :
            <div id="itemListContainer">
                {itemList.map(item => <Item
                    productId={item.id}
                    productName={item.name}
                    imgLink={item.imageUrl}
                    price={"USD " + item.price}
                    description={item.description}
                    key={item.id}
                />)}
            </div>
        }
    </div>
    
})

export default ItemList;
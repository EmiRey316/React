import { getFirestore } from "../../service/getFirestore";
import { useState, useEffect, useContext, memo } from "react";
import {useParams} from 'react-router-dom';

import { itemListContext } from "../../context/itemListContext";
import Loader from "../BasicComponents/Loader";
import Item from "./Item";

import "./Items.css";



const ItemList = memo(()=>{
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();
    const productsList = useContext(itemListContext);


    useEffect(()=>{

        const dbQuery = getFirestore()

        dbQuery.collection("itemList").get()
            .then(data => setItems(data.docs()))
            .catch()
            .finally(()=>setLoading(false))


    }, [categoryId])


    return <div>
        {loading ?
            <Loader />
        :
            <div id="itemListContainer">
                {items.map(item => <Item
                    productId={item.id}
                    productName={item.name}
                    imgLink={item.image}
                    price={"USD " + item.price}
                    key={item.id}
                />)}
            </div>
        }
    </div>
    
})

export default ItemList;
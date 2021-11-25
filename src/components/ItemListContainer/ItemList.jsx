import { useState, useEffect, useContext, memo } from "react";
import {useParams} from 'react-router-dom';

import { itemListContext } from "../../context/itemListContext";
import Loader from "../BasicComponents/Loader";
import Item from "./Item";

import "./Items.css";



const ItemList = memo(()=>{
    const [itemList, setItemList] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();
    const productsList = useContext(itemListContext);


    const getFetch = new Promise((resolve, reject)=>{
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

        if (categoryId) {
            getFetch.then(resolve => {
                setItemList(resolve.filter(item => item.category === categoryId));
            })
            .catch(error => {
                console.log(error);
            })
            .finally(()=>setLoading(false))
        } else {
            getFetch.then(resolve => {
                setItemList(resolve);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(()=>setLoading(false))
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
                    imgLink={item.image}
                    price={"USD " + item.price}
                    key={item.id}
                />)}
            </div>
        }
    </div>
    
})

export default ItemList;
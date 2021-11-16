import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';

import Item from "./Item";

import "./Items.css";



const ItemList = ({productsList})=>{
    const [itemList, setItemList] = useState([]);
    const { id } = useParams();


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
    console.log(itemList)


    useEffect(()=>{

        if (id) {
            getFetch.then(resolve => {
                setItemList(resolve.filter(item => item.category === id));
            })
            .catch(error => {
                console.log(error);
            })
        } else {
            getFetch.then(resolve => {
                setItemList(resolve);
            })
            .catch(error => {
                console.log(error);
            })
        }

    }, [id])


    return <div id="itemListContainer">
        {itemList.map(item => <Item productId={item.id} productName={item.name} imgLink={item.image} price={"USD " + item.price} key={item.id}/>)}
    </div>
}

export default ItemList;
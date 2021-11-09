import { useState, useEffect } from "react";
import Item from "./Item";
import "./Items.css";

let productList = [
    {id: 1, name: "Jersey negra", category: "Jerseys", stock: 15, price: 120, image: "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_2772000/altimages/ff_2772188alt1_full.jpg&w=900"},
    {id: 2, name: "Jersey blanca", category: "Jerseys", stock: 5, price: 120, image: "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_2906000/altimages/ff_2906880alt1_full.jpg&w=900"},
    {id: 3, name: "Jersey oro", category: "Jerseys", stock: 2, price: 90, image: "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_4133000/altimages/ff_4133507-bdf5a6ee75b9da820924alt1_full.jpg&w=900"}
];

const getFetch = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(productList);
    }, 2000)
})

const ItemList = ()=>{
    const [itemList, setItemList] = useState([]);

    useEffect(()=>{
        getFetch.then(resolve => {
            setItemList(resolve);
        })
        .catch(error => {
            console.log(error);

        })
    }, [])

    return <div id="itemListContainer">
        {itemList.map(item => <Item productName={item.name} imgLink={item.image} price={"USD " + item.price} key={item.id}/>)}
    </div>
}

export default ItemList;
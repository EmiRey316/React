import { getFirestore } from "../../service/getFirestore";
import { useState, useEffect } from "react";

import Loader from "../BasicComponents/Loader";
import Item from "./Item";

import "./Items.css";



const DiscountItems = ()=>{
    const [itemList, setItemList] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        const dbQuery = getFirestore()

        dbQuery.collection("itemList").orderBy("price").limit(3).get()
        .then(resp => setItemList(resp.docs.map(doc => ({id:doc.id, ...doc.data()}))))
            
        .catch(error => console.log("Error en la conexión con Firebase", error))

        .finally(() => setLoading(false))
        
    },)
    


    return <div className="text-center">
        <h1 className="mb-4">Los productos más baratos</h1>
        <div>
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
    </div>
    
}

export default DiscountItems;
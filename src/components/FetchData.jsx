import { useCallback, useState } from "react";


const CartTable =  () => {
    const [data, setDate] = useState([]);
    const getAllCartItems = useCallback(async () => {
        const url = "https://dummyjson.com/carts";
        const response = await fetch(url, {
            method: "GET"
        })
    
        if (response.ok){
            const res = await  response.json();
            setDate(res.carts)
        }
        
    }, []);
    getAllCartItems()
    console.log("Cart Details ---> ", data)

    

}
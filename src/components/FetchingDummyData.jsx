import axios from "axios";
import { useCallback, useState } from "react";

export default function FetchingDummyData() {
    const [data, setData] = useState([])

    const fetchData = useCallback(async () =>{
        try{
            const response = await axios.get("https://dummyjson.com/users")
            if(response.status === 200){
                console.log(response.data.users[0])
            } 
        }catch{
            console.log("ERR :", Error)
        }
    }, []);


    return(
        <div>
            <button onClick={fetchData}>Clickkky</button>
        </div>
    )
}
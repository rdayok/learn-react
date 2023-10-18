import { useState } from "react"

export default function ChangeButtonColor(){
    const [counter, setCounter] = useState(0)

    const increaseCounter = () => {
        setCounter(1 + counter)
    }

    return(
        <div>
            <p>Counter value: {counter}</p>
            <button style={{backgroundColor: 
            (counter % 5 === 0)? "orange" : (counter % 2 === 0)? "green" : "red"}} onClick={increaseCounter}>Counter</button>
        </div>
        
    )
}

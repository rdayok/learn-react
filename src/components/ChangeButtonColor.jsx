import { useState } from "react"

export default function ChangeButtonColor(){
    const [counter, setCounter] = useState(0)
    const [buttoColor, setButtonColor] = useState()

    const increaseCounter = () => {
        setCounter(1 + counter)
        changeColor();
    }

    const changeColor = () => {
        if((counter + 1 ) % 5 === 0 ){
            setButtonColor("orange");
        }else if((counter + 1) % 2 === 0){
            setButtonColor("green");
        }else {
            setButtonColor("red")
        }
       
    }


    return(
        <div>
            <p>Counter value: {counter}</p>
            <button style={{backgroundColor: buttoColor}} onClick={increaseCounter}>Counter</button>
        </div>
        
    )
}

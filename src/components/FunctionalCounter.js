import { useState } from "react";

function FunctionalCounter(){
    // we can inintialize the value of counter by pass a value in the useState hook
    const [counter, setCounter] = useState(0);

    const increament = () =>{
        setCounter(counter + 1)
      }
          // with functional component we manage states using hook not like
    // class base components that have state
return <div>
    <div>Counter value: {counter}</div>
    <div>
        <button onClick={increament}>Click</button>
    </div>
</div>
}

export default FunctionalCounter;
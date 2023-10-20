import { useState } from "react";

// thsi is also a form using functional component just like i used class component in
// DataCapture.jsx

export default function Form (){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    }

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("lastname")
    }

    console.log(firstName, lastName)

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                onChange={handleFirstNameChange} 
                value={firstName}>

                </input>
                <input 
                type="text" 
                onChange={handleLastNameChange} 
                value={lastName}>
                </input>
                <button>Submit</button>
            </form>
        </div>
    )
}
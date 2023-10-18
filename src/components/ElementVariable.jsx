import { useState } from "react";

export default function ElementVariable (){
    const [display, setDisplay] = useState(false)
    return display? (
    <div>
        <p>This is my true displays</p>
    </div>) : (
    <div>
        <p>This is my false displays</p>
    </div>)
 }
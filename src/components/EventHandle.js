const EventHandle = () =>{
    function handleClick (){
        console.log("you clicked me")
    }
    return(
        <div>
            Functional Component Event Handling
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
 
export default EventHandle;


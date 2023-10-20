import { Route, Router } from "react-router-dom";

function App2 (){
    return(
        <Router>
            <Route exact path="/" Component={Home}/>
        </Router>
    )
}
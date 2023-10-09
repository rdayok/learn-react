import { Component } from "react";

 class Walk extends Component{
    render(){
        return <h3>
            This is a man walking down the {this.props.placeToWork}
        </h3>
    }
}

export default Walk; 
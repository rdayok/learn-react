import { Component } from "react";

class Counter extends Component{
    constructor(){
        super();
        this.state = {
            counter: 0,
        }
    }

    increament(){
        this.state.counter !== 30 ? this.setState({ counter: this.state.counter + 1 }) : this.setState({ counter: this.state.counter})
    }
    decreament(){
        if(this.state.counter !== 0){
            this.setState({
                counter: this.state.counter - 1
            })
        }
    }

    render(){
        return <div>
            <h2>Count value: {this.state.counter} </h2>
            <button onClick={() => this.increament()}>Increase</button>
            <button onClick={() => this.decreament()}>Decrease</button>
        </div> 
    }
}

export default Counter;
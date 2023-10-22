import { Component } from "react";

class DataCapture extends Component{
    state ={
         firstname: "",
         lastname: ""
    }
    

    handleFirstnameChange = (event) => {
        this.setState({
            firstname: event.target.value
        })
    }

    handleLastnameChange = (event) => {
        this.setState({
            lastname: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            First_Name: this.state.firstname, 
            Last_Name: this.state.lastname
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    Form
                    <input 
                    onChange={this.handleFirstnameChange} 
                    type="text" 
                    value={this.state.firstname}>
                    </input>

                    <input 
                    onChange={this.handleLastnameChange} 
                    type="text" 
                    value={this.state.lastname}>
                    </input>
                    <button>Submit</button>
                </form>
            </div>
        ) 
    }
     
}

export default DataCapture; 
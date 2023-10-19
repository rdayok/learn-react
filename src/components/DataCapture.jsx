import { Component } from "react";

class Form extends Component{
    state ={
         firstname: "",
         lastname: "",
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
        
    }

    render(){
        console.log(this.state.firstname, this.state.lastname)
        return(
            <div>Form
                <form onSubmit={this.handleSubmit}>
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

export default Form; 
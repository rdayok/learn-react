import { Component } from "react";

class Resume extends Component{
    render(){
        const { name } = this.props
        return <h3>This is the name passed to class component {name}</h3>
    }
}

export default Resume;
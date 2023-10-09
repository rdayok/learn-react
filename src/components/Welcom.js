

const Welcome = (props) =>{ 
    //destructuring objects states
    const {firstName, lastName} = props;
    return <h1>Name: {firstName} {lastName}</h1>
}

export default Welcome;
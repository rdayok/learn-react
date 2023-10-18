const product = [
    {title: "Spinach", isJunck: false, id: 1},
    {title: "Apple", isJunck: false, id: 2},
    {title: "Sweets", isJunck: true, id: 3},
    {title: "Bread", isJunck: true, id: 4},
    {title: "Garlic", isJunck: false, id: 5}
];

function Objectz(){
    const listOfItems = product.map(product => 
        <li
            key={product.id}
            style={{color: product.isJunck? "red" : "green"}}
        >
            {product.title}
        </li>
    );
    return(
        <ul style={{listStyle: "none", display: "flex", justifyContent: "space-around"}}>
            {listOfItems}
        </ul>
    )
} 

export default Objectz;
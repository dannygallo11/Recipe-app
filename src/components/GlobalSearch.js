import SearchBar from "./searchbar";
import React, { useState} from "react";

const GlobalSearch = () => {
    const [item, setItem] = useState()
    const [recipes, setRecipes] = useState([])

    const handleItem = (e) => {
        let value = e.target.value
        setItem(value)
        console.log('gloanl search component', item)
        console.log(recipes)
    }

    return <>
    <SearchBar handleItem={handleItem} item={item} setRecipes={setRecipes}/>
    <li>
       { recipes.map(obj => <div>{obj.title}</div>)}
    </li>
    </>
}





export default GlobalSearch
import SearchBar from "./searchbar";
import React, { useState } from "react";

const GlobalSearch = () => {
    
    const [item, setItem] = useState()
    const [recipes, setRecipes] = useState([])

    const handleItem = (e) => {
        let value = e.target.value
        setItem(value)
        // console.log('global search component', item)
        // console.log(recipes)
    }

    return <>
    <SearchBar handleItem={handleItem} item={item} setRecipes={setRecipes}/>
    { recipes.map((obj) => (
        <div>
        <div>{obj.title}</div>
        <img src={obj.image} alt="recipe"></img>
        </div>
    ))}
    </>
}


export default GlobalSearch;


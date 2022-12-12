import SearchBar from "./searchbar";
import React, { useState } from "react";

const GlobalSearch = () => {
    
    const [item, setItem] = useState()
    const [recipes, setRecipes] = useState([])

    const handleItem = (e) => {
        let value = e.target.value
        setItem(value)
        // console.log('gloanl search component', item)
        // console.log(recipes)
    }

    return <>
    <SearchBar handleItem={handleItem} item={item} setRecipes={setRecipes}/>
    {recipes.map((recipe) => (
        <div>
        <div>{recipe.title}</div>
        <img src={recipe.image} alt="recipe"></img>
        <p>{recipe.summary}</p>
        </div>
    ))}
    </>
};


export default GlobalSearch;


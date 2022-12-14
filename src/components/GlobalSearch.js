import SearchBar from "./searchbar";
import React, { useState } from "react";
import RecipeList from "./RecipeList";

const GlobalSearch = () => {
    
    const [item, setItem] = useState()
    const [recipes, setRecipes] = useState([])

    const handleItem = (e) => {
        let value = e.target.value
        setItem(value)
        // console.log('gloanl search component', item)
        // console.log(recipes.img)
    }

    return <>
    <SearchBar 
        handleItem={handleItem} 
        item={item} 
        setRecipes={setRecipes}
    />
    <RecipeList recipes={recipes}/>
    </>
};


export default GlobalSearch;


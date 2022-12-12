import React from "react";


function RecipeList({recipes}) {

    {recipes.map((recipe) => (
        <div>
        <div>{recipe.title}</div>
        <img src={recipe.image} alt="recipe"></img>
        <p>{recipe.readyInMinutes}</p>
        </div>
    ))}
};

export default RecipeList;
import React from "react";


function RecipeList({recipes}) {

    recipes.map((obj) => (
        <div>
        <div>{obj.title}</div>
        <img src={obj.image} alt="recipe"></img>
        <p>this is a recipe time</p>
        </div>
    ))
};

export default RecipeList;



import SearchBar from "../components/searchbar";
import React from "react";


var myHeaders = new Headers();
myHeaders.append("apikey", "dWtOcLMwKxX8LxlurntuLm4pLTD2bMwv");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

// function Search(){

//     // const getAPI = () => {
//     //     fetch("https://api.apilayer.com/spoonacular/recipes/complexSearch?query="+searched+"", requestOptions)
//     //     .then((response) => response.json())
//     //     .then((json) => console.log(json)); 
//     // }
//     return <SearchBar getAPI={getAPI}/>
// };

//export default Search


// function Search(){
//     const getAPI = () => {
//         fetch('https://jsonplaceholder.typicode.com/posts/')
//         .then((response) => response.json())
//         .then((json) => console.log(json));

// getting recipe title from api data
//var recipeTitle = results[0].title

//getting each equipment (will have to map through)
//var recipeEquipment = results[0].analyzedInstructions[0].steps[0].equipment[0].name
//results[0].analyzedInstructions[0].steps[0].equipment[1].name

// map through data for each steps
//var recipeSteps = results[0].analyzedInstructions[0].steps[0].step //step 1
//results[0].analyzedInstructions[0].steps[1].step //step 2

// map through each ingredient for each step
//var recipeIngredient = results[0].analyzedInstructions[0].steps[0].ingredients[0].name // ingreident for step one.. map if multiple ingredients for each step.. also account for if step DOESNT have ingredients
//results[0].analyzedInstructions[0].steps[2].ingredients[0].name // start of ingredients for step 3.. step two didnt have ingredient

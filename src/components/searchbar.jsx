import React, { useState } from "react";
import './searchbar.css'



function SearchBar({handleItem, item, setRecipes}) {

// useState created to keep track of the ingredient or recipe being searched.
   
    


// used to test if useState item variable is being updated properly
    // function onSubmit(e) {
    //     e.preventDefault()
    //     setItem(document.getElementById('searchBar').value)

    //     console.log("https://api.apilayer.com/spoonacular/recipes/complexSearch?query="+ item +"&addrecipenutrition=true&number=100")
    // }

// header info for api calls to spoonacular API
    let myHeaders = new Headers();
    myHeaders.append("apikey", "dWtOcLMwKxX8LxlurntuLm4pLTD2bMwv");

    let requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    }

    // const handleText = (e) => {
    //     let value = e.target.value
    //     setItem(value)
    // }
// get fetch request once the submit button is clicked. 
    const getAPI = () => {
        console.log(item)
        fetch("https://api.apilayer.com/spoonacular/recipes/complexSearch?query="+ item +"&addRecipeInformation=true&number=1000", requestOptions)
        .then(response => response.json())
        .then(result =>  setRecipes(result.results))
        
        // .then((json) => console.log(json));
        // &__searchname__=__input__
      
    }


    return(
        <div className="searchBar">
            {/* <form onSubmit={onSubmit}>  */}
                <label htmlFor="search">Search for recipe</label><br></br>
                <input 
                    type="text"
                    placeholder="Insert recipe or ingredient"
                    id="searchBar"
                    onChange={handleItem}
                />
                <button onClick={getAPI} type="submit">Search</button> 
            {/* </form> */}
        </div>
    )
    };

export default SearchBar;



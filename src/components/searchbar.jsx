import React from "react";
import './searchbar.css'



function SearchBar({handleItem, item, setRecipes}) {

// header info for api calls to spoonacular API
    let myHeaders = new Headers();
    myHeaders.append("apikey", "dWtOcLMwKxX8LxlurntuLm4pLTD2bMwv");

    let requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    }


// get fetch request once the submit button is clicked. 
    const getAPI = () => {
        // console.log(item)
        fetch("https://api.apilayer.com/spoonacular/recipes/complexSearch?query="+ item +"&addRecipeInformation=true&number=1000", requestOptions)
        .then(response => response.json())
        .then(result =>  setRecipes(result.results))
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



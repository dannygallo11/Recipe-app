import React, { useState } from "react";
import './searchbar.css'



function SearchBar() {

// useState created to keep track of the ingredient or recipe being searched.
    const [item, setItem] = useState('')
    console.log(item)


// used to test if useState item variable is being updated properly
    function onSubmit(e) {
        e.preventDefault()
        setItem(document.getElementById('searchBar').value)
        console.log(item);
    }

// header info for api calls to spoonacular API
    var myHeaders = new Headers();
    myHeaders.append("apikey", "dWtOcLMwKxX8LxlurntuLm4pLTD2bMwv");

    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    }

// get fetch request once the submit button is clicked. 
    const getAPI = () => {
        fetch("https://api.apilayer.com/spoonacular/recipes/complexSearch?query="+ item +"", requestOptions)
        .then((response) => response.json())
        .then((json) => console.log(json));
      
    }


    return(
        <div className="searchBar">
            <form onSubmit={onSubmit}> 
                <label htmlFor="search">Search for recipe</label><br></br>
                <input 
                    type="text"
                    placeholder="Insert recipe or ingredient"
                    id="searchBar"
                />
                <button onClick={getAPI} type="submit">Search</button> 
            </form>
        </div>
    )
    };

export default SearchBar;



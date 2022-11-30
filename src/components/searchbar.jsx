import React, { useRef } from "react";
import './searchbar.css'


const getAPI = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((json) => console.log(json));
}


function SearchBar() {
    const searchRef = useRef()

    function onSubmit(e) {
        e.preventDefault()
        console.log({search: searchRef.current.value});
    }

    return(
        <div className="searchBar">
            <form onSubmit={onSubmit}>
                <label htmlFor="search">Search for recipe</label><br></br>
                <input 
                    ref={searchRef}
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
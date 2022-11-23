import React, { useRef } from "react";
import './searchbar.css'

function SearchBar() {
    const searchRef = useRef()

    function onSubmit(e) {
        e.preventDefault()
        console.log({search: searchRef.current.value});
    }

    return(
        <div class="searchBar">
            <form onSubmit={onSubmit}>
                <label htmlFor="search">Search for recipe</label><br></br>
                <input 
                    ref={searchRef}
                    type="text"
                    placeholder="Insert recipe or ingredient"
                    id="searchBar"
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
};

export default SearchBar;
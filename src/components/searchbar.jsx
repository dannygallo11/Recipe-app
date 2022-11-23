import React, { useRef } from "react";

function SearchBar() {
    const searchRef = useRef()

    function onSubmit(e) {
        e.preventDefault()
        console.log({search: searchRef.current.value});
    }

    return(
        <>
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
        </>
    )
};

export default SearchBar;
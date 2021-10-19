import React from "react";
import './TodoSearch.css'

function TodoSearch({searchValue, setSearchvalue}) {

    const onSearchValue = (e) => {
        setSearchvalue(e.target.value);        
    }

    return(
        <>
        <input onChange={onSearchValue} className="TodoSearch" value={searchValue} placeholder="Task"></input>  
        </>
    )
}

export { TodoSearch }
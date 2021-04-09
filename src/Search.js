import React from 'react';
import Star from "./Star";

const Search = ({search, setRate, newRate}) => {
    return (
        <div>
            <input type ="text" placeholder="search movie" onChange={(e)=>search(e.target.value)}></input>
            <Star setRate={setRate} newRate={newRate}/>
        </div>
    )
}

export default Search







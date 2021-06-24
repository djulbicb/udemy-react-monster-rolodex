import React from 'react';
import './cards.styles.css';

const SearchBar = (props) => {
    const {placeholder="Type here", handleChange} = props;
    return (
        <input className="search-field" type="search" placeholder={placeholder} onChange={handleChange}></input>
    )
}

export default SearchBar;



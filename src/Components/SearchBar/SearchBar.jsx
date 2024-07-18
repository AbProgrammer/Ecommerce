import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./SearchBar.css";

function SearchBar() {

    const [searchItem, setSearchItem] = useState("");

    const handleSearch = (e)=>{

        setSearchItem(e.target.value);
    }

  return (
    <div className="searchBar">
        <div className="searchIcon"><SearchIcon/></div>
        <input type="search"  value = {searchItem} onChange = {handleSearch}  />
    </div>
  )
}

export default SearchBar

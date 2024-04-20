// src/components/SearchBar.js
import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleSearch = (e) => {
    const query = e.target.value;
    onSearch(query);
  };


  return (
    <div  className='d-flex justify-content-center align-items-center border-[2px] rounded-[4px] border-[#888585]' >
   
     <input  type="text" placeholder="Search..." onChange={handleSearch} />
     
    

    </div>
    
  );
};

export default SearchBar;

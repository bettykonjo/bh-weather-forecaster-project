import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, steSearchTerm] = useState('');

  const handleClick = () =>{
    steSearchTerm = ('')
  }
  return (
    <div>
        <h1>Weather Info for:{steSearchTerm}</h1>
      <input
        className="search-text"
        type="text"
        value={searchTerm}
        placeholder="Type to search....."
        onChange={(e) => {
          steSearchTerm(e.target.value);
          <button onClick={() => {handleClick('')}}> Search </button>
        }}
      />
      <button> Search </button>
    </div>
  );
};
export default SearchBar;

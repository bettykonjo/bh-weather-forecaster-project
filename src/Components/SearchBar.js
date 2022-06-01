import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, steSearchTerm] = useState('');

  const handleSubmit = () => {
    steSearchTerm = '';
  };
  return (
    <div>
      <h1>Weather Info for:{steSearchTerm}</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="search-text"
          type="text"
          value={searchTerm}
          placeholder="Type to search....."
          onChange={(e) => {
            steSearchTerm(e.target.value);
            // <button onClick={() => {handleSubmit('')}}> Search </button>
          }}
        />
        <button
          onClick={() => {
            handleSubmit('');
          }}
        >
          {' '}
          Search{' '}
        </button>
      </form>
    </div>
  );
};
export default SearchBar;

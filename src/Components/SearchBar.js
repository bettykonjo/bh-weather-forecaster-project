import React from 'react';
import styled from 'styled-components';

const SearchBarWrapper = styled.div`
  align-items: center;
  color: blue;
  align-content: flex-end;
  text-align: flex-end;
  h1 {
    margin: 1rem 0;
    text-align: start;
  }
  search-box {
    border-radius: 1px solid black;
  }
  input {
    font-size: 18px;
    width: 60%;
    height: 60%;
    background-color: white;
    color: black;
    float: left;
  }
  .inputC:hover {
    cursor: pointer;
    color: blue;
  }
  button {
    background-color: green;
    color: white;
    float: left;
    padding-bottom: 6px;
  }
`;

const SearchBar = ({ locations, setLocations, getGeoData }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    getGeoData();
  };
  return (
    <SearchBarWrapper>
      <form onSubmit={onSubmit}>
        <h1>Weather info for, {locations}:</h1>
        <input
          type="text"
          placeholder="search for weather info"
          value={locations}
          onChange={(e) => setLocations(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </SearchBarWrapper>
  );
};
export default SearchBar;


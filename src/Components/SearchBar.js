import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBarWrapper = styled.div`
  align-items: center;
  color: blue;
  align-content: flex-end;
  text-align: flex-end;
  margin:40px;
  h1 {
    margin:40px;
    text-align: start;
  }
  search-box {
    border-radius: 1px solid black;
  }
  input {
    font-size: 18px;
    width: 40%;
    /* height: 60%; */
    background-color:white;
    color: black;
    float: left;
  }
  .inputC:hover {
    cursor: pointer;
    color: blue;
  }
  button {
    color:black;
    float: left;
    padding-bottom: 6px;
    background-color: lightblue; 
    :hover {
    cursor: pointer;
    transform:scale(1.1);
    color:black;
    background-color:lightgreen;
    }
  }
`;

const SearchBar = ({ locations, setLocations, getGeoData }) => {
  // const [isDisabled, setIsDisabled] = useState(false);
  // const [buttonColor, setButtonColor] = useState('green');
  // const newButtonColor = buttonColor === 'green' ? 'grey' : 'green';

  const onSubmit = (e) => {
    e.preventDefault();
    getGeoData();
  };
  return (
    <SearchBarWrapper>
      <form onSubmit={onSubmit}>
        <h1>Weather info for: {locations}</h1>
        <input
          type="text"
          placeholder="search for weather info"
          value={locations}
          onChange={(e) => setLocations(e.target.value)}
        />
        {/* <button
          data-testid="colorButton"
          style={{
            color: 'white',
            backgroundColor: isDisabled ? 'gray' : buttonColor,
          }}
          type="button"
          onClick={() => setButtonColor(newButtonColor)}
          disabled={isDisabled}> Search</button> */}
          <button> Search</button>
      </form>
    </SearchBarWrapper>
  );
};
export default SearchBar;


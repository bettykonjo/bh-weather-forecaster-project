import React, { useState } from 'react';
import styled from "styled-components";
const HeaderWrapper = styled.header`
  align-items:flex-start;
  /* background-color:grey; */
  color: blue;
  display: block;
  justify-content: space-between;
  align-content: start;
  h1 {
    margin: 1rem 0;
    text-align:start;

  }
  search-box{
    border-radius:1px solid black;
  }
  input{
    font-size:18px;
    width:773px;
    height:50%;
    background-color: white;
    color:black;
    float: left;
  }
  .inputC:hover{
    cursor: pointer; 
  }
  button{
    background-color:green;
    color:white;
    float: left;
    padding-bottom:6px;
  }
  `;

const SearchBar = ({locations,setLocations, getData,}) => {
  // const [searchTerm, steSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();

    //  setlocations = (e.target.value);

  };
  return (
    <HeaderWrapper>
      <h1>Weather Info for:{locations}</h1>
      <form onSubmit={handleSubmit}>
     {/* <label htmlFor=""> <h1>Weather Info for:{locations}</h1></label> */}
        <input
          className="search-box"
          type="text"
          value={locations}
          // onChange={handleSubmit}
          placeholder=" Please Type to Search....."
          onChange={(e) =>setLocations(e.target.value)}
        />
        <button type='Submit'>Search</button>
      </form>
    </HeaderWrapper>
  );
};
export default SearchBar;
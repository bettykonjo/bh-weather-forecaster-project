import React, { useState } from 'react';
import styled from "styled-components";
const HeaderWrapper = styled.header`
  align-items:flex-start;
  background-color:grey;
  color: #fefefe;
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
    background-color:blue;
    color:white;
    float: left;
  }
  `;

const SearchBar = () => {
  const [searchTerm, steSearchTerm] = useState('');

  const handleSubmit = (e) => {
    steSearchTerm = (e.target.value);
  };
  return (
    <HeaderWrapper>
    <h1>Weather Info for:{searchTerm}</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="search-box"
          type="text"
          value={searchTerm}
        //   onChange={handleSubmit}
          placeholder="Type to search....."
          onChange={(e) => {
            steSearchTerm(e.target.value);           
          }}
        />
        <button onClick={() => {handleSubmit('')}}>{' '} Search</button>
      </form>
    </HeaderWrapper>
  );
};
export default SearchBar;

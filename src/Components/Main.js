

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import getadress from '../geo-api';
import DayCards from './DayCards';
import SearchBar from './SearchBar';
// import getadressnew from '../apinew'
import axios from 'axios';

const MainWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Main = ({locations, weathers, setLocations, getGeoData}) => {
 
console.log(weathers)
  return (
    <>
      <div>
        < SearchBar
          locations={locations}
          setLocations={setLocations}
          getGeoData={getGeoData}
        />
      </div>
      <MainWrapper>
        {weathers && weathers.map((weekdays, i) => (
          <DayCards
            daynum = {i + 1}
            weekdays={weekdays}
            key={weekdays.ts}
            // High={weekdays.high_temp}
            // Low={weekdays.low_temp}
          />
        ))}
      </MainWrapper>
    </>
  );
};

export default Main;

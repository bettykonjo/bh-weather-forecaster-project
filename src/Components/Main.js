

import React from 'react';
import styled from 'styled-components';
import DayCards from './DayCards';
import SearchBar from './SearchBar';

const MainWrapper = styled.div`
  display: flex;
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
          />
        ))}
      </MainWrapper>
    </>
  );
};

export default Main;

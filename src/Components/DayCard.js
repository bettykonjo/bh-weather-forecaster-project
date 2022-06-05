import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import getadress from '../geo-api'
import DayCards from './DayCards';
// import axios from 'axios';

const DayCardWrapper = styled.div`
  display: flex;
  width:100%;
`;
const DayCard = () => {
  const [weathers, setWeathers] = useState([]);
  const [locations, setLoctions] = useState('');
  // const [loading, setLoading] = useState(false);
  //  const [city, setCity] = useState('');
  // const apiKey = process.env.REACT_APP_API_KEY;
  const getData = () => {
    getadress(locations)
      .then(res => {
        console.log(res.data)
        // lat=38.123
        // lon=-78.543
        // const { lat } = res.data.data[0];
        // const { lon } = res.data.data[0];
        // const { lat, lon } = res.data[0.geometry:locations];
        // console.log(`Latitude: ${lat} | Longitude: ${lon}`);
        const { lat, lng: lon } = res.data;

        fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&units=I&days=7&key=23ae0b19a93d436781841a8304deacc1`)      
          .then((res) => res.json())
          .then((data) => {
            console.log(data);           
            setWeathers(data.data);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  
 
};
useEffect(()=>{
  getData()
},[])

return (
  <DayCardWrapper>
        {weathers?.map((days) => (
          <div>
            <DayCards
              days={days}
              locations={locations}
              setLoctions={setLoctions}
              key={days.moonrise_ts}
              getData={getData}
            />
          </div>
        ))}
     

  </DayCardWrapper>
);
}

export default DayCard;

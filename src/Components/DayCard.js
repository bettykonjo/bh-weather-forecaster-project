import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import getadress from '../geo-api'
import DayCards from './DayCards';
// import axios from 'axios';

const DayCardWrapper = styled.div`
  display: flex;
  margin:10px;

`;
const DayCard = () => {
  const [weathers, setWeathers] = useState([]);
  const [locations, setLoctions] = useState('');
  // const [loading, setLoading] = useState(false);



  //  const [city, setCity] = useState('');
  // const apiKey = process.env.REACT_APP_APIKEY;
  const getdata = () => {
    getadress(locations)
      .then(res => {
        console.log(res.data)
        // const { lat } = res.data[0];
        // const { lon } = res.data[0];
        fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=36.74&lon=-119.79&units=I&days=7&key=23ae0b19a93d436781841a8304deacc1`)      
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
  getdata()
},[])

return (
  <DayCardWrapper>
        {weathers?.map((days) => (
          <div>
            <DayCards
              days={days}
              key={days.moonrise_ts}
            />
          </div>
        ))}
     

  </DayCardWrapper>
);
}

export default DayCard;

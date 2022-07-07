import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router';
import styled from 'styled-components';
import moment from 'moment';

const DayDetail = styled.div`
background-color: wheat;
border: 2px solid green;
border-radius: 1rem;
padding: 1rem;
width: 90%; 
margin: 2rem auto;
justify-content: space-around;
flex-direction:row;
text-align:center;
box-shadow: 5px 5px green;
`;

const DayDetails = ({days}) => {
  console.log(days)
  const {daynum} = useParams();
  const [weatherDetails, setWeatherDetails] = useState(days[daynum - 1]);
  const {temp, high_temp, low_temp, precip, wind_spd,valid_date, weather,icon } = weatherDetails;
  const navigate = useNavigate();
  const Main = () => {
    navigate('/');
  };
  return (
    <DayDetail>   
      <h1> Forcast Details for</h1>
      <h1>{moment(valid_date).format('dddd DD MMMM')}</h1>
      <h3 className='temp'><strong>temp:{temp}</strong></h3>
      <div className='img'>      
        <img 
       src={`https://www.weatherbit.io/static/img/icons/${weather.icon}.png`} alt="weather icon"
      /> </div>  
      <p className='hight'><strong>HighT:{high_temp}</strong></p>
      <p className='lowt'><strong>LowT:{low_temp}</strong> </p>
      <p className='perci'><strong>precip:{precip}</strong></p>
      <p className='windS'><strong>wind_spd:{wind_spd}</strong></p>  
    </DayDetail>
  )
}

export default DayDetails;
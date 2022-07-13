import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';

const DayDetail = styled.div`
background-color: lightgreen;
border: 2px solid green;
border-radius: 1rem;
padding: 1rem;
width: 60%; 
margin:40px;
justify-content: space-around;
flex-direction:row;
text-align:center;
box-shadow: 5px green;
`;

const DayDetails = ({ days }) => {
  console.log(days);
  const { daynum } = useParams();
  const [weatherDetails, setWeatherDetails] = useState(
    days[daynum - 1],
  );
  const {
    temp,
    high_temp,
    low_temp,
    precip,
    wind_spd,
    valid_date,
    weather,
    app_max_temp,
    relativeHumidity,
    wind_cdir_full,
    app_min_temp,
    dewpt,
  } = weatherDetails;
  const navigate = useNavigate();
  const Main = () => {
    navigate('/');
  };
  return (
    <DayDetail>
      <h1> Forcast Details for</h1>
      <h1>{moment(valid_date).format('dddd DD MMMM')}</h1>
      <h3 className="temp">
        <strong>temp:{temp}<sup>°F</sup></strong>
      </h3>
      <div className="img">
        <img
          src={`https://www.weatherbit.io/static/img/icons/${weather.icon}.png`}
          alt="weather icon"
        />{' '}
      </div>
      <p className="hight">
        <strong>HighT:{high_temp}<sup>°F</sup></strong>|<strong>Feels like:</strong>{app_max_temp}<sup>°F</sup>
      </p>
      <p className="lowt">
        <strong>LowT:{low_temp}<sup>°F</sup></strong> | <strong>Feels like:</strong>{app_min_temp}<sup>°F</sup>
      </p>
      <p className="perci">
        <strong>likelhood of Precipitation::{precip}%</strong>|  <strong> Relative Humidty  </strong> {dewpt}<sup>%</sup>
      </p>
      <p className="windS">
        <strong>wind_spd:{wind_spd}M/H</strong>| <strong>Wind Direction:</strong>{wind_cdir_full}
      </p>
    </DayDetail>
  );
};



export default DayDetails;

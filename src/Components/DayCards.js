import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';

const DayCardsWrapper = styled.div`
.information{
  width:80%;
  background-color: lightblue;
  border-radius: 5px;
  margin: 40px;
  flex-wrap: wrap;
  flex-direction: row;
  
  :hover {
    cursor: pointer;
    transform:scale(1.1);
    color:black;
    background-color:lightgreen;
    }
    }
`;
const DayCards = ({ weekdays, daynum }) => {
  const navigate = useNavigate();
  const { ts: selectedDay } = useParams();
  const singledayinfo = (e) => {
    navigate(`/DayDetails/${daynum}`);
  };

  return (
    <DayCardsWrapper selectedDay={selectedDay} onClick={singledayinfo}>
      {
        <div className="information">
          <h2>{moment(weekdays.valid_date).format('dddd')}</h2>
          <div className='temp'>
            <strong>temp</strong>:{weekdays.temp}<sup>°F</sup>
          </div>
          <img
            src={`https://www.weatherbit.io/static/img/icons/${weekdays.weather.icon}.png`}
            alt="weather icon"
          />
          <div className='maxt'>
            <strong>High</strong>:{weekdays.high_temp}<sup>°F</sup>
          </div>
          <div className='mint'>
            <strong>Low</strong>:{weekdays.low_temp}<sup>°F</sup>
          </div>
          <div className='precip'>
            <strong>precip</strong>:{weekdays.precip}%
          </div>
        </div>

      }
    </DayCardsWrapper>

  );
};

export default DayCards;

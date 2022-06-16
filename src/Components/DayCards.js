import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';

const DayCardsWrapper = styled.div`
   .info{
  background-color: wheat;
  border-radius: 5px;
  margin: 15px;
  flex-wrap: wrap;
  flex-direction: row;
    }
  h5 {
    /* background-color: green; */
  }

`;
const DayCards = ({ weekdays, daynum }) => {

  const navigate = useNavigate();
    // const { id:selectedDay } = useParams();
  const { ts:selectedDay  } = useParams();
 
  // const { ts } = useParams();
  
  const singledayinfo = (e) => {
    navigate(`/DayDetails/${daynum}`);
    // navigate(`/DayDetails/${ weekdays.ts}`);
  };
  

  return (
    
    
    <DayCardsWrapper selectedDay={ selectedDay } onClick={singledayinfo}>    
      {  
       <div className='information'>
        <h5>{moment(weekdays.valid_date).format('dddd')}</h5>
        <div className="info"> 
          <div className='temp'>
            <strong>temp</strong>:{weekdays.temp}
          </div>
          <img
            src={`https://www.weatherbit.io/static/img/icons/${weekdays.weather.icon}.png`}
            alt="weather icon"
          />
          <div className='maxt'>
            <strong>High</strong>:{weekdays.high_temp}
          </div>
          <div className='mint'>
            <strong>Low</strong>:{weekdays.low_temp}
          </div>
          <div className='precip'>
            <strong>precip</strong>:{weekdays.precip}%
          </div>
        </div>
        </div>
        
      }
    </DayCardsWrapper>  
    
  );
};

export default DayCards;

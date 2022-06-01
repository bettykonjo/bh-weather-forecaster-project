import React from 'react';

import weatherdatas from './WeatherBit-Sample-Data.json';

function DayCard() {
  return (
    <div className="daycard">
      <h1>seven day weather information</h1>
      {weatherdatas && weatherdatas.map((weatherdata) => {
          return (
            <div className="weathers" key={weatherdata.id}>
              <strong>{weatherdata.city_name}</strong>
              {/* {weatherdata.weather && weatherdata.weather.map( data =>{
                return(
                  <div key={weatherdata.id}>
                    {data.description}
                  </div>
                )
              })} */}
            </div>
          );
        })}
    </div>
  );
}

export default DayCard;

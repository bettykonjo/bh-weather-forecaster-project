import React, { useState, useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import Main from './Components/Main';
import DayCards from './Components/DayCards';
import DayDetails from './Components/DayDetails'
import getadress from './geo-api';
import './App.css'
const App = () => {
  const [weathers, setWeathers] = useState([]);
  const [locations, setLocations] = useState(null);
  const { daynum } = useParams();
  console.log(daynum);
  // const [weatherDetails, setWeatherDetails] = useState({});
  // const [eachDay, setEachDay] = useState(null)
  // const [loading, setLoading] = useState(false);
  //  const [city, setCity] = useState('');
  // const apiKey = process.env.REACT_APP_API_KEY; 
  const apiKey = process.env.REACT_APP_API_KEY;
  const getGeoData = () => {
    getadress(locations)
      .then((response) => {
        console.log(response.data);
        const { lat } = response.data[0];
        const { lon } = response.data[0];
        fetch(
          `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&units=I&days=7&key=23ae0b19a93d436781841a8304deacc1`,
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setWeathers(data.data);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getGeoData();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main weathers={weathers} locations={locations} setLocations={setLocations} getGeoData={getGeoData} />} />
        {/* <Route path="DayDetails" element={<DayDetails/>} /> */}
        <Route path="DayDetails/:daynum" element={<DayDetails days={weathers} />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;

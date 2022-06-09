import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import DayCard from './Components/DayCard';
import DayCards from './Components/DayCards';
import DayDetails from './Components/DayDetails'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<DayCard />} />
        <Route path="DayCards" element={<DayCards />} />
        <Route path="DayCards/:id" element={<DayDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;

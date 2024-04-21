// src/views/Home.js
import React, { useState } from 'react';
import Button from '../Components/Button';
import { fetchActivity } from '../Controllers/ActivityController';
import Activity from '../Models/ActivityModel';

const Home = () => {
  const [activity, setActivity] = useState('');

  const handleButtonClick = async () => {
    const data = await fetchActivity();
    if (data) {
      const newActivity = new Activity(data);
      setActivity(newActivity.activity);
    }
  };

  return (
    <div>
      <h1>What to do?</h1>
      <Button onClick={handleButtonClick} text="Give me something to do!" />
      {activity && <p>{activity}</p>}
    </div>
  );
};

export default Home;

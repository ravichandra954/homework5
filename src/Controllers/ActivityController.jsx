// src/controllers/ActivityController.js
import axios from 'axios';

const fetchActivity = async () => {
  try {
    const response = await axios.get('https://www.boredapi.com/api/activity');
    return response.data;
  } catch (error) {
    console.error('Error fetching activity:', error);
    return null;
  }
};

export { fetchActivity };

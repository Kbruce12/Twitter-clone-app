import './App.css';
import React, { useEffect, useState } from 'react';
import Tweet from './Tweet';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://coursera-twitter-api.herokuapp.com/tweets')
      setData(response.data);
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  })
  
  
  return (
    <div style={{background: '#333', padding: '30px'}}>
      {data.map(tweet => <Tweet key={tweet.id} {...tweet}/>)}
    </div>
  );
}

export default App;

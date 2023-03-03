import React, { useState, useEffect } from 'react';
import BackgroundWaves from './BackgroundWaves';
import TimePull from './TimePull';
import Menu from './Menu';
import FindMe from './FindMe';
import Title from './Title';
import './styles/App.css';

const apiKey = process.env.REACT_APP_API_KEY;
const url = window.location.href.includes('localhost')
  ? 'http://localhost:3001/data/'
  : 'portfolio-back-end-production-cb83.up.railway.app/';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`${url}${apiKey}`);
      const data = await result.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Title handleToggle={handleToggle} isDarkMode={isDarkMode} />
      <FindMe />
      <Menu data={data} isDarkMode={isDarkMode} />
      <TimePull isDarkMode={isDarkMode} />
      <BackgroundWaves isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
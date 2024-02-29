import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useEffect, useState } from 'react';


const App = () => {

  const api_key = "96197be9d332621f68dc5c33297c2b24";

  const [weatherData, setweatherData] = useState(null);
  const [loaded, setLoaded] = useState(true);

  const fetchWeatherData = async (cityName) => {
    setLoaded(false);
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}`;
    try {
      const response = await fetch(api);
      
      if (response.status == 200) {
        const data = await response.json();
        setweatherData(data);

      } else {
        setweatherData(null);
      }
      setLoaded(true);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchWeatherData('Mumbai');
    console.log(weatherData);
  },[])

  return (
    <SafeAreaView>

    </SafeAreaView>
  );
};
export default App;

import { useEffect, useState } from "react";

const Weather = () => {
  const API_KEY = "a979a13bc0bd210878acc69bd4984cba";
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect( () => {
    if( !navigator.geolocation ){
      setError("위치 정보를 지원하지 않는 브라우저입니다");
      setLoading(false);
      return;
    }
    navigator.geolocation.getCurrentPosition((position)=>{
      const {latitude, longitude} = position.coords;
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=kr`;
      // fetch API : 브라우저 내장함수, 외부에 요청을 보내고, 응답을 받을 수 있음
      fetch(URL)
        .then((res)=>{
          if( !res.ok){
            setError("데이터 요청 실패!");
          }
          return res.json()
        })  
        .then((data)=>{
          setWeather(data);
          setLoading(false);
        })
        .catch(()=>{
          setError("날씨 데이터를 불러오는 데 실패했습니다");
          setLoading(false);
        });
    });
  }, [])


  return (
    <div className="weather-wrap">
      {
        weather && (
          <ul>
            <li><h3>{weather.name}</h3></li>
            <li>
              <h2>{Math.floor(weather.main.temp)}°C </h2>
              <h2>{weather.weather[0].description}</h2>
              <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="weather-img"/>
            </li>
          </ul>
        )
      }
    </div>
  );
};

export default Weather;
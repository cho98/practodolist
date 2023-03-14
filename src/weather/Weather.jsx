import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

const Weather = () => {
  const [coords, saveCoords] = useState();
  const [temp, setTemp] = useState();
  const [weather, setWeather] = useState();

  function handleGeoSucc(position) {
    console.log(position);
    const latitude = position.coords.latitude; // 경도
    const longitude = position.coords.longitude; // 위도
    const coordsObj = {
      latitude,
      longitude,
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
  }

  function handleGeoErr(err) {
    console.log("geo err! " + err);
  }

  function requestCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucc, handleGeoErr);
  }

  function getWeather(lat, lon) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${"d823aebb0060965efbd669b518285947"}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const temp = data.main.temp;
        const weathers = data.weather[data.weather.length - 1];
        setTemp(temp);
        setWeather(weathers.main);
      });
  }

  useEffect(() => {
    requestCoords();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <StWeather>
        <div>현재온도: {temp}</div>
        <div>날씨: {weather}</div>
      </StWeather>
    </>
  );
};

export default Weather;

const StWeather = styled.div`
  width: 400px;
  height: 50px;
  margin-top: 15px;
  margin-left: 340px;
  line-height: -8px;
  font-family: "NeoDunggeunmoPro-Regular";
  font-size: 19px;
  font-stretch: 5px;
`;

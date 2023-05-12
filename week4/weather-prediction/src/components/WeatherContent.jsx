import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { WEATHER_TYPE } from "../assets/WEATHER_TYPE";
import dayjs from "dayjs";

const WeatherContent = ({ type }) => {
  const { city } = useParams();
  const [weatherData, setWeatherData] = useState([]);
  const [currentCity, setCurrentCity] = useState();

  const weatherTypeImage = WEATHER_TYPE;

  useEffect(() => {
    if (type === "day") {
      fetchDayData(city).then((data) => {
        const imgURL = weatherTypeImage.find(
          (item) => item.description === data.weather[0].description
        ).imgURL;
        const newWeatherData = [{ ...data, imgURL }];
        setWeatherData(newWeatherData);
        setCurrentCity(data.name);
      });
    }

    if (type === "week") {
      fetchWeekData(city).then((data) => {
        const newWeatherData = data.list.filter(
          (item, index) => index % 8 === 0
        );
        newWeatherData.forEach((item) => {
          const imgURL = weatherTypeImage.find(
            (imageData) => imageData.description === item.weather[0].description
          );
          if (imgURL === undefined) item.imgURL = weatherTypeImage[0].imgURL;
          else {
            item.imgURL = imgURL.imgURL;
          }
        });
        setWeatherData(newWeatherData);
        setCurrentCity(data.city.name);
      });
    }
  }, [type, city]);

  const getDate = (date_txt) => {
    const date = new dayjs(date_txt);
    const D = date.format("MM-DD");
    return <h3>{D}</h3>;
  };

  return (
    <St.WeatherContentWrapper>
      {weatherData.map((item) => (
        <St.WeatherContent key={item.dt}>
          <St.WeatherContentHeader>
            {type === "day" ? <h3>{currentCity}</h3> : getDate(item.dt_txt)}
          </St.WeatherContentHeader>
          <img src={item.imgURL} />
          <div>
            <span>온도</span>
            <p>{item.main.temp}</p>
          </div>
          <div>
            <span>체감 온도</span>
            <p>{item.main.feels_like}</p>
          </div>
          <div>
            <span>최저/최고</span>
            <p>
              {item.main.temp_min}/{item.main.temp_max}
            </p>
          </div>
          <div>
            <span>구름</span>
            <p>{item.clouds.all}%</p>
          </div>
        </St.WeatherContent>
      ))}
    </St.WeatherContentWrapper>
  );
};

const fetchDayData = async (city) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
      import.meta.env.VITE_APP_WEATHER
    }&units=metric`
  );
  return response.data;
};

const fetchWeekData = async (city) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${
      import.meta.env.VITE_APP_WEATHER
    }&units=metric`
  );
  return response.data;
};

export default WeatherContent;

const St = {
  WeatherContentWrapper: styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    padding: 1rem;
  `,

  WeatherContent: styled.article`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    background-color: green;
    border-radius: 0.5rem;
    width: 25rem;

    & > img {
      width: 80%;
      height: 100%;
      object-fit: cover;
      margin-bottom: 1rem;
      border-radius: 0.5rem;
    }

    & > div {
      width: 80%;
      height: 4rem;
      padding: 0.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      font-size: 3rem;
    }
  `,

  WeatherContentHeader: styled.header`
    width: 80%;
    height: 4rem;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    color: white;
    font-size: 4rem;
  `,
};

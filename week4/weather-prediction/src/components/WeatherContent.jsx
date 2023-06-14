import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import dayjs from "dayjs";
import useWeatherData from "../hook/useWeatherData";
import SkeletonCard from "./SkeletonCard";

const WeatherContent = ({ type }) => {
  const { city } = useParams();
  const { data, isError, isLoading } = useWeatherData(type, city);

  const getDate = (date_txt) => {
    const date = new dayjs(date_txt);
    const D = date.format("MM-DD");
    return <h3>{D}</h3>;
  };

  return (
    <St.WeatherContentWrapper>
      {isLoading ? (
        <SkeletonCard />
      ) : (
        data.map((item) => (
          <St.WeatherContent key={item.dt}>
            <St.WeatherContentHeader>
              {type === "day" ? (
                <h3>{data.currentCity}</h3>
              ) : (
                getDate(item.dt_txt)
              )}
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
        ))
      )}
    </St.WeatherContentWrapper>
  );
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

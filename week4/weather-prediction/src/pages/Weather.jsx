import { useState } from "react";
import WeatherContent from "../components/WeatherContent";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Weather = () => {
  const [type, setType] = useState();
  const { pathname } = useLocation();
  useEffect(() => {
    setType(pathname.split("/")[1]);
  }, [pathname]);
  return <WeatherContent type={type}></WeatherContent>;
};

export default Weather;

import axios from "axios";
import { useEffect, useState } from "react";
import { WEATHER_TYPE } from "../assets/WEATHER_TYPE";

const useWeatherData = (type, city) => {

    const [data, setData] = useState([])
    const [isError, setIsError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const weatherTypeImage = WEATHER_TYPE;

    useEffect(() => {
        const fetchData = () => {
            if (type === 'day') {
                try {
                    axios.get(
                        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_WEATHER
                        }&units=metric`
                    ).then(
                        res => {
                            console.log(weatherTypeImage)
                            console.log(res.data)
                            const imgURL = weatherTypeImage.find(
                                (item) => item.description === res.data.weather[0].description
                            ).imgURL;
                            const newWeatherData = [{ ...res.data, imgURL, currentCity: res.data.name }];
                            setData(newWeatherData)
                            setIsError(false)
                        }
                    ).finally(
                        console.log('done'),
                        setIsLoading(false)
                    )
                } catch (err) {
                    setIsError(err)
                }
            } else if (type === 'week') {
                try {
                    axios.get(
                        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${import.meta.env.VITE_APP_WEATHER
                        }&units=metric`
                    ).then(
                        res => {
                            const newWeatherData = res.data.list.filter((item, index) => index % 8 === 0);
                            newWeatherData.forEach((item) => {
                                const imgURL = weatherTypeImage.find(
                                    (imageData) => imageData.description === item.weather[0].description
                                );
                                if (imgURL === undefined) item.imgURL = weatherTypeImage[0].imgURL;
                                else {
                                    item.imgURL = imgURL.imgURL;
                                }
                                item.cuurentCity = res.data.city.name;
                            });
                            setData(newWeatherData)
                            setIsError(false)
                        }
                    ).finally(
                        setIsLoading(false)
                    )
                } catch (err) {
                    setIsError(err)

                }
            }
        }
        setTimeout(() => {
            fetchData()
        }, 2000)
    }, [type, city])

    return {
        data,
        isError,
        isLoading,
    }
}

export default useWeatherData
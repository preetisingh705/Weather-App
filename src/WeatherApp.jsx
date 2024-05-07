import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import "./WeatherApp.css";

export default function WeatherApp () {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Wonder Land",
        feelsLike: 24.84,
        humidity: 47,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        weather: "haze",
    });

    let updateInfo = (newInfo) => {
      setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign:"center"}} className="weather">

            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}
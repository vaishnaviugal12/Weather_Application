import Searchbox from "./Searchbox";
import Infobox from "./Infobox";
import { useState } from "react";
import "./App.css";

export default function WeatherAPP() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 24.84,
        temp: 25,
        tempMin: 25,
        tempMax: 25,
        humidity: 47,
        pressure: 1012,
        weather: "Partly Cloudy"
    });

    const updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div className="weather-app-container">
            <h1 style={{ 
                marginBottom: '2rem', 
                background: 'linear-gradient(90deg, #646cff, #61dafb)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
            }}>
                Weather Forecast
            </h1>
            <Searchbox updateInfo={updateInfo}/>
            <Infobox info={weatherInfo}/>
        </div>
    );
}
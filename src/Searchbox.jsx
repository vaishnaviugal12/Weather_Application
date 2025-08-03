import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Searchbox.css";
import { useState } from 'react';

export default function Searchbox({ updateInfo }) {
    let [city, setCity] = useState("");
    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "eff3c4506c8682e274247aa734217695";
    
    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            if (!response.ok) throw new Error("City not found");
            
            let jsonResponse = await response.json();
            let result = {
                city: jsonResponse.name,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                feelsLike: jsonResponse.main.feels_like,
                humidity: jsonResponse.main.humidity,
                pressure: jsonResponse.main.pressure,
                weather: jsonResponse.weather[0].description
            };
            return result;
        } catch (error) {
            alert(error.message);
            return null;
        }
    }
    
    let handleChange = (event) => {
        setCity(event.target.value);
    };
    
    let handleSubmit = async (event) => {
        event.preventDefault();
        if (!city.trim()) return;
        
        let newInfo = await getWeatherInfo();
        if (newInfo) {
            updateInfo(newInfo);
            setCity("");
        }
    };
    
    return (
        <div className='Searchbox'>
            <h3 className="search-title">Weather Forecast</h3>
            <form className="search-form" onSubmit={handleSubmit}>
                <TextField 
                    className="search-input"
                    id="City" 
                    label="Enter City Name" 
                    variant="outlined" 
                    required 
                    value={city}
                    onChange={handleChange}
                    sx={{ 
                        width: '100%',
                        maxWidth: '500px',
                        '& .MuiInputLabel-root': { 
                            color: 'rgba(255, 255, 255, 0.7)',
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': { 
                                borderColor: 'rgba(255, 255, 255, 0.3)',
                                borderRadius: '8px',
                            },
                            '&:hover fieldset': { 
                                borderColor: 'rgba(255, 255, 255, 0.5)',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#646cff',
                            },
                            color: 'white',
                        },
                    }}
                />
                <Button 
                    className="search-button"
                    variant="contained" 
                    type="submit"
                    size="large"
                    sx={{
                        marginTop: '1rem',
                        width: '100%',
                        maxWidth: '500px',
                    }}
                >
                    Get Weather
                </Button>
            </form>
        </div>
    );
}
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./Infobox.css"

export default function Infobox({info}){
    const weatherImages = {
        "clear": "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "clouds": "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "rain": "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "snow": "https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "thunderstorm": "https://images.unsplash.com/photo-1509506489701-dfe23b067808?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "default": "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    };

    const getWeatherImage = (weather) => {
        weather = weather.toLowerCase();
        if (weather.includes("clear")) return weatherImages.clear;
        if (weather.includes("cloud")) return weatherImages.clouds;
        if (weather.includes("rain")) return weatherImages.rain;
        if (weather.includes("snow")) return weatherImages.snow;
        if (weather.includes("thunder")) return weatherImages.thunderstorm;
        return weatherImages.default;
    };

    return(
        <div className="Infobox">
            <div className="CardContainer">       
                <Card className="weather-card" sx={{ maxWidth: 500 }}>
                    <CardMedia
                        className="weather-image"
                        component="img"
                        alt={info.weather}
                        height="200"
                        image={getWeatherImage(info.weather)}
                    />
                    <CardContent>
                        <Typography className="weather-city" gutterBottom variant="h5" component="div">
                            {info.city}
                        </Typography>
                        <div className="weather-details">
                            <Typography variant="body1">
                                <strong>Temperature:</strong> {info.temp}°C
                            </Typography>
                            <Typography variant="body1">
                                <strong>Feels Like:</strong> {info.feelsLike}°C
                            </Typography>
                            <Typography variant="body1">
                                <strong>Min Temp:</strong> {info.tempMin}°C
                            </Typography>
                            <Typography variant="body1">
                                <strong>Max Temp:</strong> {info.tempMax}°C
                            </Typography>
                            <Typography variant="body1">
                                <strong>Humidity:</strong> {info.humidity}%
                            </Typography>
                            <Typography variant="body1">
                                <strong>Pressure:</strong> {info.pressure} hPa
                            </Typography>
                        </div>
                        <Typography variant="body1" sx={{ mt: 2, fontStyle: 'italic' }}>
                            The weather is <strong>{info.weather}</strong>
                        </Typography>
                    </CardContent>
                </Card>
            </div> 
        </div>
    );
}
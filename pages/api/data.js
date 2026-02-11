import config from '../../config.json';

export default async function handler(req, res) {
  const { latitude, longitude, city, country } = config;
  try {
    const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,wind_direction_10m,is_day&daily=sunrise,sunset&timezone=auto`
    );

  const data = await response.json();
  const adaptedData = {
    name: city,
    sys: { country,
          sunrise: Math.floor(new Date(data.daily.sunrise[0]).getTime() / 1000),
          sunset: Math.floor(new Date(data.daily.sunset[0]).getTime() / 1000),
    },
    weather: [
      {
        description: getWeatherData(data.current.weather_code),
        icon: getWeatherData(data.current.weather_code, data.current.is_day)
      }
    ],
    main: {
      temp: data.current.temperature_2m,
      humidity: data.current.relative_humidity_2m,
      feels_like: data.current.temperature_2m,
    },
    wind: {
      speed: data.current.wind_speed_10m,
      deg: data.current.wind_direction_10m,
    },

    visibility: 10000,

    dt: Math.floor(Date.now() / 1000),
    timezone: data.utc_offset_seconds,
  };
  res.status(200).json(adaptedData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
}

function getWeatherData(code) {
  const descriptions = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Foggy",
    48: "Depositing rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy rain",
    71: "Slight snow",
    73: "Moderate snow",
    75: "Heavy snow",
    80: "Slight rain showers",
    95: "Thunderstorm",
  };
  return descriptions[code] || "Unknown weather code";
}

function getWeatherIcon(code, isDay) {
  const iconMap = {
    0: isDay ? "01d" : "01n",
    1: isDay ? "02d" : "02n",
    2: isDay ? "03d" : "03n",
    3: "04d",
    45: "50d",
    48: "50d",
    51: "09d",
    61: "10d",
    71: "13d",
    80: "09d",
    95: "11d",
  };

  return iconMap[code] || "01d";
}
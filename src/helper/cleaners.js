export const currentWeatherCleaner = data => {
  let date = new Date(data.sys.sunrise * 1000);
  let hours = date.getHours();
  let minutes = '0' + date.getMinutes();
  let seconds = '0' + date.getSeconds();
  let formattedSunrise =
    hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
  let date2 = new Date(data.sys.sunset * 1000);
  let hours2 = date2.getHours();
  let minutes2 = '0' + date2.getMinutes();
  let seconds2 = '0' + date2.getSeconds();
  let formattedSunset =
    hours2 - 12 + ':' + minutes2.substr(-2) + ':' + seconds2.substr(-2);
  let windValue = Math.floor(data.wind.deg / 22.5 + 0.5);
  let array = [
    'N',
    'NNE',
    'NE',
    'ENE',
    'E',
    'ESE',
    'SE',
    'SSE',
    'S',
    'SSW',
    'SW',
    'WSW',
    'W',
    'WNW',
    'NW',
    'NNW'
  ];
  let wind = array[windValue % 16];
  let visibilityUnrounded = data.visibility * 0.000621371192;
  const weatherDescription = data.weather.find(des => des.description);
  return {
    location: data.name,
    currentTemp: Math.round(data.main.temp) + '°',
    humidity: data.main.humidity + '%',
    highTemp: Math.round(data.main.temp_max) + '°',
    lowTemp: Math.round(data.main.temp_min) + '°',
    windSpeed: data.wind.speed + 'MPH',
    sunrise: formattedSunrise + ' AM',
    sunset: formattedSunset + ' PM',
    windDirection: wind,
    visibility: visibilityUnrounded.toFixed(2) + ' Miles',
    currentConditions: weatherDescription.description
      .toLowerCase()
      .split(' ')
      .map(letter => letter.charAt(0).toUpperCase() + letter.substring(1))
      .join(' '),
    latitude: data.coord.lat + '°',
    longitude: data.coord.lon + '°'
  };
};

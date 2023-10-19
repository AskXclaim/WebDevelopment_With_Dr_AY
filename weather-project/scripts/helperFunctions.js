const https = require("https");
const http = require("http");
const appId = "a675df393e2ee7f820df150b11787a56";

function getGeoLocation(data) {
  console.log(data);
  if (data && Array.isArray(data) && data.length > 0) {
    const geoLocation = {};
    geoLocation.cityName = data[0].name;
    geoLocation.latitude = data[0].lat;
    geoLocation.longitude = data[0].lon;
    return geoLocation;
  }
  return null;
}

function getWeatherDetails(weatherData) {
  const details = {};
  if (weatherData && weatherData.main) {
    details.temperature = weatherData.main.temp;
    details.statusCode = weatherData.cod;
    details.name = weatherData.name;
  }

  if (weatherData.weather.length > 0) {
    details.description = weatherData.weather[0].description;
    details.weatherIcon = weatherData.weather[0].icon;
  }
  return details;
}
function isWeatherDetailAvailable(details) {
  console.log(details);
  return (
    details != null &&
    typeof details === "object" &&
    Object.keys(details).length > 0
  );
}

function getTemperature(details) {
  if (isWeatherDetailAvailable(details))
    return `The temperature in ${details.name} is ${details.temperature} celcius`;

  return "Wasn't able to get the required temprature";
}

function getGeoLocationOfCity(requestBody) {
  console.log(requestBody);
  if (requestBody) {
    const city = requestBody.txtCity;
    const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city},1&limit=3&appid=${appId}`;
    try {
      http.get(geoUrl, (res) => {
        res.on("data", (data) => {
          const parsedData = JSON.parse(data);
          return getGeoLocation(parsedData);
        });
      });
    } catch (error) {
      console.log("I am in getGeoLocationOfCity error");
      console.log(error);
    }
  }
  return null;
}

function getWeatherDetailFormGeoLocation(geoLocation) {
  console.log(geoLocation);
  if (geoLocation && Object.keys(geoLocation).length > 0) {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${geoLocation.latitude}&lon=${geoLocation.longitude}&units=metric&appid=${appId}`;
    https.get(weatherUrl, (res) => {
      res.on("data", (data) => {
        const parsedData = JSON.parse(data);
        console.log(parsedData);
        return getWeatherDetails(parsedData);
      });
    });
  }
}

module.exports = {
  getWeatherDetails,
  getTemperature,
  isWeatherDetailAvailable,
  getGeoLocationOfCity,
  getWeatherDetailFormGeoLocation,
};
// exports.getTemperature = getTemperature;
// exports.isWeatherDetailAvailable = isWeatherDetailAvailable;
// exports.getGeoLocationOfCity = getGeoLocationOfCity;
// exports.getWeatherDetailFormGeoLocation = getWeatherDetailFormGeoLocation;

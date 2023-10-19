"use strict";
const helperFunc = require("./scripts/helperFunctions");
const express = require("express");
const https = require("https");
const http = require("http");
const bodyParser = require("body-parser");
const appId = "a675df393e2ee7f820df150b11787a56";

const portNumber = 3000;
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile("index.html");
  // const appId = "a675df393e2ee7f820df150b11787a56";
  // const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=52.0579495&lon=1.1526345&units=metric&appid=${appId}`;

  // try {
  //   https.get(weatherUrl, (response) => {
  //     response.on("data", (data) => {
  //       const weatherData = JSON.parse(data);
  //       const details = helperFunc.getWeatherDetails(weatherData);
  //       // res.send("<h1>" + helperFunc.getResult(details) + "</h1>");
  //       if (helperFunc.isWeatherDetailAvailable(details)) {
  //         const weatherIconUrl = `http://openweathermap.org/img/wn/${details.weatherIcon}@2x.png`;
  //         res.write(`<p>The weather is ${details.description}</p>`);
  //         res.write("<h1>" + helperFunc.getTemperature(details) + "</h1>");
  //         res.write(`<img src=${weatherIconUrl}>`);
  //         res.send();
  //       } else {
  //         res.send("Not able to get weather details");
  //       }
  //     });
  //   });
  // } catch (error) {
  //   res.send(`The following error occurrred ${error}`);
  // }
});

app.post("/getWeather", (req, res) => {
  console.log("Made it to post");
  if (req.body) {
    const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${req.body.txtCity},1&limit=1&appid=${appId}`;
    try {
      http.get(geoUrl, (geoLocalRes) => {
        geoLocalRes.on("data", (geoLocalData) => {
          const parsedGeoLocalData = JSON.parse(geoLocalData);
          console.log(parsedGeoLocalData);
          if (parsedGeoLocalData) {
            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${parsedGeoLocalData[0].lat}&lon=${parsedGeoLocalData[0].lon}&units=metric&appid=${appId}`;

            https.get(weatherUrl, (getWeatherRes) => {
              getWeatherRes.on("data", (weatherData) => {
                const parsedWeatherData = JSON.parse(weatherData);
                const weatherIconUrl = `http://openweathermap.org/img/wn/${parsedWeatherData.weather[0].icon}@2x.png`;
                res.write(
                  `<h1>The weahter in ${parsedWeatherData.name} is ${parsedWeatherData.weather[0].description}.</h1>`
                );
                res.write(
                  `<p>Teperature is ${parsedWeatherData.main.temp} celcius.</p>`
                );
                res.write(`<img src=${weatherIconUrl}>`);
                res.send();
              });
            });
          } else {
            res.send("Unable to get geo locatoion data");
          }
        });
      });
    } catch (error) {
      console.log("Error: I am trying to get geo location");
      console.log(error);
    }
  }
});
//   const geoLocation = helperFunc.getGeoLocationOfCity(req.body);
//   console.log(geoLocation);
//   if (geoLocation && Object.keys(geoLocation).length > 0) {
//     const details = helperFunc.getWeatherDetailFormGeoLocation(geoLocation);
//     if (helperFunc.isWeatherDetailAvailable(details)) {
//       const weatherIconUrl = `http://openweathermap.org/img/wn/${details.weatherIcon}@2x.png`;
//       res.write(`<p>The weather is ${details.description}</p>`);
//       res.write("<h1>" + helperFunc.getTemperature(details) + "</h1>");
//       res.write(`<img src=${weatherIconUrl}>`);
//       res.send();
//     } else {
//       res.send("Not able to get weather details");
//     }
//   } else {
//     res.send(
//       `Unable to get geo data. So unable to get weather details for ${req.body.txtCity.trim()}.`
//     );
//   }
// });

app.listen(portNumber, () => {
  console.log(`Server is listening on ${portNumber}`);
});

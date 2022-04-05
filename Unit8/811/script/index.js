function main() {
  let lat= "38.8408";  
  let lon = "0.1057";
  let metric = "metric";
  let API_key = "7c64d9e00d75fb4e4836d45979311d02";  
  
  // Current Weather Data
  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${metric}&appid=${API_key}`;

  fetch(currentWeatherUrl)
     .then(response => response.text())
     .then(function (result) {
        console.log(result);   

        let api = JSON.parse(result);

        let temp = document.querySelector("#temp");

        temp.innerHTML = `${api.main.temp}°C`;
        let weather = document.querySelector("#weather");
        weather.innerHTML = `Weather: ${api.weather[0].main}`;

        let img = document.querySelector("#icon");
        
        let iconurl = api.weather[0].icon;
        img.setAttribute("src",`http://openweathermap.org/img/wn/${iconurl}@2x.png`);

        console.log(iconurl)
        let vel = document.querySelector("#vel");
        vel.innerHTML = `Wind Speed: ${api.wind.speed}`;
        let deg = document.querySelector("#deg");
        deg.innerHTML = `Wind Degree: ${api.wind.deg}`;
        let date = Date(api.dt);
        let time = document.querySelector("#time");
        time.innerHTML = `${date}`;
     });
   //temperatura, el tiempo, velocidad viento y decrecimiento
}
document.addEventListener('DOMContentLoaded', main);

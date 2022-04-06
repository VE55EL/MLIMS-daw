function main() {
  let lat = "38.8408";  
  let lon = "0.1057";
  let metric = "metric";
  let API_key = "7c64d9e00d75fb4e4836d45979311d02";
  
  // Current Weather Data
  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${metric}&appid=${API_key}&mode=xml`;

  fetch(currentWeatherUrl)
     .then(response => response.text())
     .then(function (result) {
        console.log(result)
        
        let DOMResult = new DOMParser();
        let dom = DOMResult.parseFromString(result,'text/xml');

        let temp = dom.querySelector("temperature")
        let temp2 = temp.getAttribute("value");
        let temp3 = document.querySelector("#temp");
        temp3.innerHTML = `${temp2}°C`;

        let weather = dom.querySelector("weather")
        let weather2 = weather.getAttribute("value");
        let weather3 = document.querySelector("#weather");
        weather3.innerHTML = `Weather: ${weather2}`;

        let vel = dom.querySelector("speed")
        let vel2 = vel.getAttribute("value");
        let vel3 = document.querySelector("#vel");
        vel3.innerHTML = `Wind Speed: ${vel2}`;

        let deg = dom.querySelector("direction")
        let deg2 = deg.getAttribute("value");
        let deg3 = document.querySelector("#deg");
        deg3.innerHTML = `Wind degreed: ${deg2}`;

        let date = Date(dom.dt);
        let time = document.querySelector("#time");
        time.innerHTML = `${date}`;

        let img = document.querySelector("#icon");
        let iconurl = weather.getAttribute("icon");
        img.setAttribute("src",`http://openweathermap.org/img/wn/${iconurl}@2x.png`);
     });
}

document.addEventListener('DOMContentLoaded', main);

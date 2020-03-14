const apiURL= 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=8651d910ecb3c494e290111362bfb700&units=imperial';

fetch(apiURL)
.then(response =>(
     response.json()
)
    .then(
        jsObject => {
            console.log(jsObject);
           let currentTemp = jsObject.main.temp;
           let windSpeed = jsObject.wind.speed;
           let windChill = 0;
           

           if (currentTemp <= 50 && windSpeed >=3) {
            windChill = 35.74 + 0.6215 * currentTemp - 35.75 * 
            Math.pow(windSpeed, 0.16) + 0.4275  * currentTemp * Math.pow(windSpeed, 0.16);
            
        document.querySelector('#current-temp').innerHTML = currentTemp.toFixed(0) + '&deg;';
        document.querySelector('#wind-speed').innerHTML = windSpeed.toFixed(0) + 'mph';
        }

        if (windChill === 0) {
          document.getElementById('windChill').innerHTML = 'N/A'
        }
        
         else {
        
        document.getElementById('windChill').innerHTML = Math.round(windChill) +'&deg;';
        }
        document.querySelector('*weatherDesc').textContent = 
        jsObject.weather[0].main;
        
        let ImageUrl = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;

        document.querySelector('#weatherImage')
        .setAttribute('src',ImageUrl);

        document.querySelector('#weatherImage')
        .setAttribute('alt', jsObject.weather[0].main);
    }
    
));


const apiURLForecast = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=71a82346181bab920d3274a4aa7d689d&units=imperial";
fetch(apiURLForecast)
.then(response => response.json())
.then(
    jsObject => {
        let counter =1;
      jsObject.list.forEach(
          forecast => {
              if (forecast.dt_text.includes('18:00')) {
               let forecastDate = new Date(forecast.dt_text.replace(' ', ' T '))
               let dayOfWeek = dayOfWeek[forecastDate.getDay()];
               console.log(dayOfWeek);


               document.querySelector(`#day${counter}`)
               .textContent = dayOfWeek;

               document.getElementById(`temp${counter}`)
               .textContent = forecast.main.temp.toFixed(0) + '&deg;';
               counter ++;
              }
          }
      );
    }
);



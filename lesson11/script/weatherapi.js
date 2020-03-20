function getCurrentWeather(cityId){

    const apiURL= 'https://api.openweathermap.org/data/2.5/weather?id=' +
    cityId + '&appid=8651d910ecb3c494e290111362bfb700&units=imperial';
fetch(apiURL)
.then(
    response =>{
        return response.json(); 
     }
 )
 .then(
     jsObject => {
         console.log(jsObject);
         document.querySelector('current-temp')
           .textContent = jsObject.main.temp;
           let image = `https://openweathermap.org/img/w/{jsObject.weather[0].icon}.png`;
           let alt = jsObject.weather[0].description;
           
           let weatherIcon = document.querySelector('#weather-icon');
              weatherIcon.setAttribute('src', image);
              weatherIcon.setAttribute('alt', alt);
     });

}
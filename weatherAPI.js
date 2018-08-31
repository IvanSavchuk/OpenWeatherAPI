var apiCall = 'http://api.openweathermap.org/data/2.5/weather?q=Ivano-Frankivsk,UA&appid=38082f3f9beb0b0911ceaab991e39d6f';

$.getJSON(apiCall, weatherCallback);

function weatherCallback(weatherData) {
    console.log(
        weatherData.name, 
        weatherData.sys.country, 
        weatherData.description
    );
}
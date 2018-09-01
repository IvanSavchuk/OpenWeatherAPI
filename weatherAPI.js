
function getWeather() {
    var cityName = $('#cityName').val();

    var apiCall = 
    'http://api.openweathermap.org/data/2.5/weather?q=' + 
    cityName 
    + '&appid=38082f3f9beb0b0911ceaab991e39d6f';
    
    $.getJSON(apiCall, weatherCallback);
    
    function weatherCallback(weatherData) {
        var cityName = weatherData.name;
        var country = weatherData.sys.country;
        var description = weatherData.weather[0].description;
        
        $('.weatherResponse').append(
            "The weather in " + cityName + 
            " " + country + 
            " is currently " + description
        );
    
        // console.log(
        //     weatherData.name, 
        //     weatherData.sys.country, 
        //     weatherData.weather[0].description
        // );
    };
}


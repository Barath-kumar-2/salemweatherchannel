var city = prompt("Enter City Name for Current weather data:");
const URL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const apikey = "ae6d4369621e4f36c60da4059267cb71";

async function checkweather(){
    const response = await fetch(URL + city + `&appid=${apikey}`);
    var data = await response.json();
    var wind = "";
    if (data.wind.deg >= 350 && data.wind.deg <=10){
        wind = "N"
    }else if (data.wind.deg >= 11 && data.wind.deg <= 79){
        wind = "NE"
    }else if (data.wind.deg >= 80 && data.wind.deg <= 109){
        wind = "E"
    }else if (data.wind.deg >= 110 && data.wind.deg <= 169){
        wind = "SE"
    }
    else if (data.wind.deg >= 170 && data.wind.deg <= 199){
        wind = "S"
    }
    else if (data.wind.deg >= 200 && data.wind.deg <= 259){
        wind = "SW"
    }
    else if (data.wind.deg >= 260 && data.wind.deg <= 289){
        wind = "W"
    }else{
        wind = "NW"
    }
    

    console.log(data);
    document.querySelector(".city").innerHTML = "City Name = "+ data.name;
    document.querySelector(".desc").innerHTML = "Weather Description = " + (data.weather[0].description);
    document.querySelector(".temp").innerHTML ="Current Temp = " + (data.main.temp) + "⁰C";
    document.querySelector(".feelslike").innerHTML ="Feels Like = " + (data.main.feels_like) + "⁰C";
    document.querySelector(".humdity").innerHTML = "Humidity = " + (data.main.humidity) + "%";
    document.querySelector(".windspeed").innerHTML ="Wind Speed = " + (data.wind.speed) + " m/s";
    document.querySelector(".winddirect").innerHTML ="Wind Direction = " + (data.wind.deg) + "⁰" + wind;
    document.querySelector(".Sunrise").innerHTML = "Sunrise at " + (new Date((data.sys.sunrise) * 1000).toTimeString());
    document.querySelector(".Sunset").innerHTML = "Sunset at " + (new Date((data.sys.sunset) * 1000).toTimeString());
}
checkweather();

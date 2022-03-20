const API_KEY = "c3a83c33c240d934a3388ff1773de2ea"
function geoSucess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather");
            const temperature = document.querySelector("#temperature");
            const city = document.querySelector("#city");
            weather.innerText = `Weather : ${data.weather[0].main}`;
            temperature.innerText = `Temperature : ${data.main.temp}C`
            city.innerText = `City : ${data.name}`;
    });
}
function geoFail(){
    alert("Can't find your location. Couldn't give weather information for you.")
}

navigator.geolocation.getCurrentPosition(geoSucess, geoFail)
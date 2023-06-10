const getweather = document.getElementById("get-weather-btn");
getweather.addEventListener("click", function () {
    const userCityInput = document.getElementById("city-input").value;

    getUserlocation(userCityInput);
})

//const btn = document.getElementById('get-weather-btn');
//suing the input of user for city to get lat and long

const getUserlocation = async (userCityInput) => {
    try {
        const usercityfetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userCityInput}&appid=435928d43225ea55b21cb0870611138a`)
        const citydata = await usercityfetch.json();
        console.log(citydata);
        displayweather(citydata);
        // btn.addEventListener('click', displayweather(citydata));
        //const coords = citydata[0];
        // return coords;
    }
    catch (error) {
        console.log(error)

    }
};

const getweatherInfo = async (lat, lon) => {
    try {
        const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=435928d43225ea55b21cb0870611138a&units=metric`);
        const weatherData = await weather.json();
        return weatherData;
    }
    catch (error) {
        console.log(error);
    }
}


const displayweather = (data) => {
    const ciytname = document.getElementById('city-name');
    const temperature = document.getElementById("temprature");
    const weatherImage = document.getElementById('image');
    // const description = document.getElementById("description");
    const windSpeed = document.getElementById("wind-speed");
    const cloudy = document.getElementById("cloudy");
    const sunrise = document.getElementById("sunrise");
    const sunset = document.getElementById("sunset");

    ciytname.innerText = data.name;
    weatherImage.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    temperature.innerText = `${data.main.temp.toFixed(0)}°C`;
    windSpeed.innerText = `Wind speed: ${data.wind.speed} m/s`;
    sunrise.innerText = `Sunrise: ${new Date(
        data.sys.sunrise * 1000
    ).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
    })}`;
    sunset.innerText = sunset.innerText = `Sunset: ${new Date(
        data.sys.sunset * 1000
    ).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
    })}`;
    cloudy.innerText = `Cloudy: ${data.clouds.all}%`;
};

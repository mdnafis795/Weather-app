// api key- afd607a961171aed214442312ad92b62
const city1 = document.querySelector(".city");
const temp = document.querySelector(".temp");
const windspeed = document.querySelector(".wind");
const humidity1 = document.querySelector(".humidity");
const weatehrIcon = document.querySelector(".weather-icon")
const weather1 = document.querySelector(".weather");
const searchinput = document.querySelector(".search input");
const searchbutton = document.querySelector(".search button");
const ERROR = document.querySelector(".error");

const apikey = "afd607a961171aed214442312ad92b62";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    if (response.status == 404) {
        ERROR.style.display = "block";
        weather1.style.display = "none";
    } else {
        var data = await response.json();
        console.log(data);
        city1.innerHTML = data.name;
        temp.innerHTML = Math.round(data.main.temp) + "°c";
        humidity1.innerHTML = data.main.humidity + "%";
        windspeed.innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds") {
            weatehrIcon.src = "images/clouds.png"
        }
        else if (data.weather[0].main == "Clear") {
            weatehrIcon.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatehrIcon.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatehrIcon.src = "images/drizzle.png"
        }
        else if (data.weather[0].main == "Mist") {
            weatehrIcon.src = "images/mist.png"
        }

        weather1.style.display = "block";
        ERROR.style.display = "none";
    }

}
searchbutton.addEventListener("click", () => {
    checkweather(searchinput.value);
})

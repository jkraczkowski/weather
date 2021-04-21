class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.clouds = document.getElementById('w-clouds');
        this.wind = document.getElementById('w-wind');
    }
    paint(weather){
        this.location.textContent = weather.name +', '+ weather.sys.country;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = `${Math.round(weather.main.temp - 273.15).toString()}°C`;
        this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
        this.clouds.textContent = `Clouds: ${weather.clouds.all}`;
        this.wind.textContent = `Wind Speed: ${weather.wind.speed}`;
        this.feelsLike.textContent = `Feels like: ${Math.round(weather.main.feels_like - 273.15).toString()}°C`
    }
}

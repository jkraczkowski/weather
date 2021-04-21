class Weather {
    constructor(city, country) {
        this.apiKey = 'eae3832bbf53b56b072768aebd3fdf79';
        this.city = city;
        this.country = country;
    }

    //Fetch
    async getWeather(){
        const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}`);

        const responseData = res.json();
        console.log(responseData);
        return responseData;
    }
    changeLocation(city, country){
        this.city = city;
        this.country = country;
    }
}

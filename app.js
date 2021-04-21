const weather = new Weather('Warsaw', 'Poland');
const ui = new UI();
const strg = new StorageValue();

const weatherLocation = strg.getLocationData();

document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;

    weather.changeLocation(city, country);

    strg.setLocationData(city, country);

    getWeather();

    $('#locModal').modal('hide');
})

function getWeather() {
    weather.getWeather ()
        .then (data => {
            ui.paint(data);
        })
        .catch (err => console.log (err));
}


weatherKey = '106051cd462aed4cf0d52e78ca2ccc80';
giphyKey = 'O25fU39PYEF6iHt9d8r9QrSTY4mIaKAB'
const img = document.querySelector('img');
const button = document.getElementById('search');

let sky = ""
let degrees = ""
let humidity = ""
let location = 'london';

async function getData () {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+location+'&APPID='+weatherKey, {mode:"cors"})
    const weatherData = await response.json()
    const degrees = await weatherData.main.temp
    const humidity = await weatherData.main.humidity
    const sky = await weatherData.weather[0].main 
    return weatherData, degrees, humidity
}

async function getDegrees() {
    const degrees = getData.weatherData.main.temp;
    return degrees
}


button.addEventListener('click', () => {
    const city = document.getElementById("input").value;

    function GetData() {
        let location='London'
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+location+'&APPID='+weatherKey, {mode:"cors"})
            .then(function(response) {
                return response.json();
          })
          //  .then(function(response) {
          //      console.log(response);
          //})
            .then(function(response) {
                degrees = response.main.temp
                humidity = response.main.humidity
                //city = response.name
                sky = response.weather[0].main
                console.log(city, degrees, humidity, sky)
                
            })
            .catch(function(err) {
            console.log(err);
            }
        );
    }




    
    function GetImage() {
        fetch('https://api.giphy.com/v1/gifs/translate?api_key='+giphyKey+'&s='+city, {mode:"cors"})
            .then(function(response) {
                return response.json();
          })
            .then(function(response) {
                img.src = response.data.images.original.url;
          })
            .catch(function(err) {
            console.log(err);
        });
    }

    GetData();
    GetImage();
})
*/




weatherKey = '106051cd462aed4cf0d52e78ca2ccc80';
giphyKey = 'O25fU39PYEF6iHt9d8r9QrSTY4mIaKAB'
const img = document.querySelector('img');
const loc = document.getElementById('location');
let sky = ""
let degrees = ""



function GetData() {
    let location='London'
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+location+'&APPID='+weatherKey, {mode:"cors"})
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            console.log(response);
            let weatherLocation = response.name
            let weatherDegrees = response.main
            let weatherSky = response.weather
     })
        .catch(function(err) {
        console.log(err);
    });
}

function GetImage(image) {
    fetch('https://api.giphy.com/v1/gifs/translate?api_key='+giphyKey+'&s='+'clouds', {mode:"cors"})
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
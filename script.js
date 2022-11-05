weatherKey = '106051cd462aed4cf0d52e78ca2ccc80';
giphyKey = 'O25fU39PYEF6iHt9d8r9QrSTY4mIaKAB'
const img = document.querySelector('img');
const button = document.getElementById('search');
const cellCity = document.getElementById('city');
const cellDegree = document.getElementById('degrees')
const cellHumidity = document.getElementById('humidity')



button.addEventListener('click', () => {
    const city = document.getElementById("input").value;
    cellCity.innerHTML=city

    //function to get the data through an API
    async function getData () {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID='+weatherKey, {mode:"cors"})
        const weatherData = await response.json()
        const degrees = await weatherData.main.temp
        cellDegree.innerHTML = degrees+' '+'Fahrenheit'
        const humidity = await weatherData.main.humidity
        cellHumidity.innerHTML = humidity+' '+'%'
        const sky = await weatherData.weather[0].main 

        // function to get a gif related to the weather condition
        async function getImage() {
            const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key='+giphyKey+'&s='+sky, {mode:"cors"})
            const imageData = await response.json()
            img.src = imageData.data.images.original.url;
            img.className = 'display'
        }

        //function to display the image
        getImage()
        console.log(weatherData, degrees, humidity, sky)
        return weatherData, degrees, humidity, sky
    }

    getData();
})





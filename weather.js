const COORDS = "coords"

const API_KEY = "31619606d4dff87ec0016e312f9cf0e2";

const weather = document.querySelector(".weather")

function getWeather(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`).then(function(response){
        return response.json()
    }).then(function(json){
        console.log(json);
        const temperature = json.main.temp
        const name = json.name
        weather.innerText = 
        `Temperature : ${temperature}°C
         City :  ${name}`
    })
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}

function handlesuccess(position){
    console.log(position)
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    }
    saveCoords(coordsObj)
}
function handleerror(){
    console.log('error');
}

function askforPosition(){
    navigator.geolocation.getCurrentPosition(handlesuccess, handleerror);
}

function loadedCoords(){
    const loadedcoords = localStorage.getItem(COORDS)
    if(loadedcoords === null){
        askforPosition()
    } else {
        const parsecoords = JSON.parse(loadedcoords)
        getWeather(parsecoords.latitude, parsecoords.longitude)
    }
}

function init(){
    loadedCoords()
}

init();
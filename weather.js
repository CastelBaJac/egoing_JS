const API_KEY = "6b1d67e1d5c23b3d065a982d45cca16f";
const COORDS = "coords"
const weather = document.querySelector(".js_weather");

function getWeather(lat , lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then( function(response){
        return response.json();
    })
    .then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
       weather.innerHTML=`현재 온도 : ${temperature} <br> 현재 위치 : ${place}`;
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}


function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj={
        latitude : latitude,
        longitude : longitude
    }
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoError(){
    alert("can't access geo location");
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);

}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);

    if(loadedCoords===null){
        askForCoords();
    }else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude,parsedCoords.longitude);
    }
}
function init(){
    loadCoords();
}

init();
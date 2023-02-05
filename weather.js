let country = document.querySelector("#country");
let city = document.querySelector("#city");
let check = document.querySelector("#check");
let tempicon = document.querySelector("#tempicon");
let weatherCountry = document.querySelector("#weatherCountry");
let weatherDescription = document.querySelector("#weatherDescription");
let temperature = document.querySelector("#temperature");
let feelsLike = document.querySelector("#feelsLike");
let Humidity = document.querySelector("#Humidity");
let longitude = document.querySelector("#longitude");
let latitude = document.querySelector("#latitude");
check.addEventListener("click",()=>{
   // console.log(country.value);
    //console.log(city.value);
    let key=`d1254a67722ab3cd736999bb8fcea671`
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city.value},${country.value}&appid=${key}`;
    fetch(url).then(response =>{
        return response.json();
    }).then(data=>{
        console.log(data);
        weatherCountry.innerText=`${data.name} / ${data.sys.country}`;
        temperature.innerHTML = `${data.main.temp}`;
        data.weather.forEach(items =>{
            weatherDescription.innerText = items.description;
        })
        feelsLike.innerText = `Feels like ${data.main.feels_like}`;
        Humidity.innerText =`Humidity ${data.main.humidity}`;
        longitude.innerText = `Longitude ${data.coord.lon}`;
        latitude.innerText = `Latitude ${data.coord.lat}`;
    })
    country.value="";
    city.value="";
})

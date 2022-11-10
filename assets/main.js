// search input by entering a city
//search button
//once searched, display the weather in each card
//once searched, display city, date and info at top 



function searchWeather(){

   var getCityInput = document.getElementById("searchBox");
    var cityName = document.getElementById ("cityName"); 
        cityName.innerHTML = getCityInput.value;
    
fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + getCityInput.value + '&units=imperial&appid=f5974a8f39defa4d231ee2456b263b09')
.then(response => response.json())
  .then(data => 
    
{
    for(i=0; i<4; i++) {
    
    var tempText = document.getElementById("temp");
    var windText = document.getElementById("wind");
    var humidityText = document.getElementById("humidity");
    var icon = document.getElementById("icon");
    tempText.innerHTML = "Temp: " + data.list[i].main.temp;
    windText.innerHTML = "Wind: " + data.list[i].wind.speed + "MPH";
    humidityText.innerHTML = "Humidity: " + data.list[i].main.humidity + "%";
    
    }
})};

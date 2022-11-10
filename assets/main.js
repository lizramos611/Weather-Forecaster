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
    var tempText = document.getElementsByClassName("list-group-item1");
    for (var i=0; i<tempText.length; i++) {
         tempText[i].innerHTML = "Temp: " + data.list[i].main.temp + "°";
    }

    var windText = document.getElementsByClassName("list-group-item2");
    for (var i=0; i<windText.length; i++) {
        windText[i].innerHTML = "Wind: " + data.list[i].wind.speed + "MPH";
    }

    var humidityText = document.getElementsByClassName("list-group-item3");
    for (var i=0; i<humidityText.length; i++) {
        humidityText[i].innerHTML = "Humidity: " + data.list[i].main.humidity + "%";
    }

    var iconText = document.getElementsByClassName("icon");
    var iconNum = data.list[i].weather.icon;
    for (var i=0; i<iconText.length; i++) {
fetch('http://openweathermap.org/img/wn/' + iconNum + '@2x.png');

    
}})};

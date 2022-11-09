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
{ return data.list.main.temp};


  displayWeather= function(data) {
    let {temp, wind, humidity} = data.current;

    var tempText = document.getElementById("temp");
    var windText = document.getElementById("wind");
    var humidityText = document.getElementById("humidity");
    tempText.innerHTML = "Temp:" + data[0].temp;
  
    displayWeather();
  })};
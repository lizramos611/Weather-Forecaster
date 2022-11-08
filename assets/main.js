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
    for (i=0; i >5; i++) {


 document.getElementById('temp').innerHTML = "Temp:" + 
   }
  })
  if (!response.ok) {
    throw new Error
  }
};
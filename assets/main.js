// search input by entering a city
//search button
//once searched, display the weather in each card
//once searched, display city, date and info at top 


//function for searching the weather
function searchWeather(){

   //changing the text on the city to be changed when user inputs a city
     var getCityInput = document.getElementById("searchBox");
    var cityName = document.getElementById ("cityName"); 
        cityName.innerHTML = getCityInput.value;

//fetch the API
fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + getCityInput.value + '&units=imperial&appid=f5974a8f39defa4d231ee2456b263b09')
.then(response => response.json())
  .then(data => 

{
//changing all the temp texts in the HTML to display the array of temps
//console.log(data.list);



    var tempText = document.getElementsByClassName("list-group-item1");
  for (var i=0; i < tempText.length; i++) {
         tempText[i].innerHTML= "Temp: " + data.list[i*8].main.temp;
         //console.log(data.list[i*8]);
    }

//changing the text in the html to display all the winds for 5 days as longas the length of the variable
    var windText = document.getElementsByClassName("list-group-item2");
for (var i =0; i <windText.length; i++){
    windText[i].innerHTML = "Wind: " + data.list[i*8].wind.speed + "MPH";
    }
//changing the text in the html to display the humidity for all days
    var humidityText = document.getElementsByClassName("list-group-item3");
    for (var i=0; i<humidityText.length; i++) {
        humidityText[i].innerHTML = "Humidity: " + data.list[i*8].main.humidity + "%";
    }
//fetching the icons for the weather conditions for every 24 hours
    var iconText = document.getElementsByClassName("icon");
    var iconNum = data.list[i].weather[0].icon;
    
    for (var i=0; i<iconText.length; i++) {
    iconText[i].setAttribute('src', 'http://openweathermap.org/img/wn/' + data.list[i*8].weather[0].icon + '@2x.png');
   // console.log(data.list[i*8]);
  
}



var days = document.getElementsByClassName("card-title");
var myDate = new Date();
//console.log(myDate);
//getting the correct date and dispalying it under the city
month = myDate.getMonth() + 1;
date = myDate.getDate();
year = myDate.getUTCFullYear();
newDate = month + "/" + date + '/' + year;
//console.log(newDate);
var dateDisplay =document.getElementsByClassName("date")[0];
dateDisplay.innerHTML = newDate;
//console.log(dateDisplay);
var days = myDate.getDay();
var dayDisplay = document.getElementsByClassName("card-title");

for (var i= 0; i<dayDisplay.length; i++) {
   //for loop to display all the days of the week at the top of the weather boxes
     var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  dayDisplay[i].innerHTML = weekDays[days++];

    };  
localStorage.setItem("search", JSON.stringify(getCityInput.value));
var searchHistory = JSON.parse(localStorage.getItem("search"));
//console.log(searchHistory);
var historyBox = document.getElementsByClassName("history");
historyBox[0].innerHTML += " " + searchHistory + ",";
//console.log(historyBox);




})
  //error message if city enter by user is incorrect
  .catch(err => alert("Please enter a city!")); 
  
  
//local storage


 } 
;

//API kep for OpenWeather API
//const APIKEY = "edf90ab7d1e2872323a8f45bf7ec1e92"
const APIKEY ="9c795fff2ea9a6d153e76124b92f804f"
var places =[];
var apiurl ="https://api.openweathermap.org/data/2.5/forecast?lat={placelat}&lon={placelon}&appid={APIKEY}"
var inputPlace = document.getElementById("input-place");
var buttonSearch = document.getElementById("btn-search");
//var searchHis = document.getElementById("sHistory");
var searchHis = $("#sHistory");
var weathertoday=$("#weather-today");
var fivecardsstyle = $("#five-cards");
var fivecardsstyle1 = $("#five-cards1");
var fivecardsstyle2 = $("#five-cards2");
var fivecardsstyle3 = $("#five-cards3");
var fivecardsstyle4 = $("#five-cards4");
var wToday = document.getElementById("current-title");
var currentTemp = document.getElementById("cur-temp");
var currenthum = document.getElementById("cur-hum");
var currentwindsp = document.getElementById("cur-windSp");
var currentDate = dayjs().format('M/DD/YYYY');
//var currenticon = document.getElementById("c-icon");
var currenticon = $("c-icon");
var weather5 =document.getElementById("weather-five");
var dateone = document.getElementById("date1")
var datetwo = document.getElementById("date2")
var datethree = document.getElementById("date3")
var datefour = document.getElementById("date4")
var datefive = document.getElementById("date5")
var tempone = document.getElementById("temp1")
var temptwo = document.getElementById("temp2")
var tempthree = document.getElementById("temp3")
var tempfour = document.getElementById("temp4")
var tempfive = document.getElementById("temp5")
var windone = document.getElementById("wind1")
var windtwo = document.getElementById("wind2")
var windthree = document.getElementById("wind3")
var windfour = document.getElementById("wind4")
var windfive = document.getElementById("wind5")
var humone = document.getElementById("hum1")
var humtwo = document.getElementById("hum2")
var humthree = document.getElementById("hum3")
var humfour = document.getElementById("hum4")
var humfive = document.getElementById("hum5")
var fcicon1 = document.getElementById("icon1");


     function searchWeather(){
       
       
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputPlace.value + "&APPID=9c795fff2ea9a6d153e76124b92f804f")
    .then(response => response.json())
       .then(data => {
        //For displaying current Weather of user inputed place
     var placeValue = data["name"];
     var temp = data[ 'main']['temp'];
     var tempF = Math.round((temp-273.15) * 1.8 +32);
     var cwindsp = data['wind']['speed'];
     var chumidity = data['main']['humidity'];
     var cicon = data['weather'][0]['icon'];
     var iconurl = "http://openweathermap.org/img/w/" + cicon + ".png";
     $('#c-icon').attr('src',iconurl);
     
       wToday.innerHTML= placeValue + "  " + currentDate;
       currentTemp.innerHTML= "Temp : " + tempF + " F ";
       currentwindsp.innerHTML = "Wind : " + cwindsp + " MPH ";
       currenthum.innerHTML= " Humidity : " + chumidity + " % ";

       var clatitude = data['coord']['lat'];
        var clongitutude = data['coord']['lon'];
        currenticon.addClass("c-icon")
        weathertoday.addClass("weather-today")
        fivecardsstyle.addClass("five-cards")
        fivecardsstyle1.addClass("five-cards1")
        fivecardsstyle2.addClass("five-cards2")
        fivecardsstyle3.addClass("five-cards3")
        fivecardsstyle4.addClass("five-cards4")
        return { 
            lat: clatitude,
            lon: clongitutude
        }
    })
    .then(coordinates => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${APIKEY}&cnt=40`)
        .then(response => response.json())
        .then(data => {
            fivecardsstyle.addClass("fivecards")
            //Forecast for 1 of next 5 days
            console.log("forecast",  data)
            var fcdate1 = data ["list"][3]["dt_txt"]
            var formateddate1 = dayjs(fcdate1).format('MM/DD/YYYY');
            dateone.innerHTML= formateddate1

            var fccicon1 = data['list'][3]['weather'][0]['icon'];
            var fciconurl = "http://openweathermap.org/img/w/" + fccicon1 + ".png";
             $('#icon1').attr('src',fciconurl);
        
            var fctemp1 = data ["list"][3]["main"]["temp"]
            var cvfctemp1 = Math.round((fctemp1-273.15) * 1.8 +32);
            tempone.innerHTML= "Temp: " + cvfctemp1 + " °F"

            var fcwind1 = data ["list"][3]["wind"]["speed"]
            windone.innerHTML= "Wind: " + fcwind1 + " MPH"

            var fchum1 = data ["list"][3]["main"]["humidity"]
            humone.innerHTML= "Humidity: " + fchum1 + " %"

            //Forecast for day2 of next 5 days
            var fcdate2 = data ["list"][10]["dt_txt"]
            var formateddate2 = dayjs(fcdate2).format('MM/DD/YYYY');
            datetwo.innerHTML= formateddate2

            var fccicon2 = data['list'][10]['weather'][0]['icon'];
            var fciconurl = "http://openweathermap.org/img/w/" + fccicon2 + ".png";
             $('#icon2').attr('src',fciconurl);
        
            var fctemp2 = data ["list"][10]["main"]["temp"]
            var cvfctemp2 = Math.round((fctemp2-273.15) * 1.8 +32);
            temptwo.innerHTML= "Temp: " + cvfctemp2 + " °F"

            var fcwind2 = data ["list"][10]["wind"]["speed"]
            windtwo.innerHTML= "Wind: " + fcwind2 + " MPH"

            var fchum2 = data ["list"][10]["main"]["humidity"]
            humtwo.innerHTML= "Humidity: " + fchum2 + " %"

             //Forecast for day3 of next 5 days
             var fcdate3 = data ["list"][18]["dt_txt"]
             var formateddate3 = dayjs(fcdate3).format('MM/DD/YYYY');
             datethree.innerHTML= formateddate3

             var fccicon3 = data['list'][18]['weather'][0]['icon'];
            var fciconurl = "http://openweathermap.org/img/w/" + fccicon3 + ".png";
             $('#icon3').attr('src',fciconurl);
         
             var fctemp3 = data ["list"][18]["main"]["temp"]
             var cvfctemp3 = Math.round((fctemp3-273.15) * 1.8 +32);
             tempthree.innerHTML= "Temp: " + cvfctemp3 + " °F"
 
             var fcwind3 = data ["list"][18]["wind"]["speed"]
             windthree.innerHTML= "Wind: " + fcwind3 + " MPH"
 
             var fchum3 = data ["list"][18]["main"]["humidity"]
             humthree.innerHTML= "Humidity: " + fchum3 + " %"

             //Forecast for day4 of next 5 days
             var fcdate4 = data ["list"][26]["dt_txt"]
             var formateddate4 = dayjs(fcdate4).format('MM/DD/YYYY');
             datefour.innerHTML= formateddate4

             var fccicon4 = data['list'][26]['weather'][0]['icon'];
            var fciconurl = "http://openweathermap.org/img/w/" + fccicon4 + ".png";
             $('#icon4').attr('src',fciconurl);
         
             var fctemp4 = data ["list"][26]["main"]["temp"]
             var cvfctemp4 = Math.round((fctemp3-273.15) * 1.8 +32);
             tempfour.innerHTML= "Temp: " + cvfctemp4 + " °F"
 
             var fcwind4 = data ["list"][26]["wind"]["speed"]
             windfour.innerHTML= "Wind: " + fcwind4 + " MPH"
 
             var fchum4 = data ["list"][26]["main"]["humidity"]
             humfour.innerHTML= "Humidity: " + fchum4 + " %"

             //Forecast for day5 of next 5 days
             var fcdate5 = data ["list"][34]["dt_txt"]
             var formateddate5 = dayjs(fcdate5).format('MM/DD/YYYY');
             datefive.innerHTML= formateddate5

             var fccicon5 = data['list'][34]['weather'][0]['icon'];
            var fciconurl = "http://openweathermap.org/img/w/" + fccicon5 + ".png";
             $('#icon5').attr('src',fciconurl);
         
             var fctemp5 = data ["list"][34]["main"]["temp"]
             var cvfctemp5 = Math.round((fctemp3-273.15) * 1.8 +32);
             tempfive.innerHTML= "Temp: " + cvfctemp5 + " °F"
 
             var fcwind5 = data ["list"][34]["wind"]["speed"]
             windfive.innerHTML= "Wind: " + fcwind5 + " MPH"
 
             var fchum5 = data ["list"][34]["main"]["humidity"]
             humfive.innerHTML= "Humidity: " + fchum5 + " %"

                weather5.innerHTML="5-Day Forecast : "; 
                //Call local storage function once search button is clicked
                

        });
        
    });
     }
     // Saves each search place in local storage and displays as clickable button in search history
    function doLocal(){
    //Gets stored places from local storage
    let getLocalStorageResults = JSON.parse(localStorage.getItem('poonamWeatherDashboard')) || [];
    const inputValue = document.getElementById('input-place').value;
    getLocalStorageResults.push(inputValue)
    localStorage.setItem('poonamWeatherDashboard', JSON.stringify(getLocalStorageResults));
    //for (var i = getLocalStorageResults.length -1; i >= 0; i--) {
        for (var i = 0; i< getLocalStorageResults.length; i++){
    var btn = document.createElement('button');
    btn.className= ('button-l');
    btn.textContent = getLocalStorageResults[i];
    sHistory.append(btn)
    
    localStorage.clear();
     }; 

     
} 
     //Call searchWeather function on click of newly created seach history places buttons
    sHistory.addEventListener("click", function(event){
    console.log("Clicked");})
    buttonSearch.addEventListener("click", doLocal)
    
         
        
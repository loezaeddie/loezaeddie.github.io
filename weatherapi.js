var key = "61a0f90f60ac4990a3b160446171602"
var weatherURL = ""

function showAnimal(data) {
  var temperature = data['current']['temp_f']
if (temperature < 20){
  document.getElementById("weatherinfocontainer").innerHTML = "It's " + temperature
  document.getElementById("imagecontainer").innerHTML = "<img src='images/Really Cold Bulldog.jpg'>"
  }

else if (temperature < 50){
  document.getElementById("weatherinfocontainer").innerHTML = "It's " + temperature
  document.getElementById("imagecontainer").innerHTML = "<img src='images/Cold Bulldog.jpg'>"
}

else if (temperature < 70){
  document.getElementById("weatherinfocontainer").innerHTML = "It's " + temperature
  document.getElementById("imagecontainer").innerHTML = "<img src='images/Moderate Bulldog.jpg'>"
}

else if (temperature < 80){
  document.getElementById("weatherinfocontainer").innerHTML = "It's " + temperature
  document.getElementById("imagecontainer").innerHTML = "<img src='images/Warm Bulldog.jpg' width='700' height='500'>"
}

else if (temperature < 90){
  document.getElementById("weatherinfocontainer").innerHTML = "It's " + temperature
  document.getElementById("imagecontainer").innerHTML = "<img src='images/French Bulldog and hot weather.jpg'>"
}
}

function makeRequest() {
  $.ajax({
    url: weatherURL,// what should go here
    success: function(data) {
      showAnimal(data);
    }
  })
}


function submit() {
  var zipcode = document.getElementById("zipcode").value
  weatherURL = "https://api.apixu.com/v1/current.json?key=" + key + "&q=" + zipcode
  makeRequest()
}

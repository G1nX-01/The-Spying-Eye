var dox = ""
var bluron = false
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.ipify.org/');
xhr.onload = function() {
  if (xhr.status === 200) {
     dox = xhr.responseText;
    xhr.open('GET', 'https://ipapi.co/' + dox + '/json/');
xhr.onload = function() {
  if (xhr.status === 200) {
    var response = JSON.parse(xhr.responseText);
    var city = response.city;
    var region = response.region;
    var country_name = response.country_name;
    var latitude = response.latitude;
    var longitude = response.longitude;
    var currency = response.currency_name;
    document.getElementById("doxtext").innerHTML = "You live in " + country_name + "." + " Your latitude is " + latitude + " and your longitude is " + longitude + "." + " Your region is " + region + " and you live in " + city + "." + ' Your currency is ' + '"' + currency + '".' + " Your IP is: " + dox + "."
  }
};
xhr.send();
  }
};
xhr.send();

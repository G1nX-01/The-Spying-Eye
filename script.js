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
	var provider = response.org;
	var eu = response.in_eu;
	if (!eu) {eu = "You don't live in the European Union."} else {eu = "You live in the European Union."}
    document.getElementById("doxtext").innerHTML = "You live in " + country_name + "." + " Your latitude is " + latitude + " and your longitude is " + longitude + "." + " Your region is " + region + " and you live in " + city + "." + ' Your currency is ' + '"' + currency + '".' + " Your IP is: " + dox + '. Your internet provider (isp) is "' + provider + '". ' + eu
  }
};
xhr.send();
  }
};
xhr.send();

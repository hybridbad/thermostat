function displayWeather(city){
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
  var token = '&appid=9bdd49f453fd55aacdb7d6a937dc2243';
  var units = '&units=metric';
  $.get(url + token + units, function(data){
    $('#current-temperature').text(data.main.temp);
  });
};

displayWeather('London');

$('#current-city').change(function(){
  var city = $('#current-city').val();
  displayWeather(city);
});

$('#select-city').submit(function(event) {
  event.preventDefault();
  var city = $('#current-city').val();
  displayWeather(city);
});


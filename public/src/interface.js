var thermostat = new Thermostat();

$(document).ready(function () {

  $.get('http://localhost:9292/temp', function(data){
    console.log(data);
    var temp = data.temperature;
    var psmstate = data.psmstatus;

    thermostat._temperature = parseInt(temp);
    thermostat._powerSaving = psmstate;
    updatePage();
    dialDown();
    dialUp();
  });

  $('#select-city').submit(function (event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  });

  $('.reset').click(function () {
    thermostat.reset();
    updatePage();
    dialDown();
    dialUp();
  });

  $('.psm').click(function () {
    thermostat.togglePowerSaving();
    updatePage();
  });

  $(".minus").mousedown(function () {
    if (thermostat._temperature > thermostat.MINIMUM_TEMPERATURE) {
      thermostat.down();
      updatePage();
      dialDown();
    }
  });

  $(".plus").mousedown(function () {
    if (thermostat._temperature < thermostat._maxTemp) {
      thermostat.up();
      updatePage();
      dialUp();
    }
  });

});

function displayWeather(city) {
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
  var token = '&appid=9bdd49f453fd55aacdb7d6a937dc2243';
  var units = '&units=metric';
  $.get(url + token + units, function (data) {
    $('#current-temperature').text(data.main.temp);
  });
};

function updatePage() {
  $('#temperature').text(thermostat._temperature);
  $('#psm-text').text(thermostat._powerSavingStatus);
  if (thermostat.energyUsage() === 'low-usage') {
    $('.energy-usage').css('color', 'green');
  } else if (thermostat.energyUsage() === 'medium-usage') {
    $('.energy-usage').css('color', 'black');
  } else {
    $('.energy-usage').css('color', 'red');
  };
  if (thermostat._powerSaving === false) {
    $(".psm").css('color', 'red')
  } else {
    $(".psm").css('color', 'black')
  };
  $(".heat").text("" + thermostat._temperature);
  $(".ext").text("" + thermostat._temperature);
  $(".number").css("transform", "translate(-50%, -50%) rotate(" + (-180 + thermostat._temperature * 10) + "deg)");
  $(".shadow").css("transform", "translate(-50%, -50%) rotate(" + (-180 + thermostat._temperature * 10) + "deg)");
  $(".fill").css("animation", "none");
  $(".shadow").css("animation", "none");
};

function dialUp () {
  if (thermostat._temperature > 19) {
    $(".fill1").css("transform", "rotate(" + (thermostat._temperature - 18) * 10 + "deg)").css("transition-delay", "0s");
  } else if (thermostat._temperature == 19) {
    $(".fill1").css("transform", "rotate(" + (thermostat._temperature - 18) * 10 + "deg)").css("transition-delay", "1s");
  } else {
    $(".fill2").css("transform", "rotate(" + thermostat._temperature * 10 + "deg)").css("transition-delay", "0s");
  }
};

function dialDown () {
  if (thermostat._temperature >= 18) {
    $(".fill1").css("transform", "rotate(" + (thermostat._temperature - 18) * 10 + "deg)").css("transition-delay", "0s");
  } else if (thermostat._temperature == 17) {
    $(".fill2").css("transform", "rotate(" + thermostat._temperature * 10 + "deg)").css("transition-delay", "0.5s");
  } else {
    $(".fill2").css("transform", "rotate(" + thermostat._temperature * 10 + "deg)").css("transition-delay", "0s");
  }
};




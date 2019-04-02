function updateStuff () {
  $('#temperature').text(thermostat._temperature);
  $('#psm-text').text(thermostat._powerSavingStatus);
  $('#energy-usage').text(thermostat.energyUsage());
  if (thermostat.energyUsage() === 'low-usage') {
    $('#energy-usage').css('color', 'green');
  } else if (thermostat.energyUsage() ==='medium-usage') {
    $('#energy-usage').css('color', 'black');
  } else {
    $('#energy-usage').css('color', 'red');
  };
};

$(document).ready(function(){
  var thermostat = new Thermostat();
  updateStuff();
})

$('#up').click(function() {
  thermostat.up();
  updateStuff();
})

$('#down').click(function() {
  thermostat.down();
  updateStuff();
})

$('#reset').click(function() {
  thermostat.reset();
  updateStuff();
})

$('#psm-toggle').click(function() {
  thermostat.togglePowerSaving();
  updateStuff();
})


